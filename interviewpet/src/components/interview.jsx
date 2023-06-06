import React from "react";
import { Link } from "react-router-dom";
function Interview() {
  return (
    <>
      <div
        style={{
          margin: 100,
        }}
      >
        <section
          style={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              marginTop: 150,
            }}
          >
            <p
              style={{
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: "20px",
              }}
            >
              {" "}
              Timer : 01:02:03
            </p>
            <p
              style={{
                marginTop: -20,
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: "20px",
              }}
            >
              Day : Tuesday
            </p>
            <p
              style={{
                marginTop: -20,

                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: "20px",
              }}
            >
              Date :23rd Nov
            </p>
          </div>
          <div
            style={{
              marginTop: -100,
            }}
          >
            <center>
              <p
                style={{
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: 800,
                  fontSize: "30px",
                }}
              >
                InterView Session
              </p>
              <div
                style={{
                  backgroundColor: "white",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  flexDirection: "row",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#030232",
                    borderRadius: 100,
                    width: 200,
                    display: "flex",
                    alignContent: "center",
                    justifyContent: "center",
                    alignItems: "center",

                    height: 200,
                  }}
                >
                  {" "}
                  <img
                    src="../assets/microphone.png"
                    style={{
                      alignSelf: "center",

                      width: 100,
                      height: 100,
                    }}
                  />
                </div>
              </div>
              <p
                style={{
                  marginTop: 40,
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "15px",
                }}
              >
                Hello there I am A Voice Pet How can I help you .
              </p>

              <div
                style={{
                  display: "flex",
                  width: "50%",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  flexDirection: "row",
                  flex: 1,
                }}
              >
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
                    bottom: "100px",
                    width: "200px",
                    height: "60px",
                    verticalAlign: "middle",
                    justifyItems: "center",
                    alignItems: "center",
                    borderRadius: "10px",
                  }}
                >
                  Start Now
                </button>
                <img
                  src="../assets/google.png"
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 50,
                  }}
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
                    bottom: "100px",
                    width: "200px",
                    height: "60px",
                    verticalAlign: "middle",
                    justifyItems: "center",
                    alignItems: "center",
                    borderRadius: "10px",
                  }}
                >
                  Reset{" "}
                </button>
              </div>
            </center>
          </div>
        </section>

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
            InterViewPet - A Seamless Digital InterView Platform
          </p>
        </div>
      </div>
    </>
  );
}
export default Interview;
