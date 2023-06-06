import React from "react";
import "./css/main.css";
import { Link } from "react-router-dom";
function Landing() {
  return (
    <>
      <div>
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
              <p
                style={{
                  fontFamily: "Poppins",
                  fontStyle: "italic",
                  fontWeight: 500,
                  fontSize: "20px",
                }}
              >
                Your One Step
              </p>
              <p
                style={{
                  marginTop: "-30px",

                  fontFamily: "Poppins",
                  fontWeight: 600,
                  fontSize: "50px",
                }}
              >
                Virual InterView Sessions
              </p>
              <p
                style={{
                  marginTop: "-70px",
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: 800,
                  fontSize: "50px",
                }}
              >
                InterViewPet
              </p>
              <p
                style={{
                  marginTop: "-60px",

                  fontFamily: "Poppins",
                  fontStyle: "italic",
                  fontWeight: 500,
                  fontSize: "20px",
                }}
              >
                A Seamless Digital InterView Platform
              </p>
            </div>

            <img
              src="../assets/home.svg"
              style={{
                width: "500px",
                position: "absolute",
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
            </div>
          </section>
          <div
            style={{
              display: "flex",
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
              InterViewPet - A Seamless Digital InterView Platform
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Landing;
