import { Client, Account } from "appwrite";

const sdk = new Client();
sdk
  .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
  .setProject("647dfae3e60042360d01"); // Your project ID

const account = new Account(sdk);

export default account;
