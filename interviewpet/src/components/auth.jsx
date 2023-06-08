import React, { useEffect } from "react";
import { account, graphql } from "../sdk/appwrite.jsx";
import { Link } from "react-router-dom";
function Auth() {
  const [email, setEmail] = React.useState("");
  useEffect(() => {
    getCurrentUser();
  }, []);

  const getCurrentUser = async () => {
    try {
      const data = await account.get();

      if (data) {
        window.location.href = "/home";
      }
    } catch (error) {
      console.log(error);
    }
  };

  const loginwithGoogle = async (e) => {
    e.preventDefault();
    const acc = account.createOAuth2Session(
      "google",
      "http://localhost:5173/home",
      "http://localhost:5173/login"
    );
    console.log(acc);
  };
  return (
    <>
      <div
        style={{
          margin: 120,
        }}
      >
        <section>
          <center>
            <p
              style={{
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: 800,
                color: "#030232",
                fontSize: "30px",
              }}
            >
              Fluencer
            </p>
            <p
              style={{
                fontFamily: "Poppins",
                marginTop: -20,
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "20px",
                color: "#030232",
              }}
            >
              Fluencer - A Seamless Digital English Fluency enhancing and
              Virtual Assistant Platform
            </p>
          </center>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              flex: 1,
            }}
          >
            <div
              style={{
                marginTop: 50,
                flex: 0.3,
                borderRadius: 10,
                backgroundColor: "#030232",
              }}
            >
              <center>
                <p
                  style={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: 800,
                    color: "white",
                    fontSize: "30px",
                  }}
                >
                  Authentication
                </p>{" "}
                <div
                  style={{
                    cursor: "pointer",
                    marginTop: 50,
                    width: 400,
                    margin: 30,
                    borderRadius: 10,
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                    backgroundColor: "white",
                  }}
                >
                  <div
                    onClick={(e) => loginwithGoogle(e)}
                    style={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      height: 70,
                      verticalAlign: "center",
                      borderRadius: 10,
                    }}
                  >
                    <img
                      src="../assets/google.png"
                      style={{
                        width: 50,
                        height: 50,
                        marginTop: 10,
                        marginLeft: 30,
                      }}
                    />
                    <p
                      style={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        color: "#030232",
                        marginLeft: 20,
                        fontWeight: 600,
                        fontSize: "20px",
                      }}
                    >
                      SignIn With Google
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    cursor: "pointer",
                    marginTop: 50,
                    width: 400,
                    margin: 30,
                    marginBottom: 50,
                    borderRadius: 10,
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                    backgroundColor: "white",
                  }}
                >
                  <div
                    style={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      height: 70,
                      verticalAlign: "center",
                      borderRadius: 10,
                    }}
                  >
                    <img
                      src="../assets/facebook.png"
                      style={{
                        width: 50,
                        height: 50,
                        marginTop: 10,
                        marginLeft: 30,
                      }}
                    />
                    <p
                      style={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        color: "#030232",
                        marginLeft: 20,
                        fontWeight: 600,
                        fontSize: "20px",
                      }}
                    >
                      SignIn With Facebook
                    </p>
                  </div>
                </div>
              </center>
            </div>
            <div
              style={{
                flex: 0.5,
                backgroundColor: "red",
              }}
            >
              <center>
                {" "}
                <img
                  style={{
                    display: "flex",
                    flex: 0.8,
                    position: "fixed",
                    width: "40%",
                    right: "100px",
                    top: "300px",
                    height: "40%",
                    overflow: "hidden",
                  }}
                  src="../assets/login.svg"
                />{" "}
              </center>{" "}
            </div>
          </div>
        </section>
        {/* <button
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
        </button> */}

        <div
          style={{
            display: "flex",
            left: 0,
            justifyContent: "center",
            position: "absolute",
            bottom: "0px",
            backgroundColor: "#030232",
            width: "100%",
          }}
        >
          <p
            style={{
              fontFamily: "Poppins",

              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "15px",
              color: "white",
            }}
          >
            Fluencer - A Seamless Digital English Fluency enhancing and Virtual
            Assistant Platform
          </p>
        </div>
      </div>
    </>
  );
}
export default Auth;
