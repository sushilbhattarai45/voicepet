import { Client, Account, Graphql, Databases } from "appwrite";

const sdk = new Client();
sdk
  .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
  .setProject("647dfae3e60042360d01"); // Your project ID
export const account = new Account(sdk);

export const graphql = new Graphql(sdk);
export const database = new Databases(sdk);
// let logged = false;

// if (account != null) {
//   // console.log(account.getSession); // let data = await account.get();
//   console.log("email" + "data.email");
//   logged = true;
// }
// console.log(logged);
// export const loggedStatus = logged;
