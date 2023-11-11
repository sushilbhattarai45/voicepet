import React, { useEffect } from "react";
import { Account, Client } from "appwrite";
import "./css/main.css";
import { Link } from "react-router-dom";
import { graphql, account } from "../sdk/appwrite.jsx";

function Landing() {
  useEffect(() => {
    getCurrentUser().then((user) => {
      console.log(user);
    });
  }, []);
  const getCurrentUser = async () => {
    try {
      const data = await account.get();

      if (account !== null) {
        window.location.href = "/home";
      }

      // setUserDetails(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        style={{
          overflow: "hidden",
        }}
      >
        <div
          style={{
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            flexDirection: "row",
          }}
        >
          <section
            className="left"
            style={{
              marginLeft: 100,
              flex: 0.6,
            }}
          >
            <div
              style={{
                marginTop: 70,
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                flex: 1,
              }}
            >
              <span
                style={{
                  fontStyle: "italic",
                  fontWeight: 500,
                  fontSize: "20px",
                }}
              >
                Your One Step
              </span>
              <span
                style={{
                  fontWeight: 600,
                  fontSize: "35px",
                }}
              >
                English Learner Platform
              </span>
              <span
                style={{
                  fontStyle: "normal",
                  fontWeight: 800,
                  marginTop: 10,
                  fontFamily: "Poppins",
                  fontSize: "50px",
                }}
              >
                "VoicePet"
              </span>
              <span
                style={{
                  fontFamily: "Arial",
                  fontFamily: "Poppins",
                  fontWeight: 500,
                  fontSize: "20px",
                }}
              >
                A Seamless Digital English Fluency enhancing and Virtual
                Assistant Platform
              </span>
            </div>

            <img
              src="../assets/home.svg"
              style={{
                zIndex: -3,
                marginTop: -100,
                overflow: "hidden",
                width: "500px",
                height: "500px",
                bottom: "-50px",
                opacity: 0.7,
              }}
            />
          </section>
          <section
            className="right"
            style={{
              flex: 0.4,
            }}
          >
            <div
              className="content"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                flex: 1,
              }}
            >
              <img
                style={{
                  display: "flex",
                  flex: 0.8,
                  position: "fixed",
                  width: "40%",
                  right: "100px",
                  top: "200px",
                  height: "40%",
                  overflow: "hidden",
                }}
                src="../assets/interview.svg"
              />

              <Link to="/auth">
                {" "}
                <button
                  style={{
                    display: "flex",
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: 600,
                    fontSize: "20px",
                    lineHeight: "45px",
                    justifyContent: "center",
                    textAlign: "center",
                    color: "white",
                    backgroundColor: "#030232",
                    position: "absolute",
                    bottom: "100px",
                    position: "absolute",
                    width: "200px",
                    height: "60px",
                    verticalAlign: "middle",
                    justifyItems: "center",
                    alignItems: "center",
                    borderRadius: "10px",
                    left: "1010px",
                  }}
                >
                  Start Now
                </button>
              </Link>
            </div>
          </section>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              position: "fixed",
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
              VoicePet - A Seamless Digital English Fluency enhancing and
              Virtual Assistant Platform
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Landing;
