import { Account, Client, Databases } from 'react-native-appwrite';

export const client = new Client()
.setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!)
.setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!)
.setPlatform(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_NAME!)

export const account = new Account(client);

export const database = new Databases(client);

export const DB_ID = process.env.DB_ID!;

export const HABBIT_ID = process.env.HABBIT_ID!;