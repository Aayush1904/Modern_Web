import * as sdk from 'node-appwrite';

//decrypting the id:
const {
    PROJECT_ID , API_KEY , DATABASE_ID , MODAL_COLLECTION_ID , NEXT_PUBLIC_BUCKET_ID : BUCKET_ID , NEXT_PUBLIC_ENDPOINT : ENDPOINT
} = process.env;

const client = new sdk.Client();

client 
    .setEndpoint(ENDPOINT!)
    .setProject(PROJECT_ID!)
    .setKey(API_KEY!)

export const databases = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const model = new sdk.Users(client);