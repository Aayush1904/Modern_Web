from flask import Flask, render_template, request
import pandas as pd
import numpy as np
import requests
from sklearn.svm import SVR
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error, mean_absolute_error
from sklearn.preprocessing import StandardScaler
import matplotlib.pyplot as plt
import io
import base64
from statsmodels.tsa.statespace.sarimax import SARIMAX

app = Flask(__name__)

def fetch_data_from_appwrite():
    headers = {
        'X-Appwrite-Project': PROJECT_ID,
        'X-Appwrite-Key': API_KEY
    }
    response = requests.get(f"{ENDPOINT}/databases/{DATABASE_ID}/collections/{MODAL_COLLECTION_ID}/documents", headers=headers)
    response.raise_for_status()  # Ensure you handle HTTP errors
    data = response.json()
    return pd.DataFrame(data['documents'])

def sarima_forecast(train, test, order=(1, 1, 1), seasonal_order=(1, 1, 1, 12)):
    model = SARIMAX(train['onion_price'], order=order, seasonal_order=seasonal_order)
    sarima_model = model.fit(disp=False)
    sarima_forecast = sarima_model.get_forecast(steps=len(test))
    sarima_pred = sarima_forecast.predicted_mean
    return sarima_pred

def create_lag_features(df, lags=5):
    df = df.copy()
    for col in df.columns:
        for lag in range(1, lags + 1):
            df[f'{col}_lag_{lag}'] = df[col].shift(lag)
    df.dropna(inplace=True)
    return df

@app.route('/')
def index():
    data = fetch_data_from_appwrite()

    # Ensure the data has the correct format
    if 'onion_price' not in data.columns:
        return "Data format error", 500

    train_size = int(len(data) * 0.8)
    train, test = data[:train_size], data[train_size:]

    # SARIMA Model Prediction
    sarima_pred = sarima_forecast(train, test)
    rmse_sarima = np.sqrt(mean_squared_error(test['onion_price'], sarima_pred))
    mae_sarima = mean_absolute_error(test['onion_price'], sarima_pred)

    # Apply lag features to the data for SVM
    data_with_lags = create_lag_features(data, lags=5)
    X = data_with_lags.drop(columns=['onion_price'])
    y = data_with_lags['onion_price']
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    scaler = StandardScaler()
    X_train_scaled = scaler.fit_transform(X_train)
    X_test_scaled = scaler.transform(X_test)

    svm_model = SVR(kernel='rbf')
    svm_model.fit(X_train_scaled, y_train)

    y_pred_svm = svm_model.predict(X_test_scaled)

    rmse_svm = np.sqrt(mean_squared_error(y_test, y_pred_svm))
    mae_svm = mean_absolute_error(y_test, y_pred_svm)

    plt.figure(figsize=(12, 6))
    plt.plot(test.index, test['onion_price'], label='Actual Onion Prices', color='blue')
    plt.plot(test.index, sarima_pred, label='SARIMA Predictions', color='red')
    plt.legend()
    plt.title('Price Predictions: SARIMA vs SVM')
    plt.xlabel('Date')
    plt.ylabel('Price')

    img = io.BytesIO()
    plt.savefig(img, format='png')
    img.seek(0)
    plot_url = base64.b64encode(img.getvalue()).decode()

    return render_template('/Users/aayushagarwal/sih/app/(root)/pricemodal/page.tsx',
                           plot_url=plot_url,
                           rmse_sarima=rmse_sarima, mae_sarima=mae_sarima,
                           rmse_svm=rmse_svm, mae_svm=mae_svm)

if __name__ == '__main__':
    app.run(debug=True)
