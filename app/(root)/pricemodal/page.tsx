"use client"

import React, { useEffect, useState } from 'react';

interface PredictionData {
    rmse_sarima: number;
    mae_sarima: number;
    rmse_svm: number;
    mae_svm: number;
    plot_url: string;
}

const Page = () => {
    const [data, setData] = useState<PredictionData | null>(null);

    useEffect(() => {
        fetch('/api/predictions')
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1>Price Predictions</h1>
            {data ? (
                <>
                    <h2>SARIMA Model</h2>
                    <p>RMSE: {data.rmse_sarima}</p>
                    <p>MAE: {data.mae_sarima}</p>

                    <h2>SVM Model</h2>
                    <p>RMSE: {data.rmse_svm}</p>
                    <p>MAE: {data.mae_svm}</p>

                    <h2>Price Predictions Plot</h2>
                    <img src={`data:image/png;base64,${data.plot_url}`} alt="Price Predictions Plot" />
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Page;
