import React from "react";
import account from "../sdk/appwrite.jsx";
import { Link } from "react-router-dom";
function Login() {
  const loginwithGoogle = async (e) => {
    e.preventDefault();
    const acc = account.createOAuth2Session(
      "google",
      "http://localhost:5173/",
      "http://localhost:5173/login"
    );
    console.log(acc);
  };
  return (
    <>
      <div>
        <button
          onClick={(e) => loginwithGoogle(e)}
          style={{
            width: "100px",
            height: "50px",
            backgroundColor: "red",
            color: "white",
            borderRadius: "10px",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          {" "}
          Sign In
        </button>
      </div>
    </>
  );
}
export default Login;
