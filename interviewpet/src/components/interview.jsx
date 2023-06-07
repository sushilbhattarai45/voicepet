import React from "react";
import SpeechRecognition, {
  useSpeechRecognition,
  resetTranscript,
  browserSupportsSpeechRecognition,
} from "react-speech-recognition";
import axios from "axios";
import { Link } from "react-router-dom";
import { account, database } from "../sdk/appwrite";
import { ID } from "appwrite";
function Interview() {
  const [isStarted, setIsStarted] = React.useState(false);
  const [mainImg, setMainImg] = React.useState(false);
  async function getData() {
    const promise = database.createDocument(
      "64807d7325103770a222",
      "64807d872f22ce9d0c9a",
      ID.unique(),
      {
        user_id: "John",
        qnans: "29",
        date: "2021-04-01T00:00:00.000Z",
      }
    );
    promise.then(
      function (response) {
        console.log("successs");
        console.log(response); // Success
      },
      function (error) {
        console.log(error); // Failure
      }
    );

    let questions = transcript;

    if (!browserSupportsSpeechRecognition) {
      return <span>Browser doesn't support speech recognition.</span>;
    }

    query(questions);
  }

  async function query(questions) {
    const options = {
      method: "POST",
      url: "https://chatgpt-gpt-3-5.p.rapidapi.com/ask",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "699ea8e4admsha947a620bc04ad1p16131ajsncd08755dae31",
        "X-RapidAPI-Host": "chatgpt-gpt-3-5.p.rapidapi.com",
      },
      data: {
        query: questions,
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data.response);

      if (!response.data.response) {
        query(transcript);
      }
      let utterance = new SpeechSynthesisUtterance(response.data.response);
      setMainImg(true);
      speechSynthesis.speak(utterance);
      await new Promise((resolve) => setTimeout(resolve, 5000)); // 3 sec
      console.log(2);

      setMainImg(false);
    } catch (error) {
      console.error(error);
    }
  }
  // async function query(questions) {
  //   const encodedParams = new URLSearchParams();
  //   encodedParams.set("in", questions);
  //   encodedParams.set("op", "in");
  //   encodedParams.set("cbot", "1");
  //   encodedParams.set("SessionID", "RapidAPI1");
  //   encodedParams.set("cbid", "1");
  //   encodedParams.set("key", "RHMN5hnQ4wTYZBGCF3dfxzypt68rVP");
  //   encodedParams.set("ChatSource", "RapidAPI");
  //   encodedParams.set("duration", "1");
  //   encodedParams.set("botkey", "RapidAPI");
  //   encodedParams.set("botid", "1");
  //   encodedParams.set("cbotsessionid", "RapidAPI1");

  //   const options = {
  //     method: "POST",
  //     url: "https://robomatic-ai.p.rapidapi.com/api",
  //     headers: {
  //       "content-type": "application/x-www-form-urlencoded",
  //       "X-RapidAPI-Key": "699ea8e4admsha947a620bc04ad1p16131ajsncd08755dae31",
  //       "X-RapidAPI-Host": "robomatic-ai.p.rapidapi.com",
  //     },
  //     data: encodedParams,
  //   };

  //   const response = await axios.request(options);
  //   console.log(response.data.out);
  //   let utterance = new SpeechSynthesisUtterance(response.data.out);
  //   speechSynthesis.speak(utterance);
  // }

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

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
                {mainImg ? (
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
                      src="../assets/wave.webp"
                      style={{
                        alignSelf: "center",
                        borderRadius: 100,
                        width: 200,
                        height: 200,
                      }}
                    />
                  </div>
                ) : (
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
                )}
              </div>
              {isStarted ? (
                <p
                  style={{
                    marginTop: 40,
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: 600,
                    fontSize: "15px",
                  }}
                >
                  {transcript}{" "}
                </p>
              ) : (
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
              )}
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
                {isStarted ? (
                  <button
                    onClick={async () => {
                      setIsStarted(false);
                      SpeechRecognition.stopListening();
                      await getData();
                    }}
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
                      backgroundColor: "red",
                      bottom: "100px",
                      width: "200px",
                      hover: "pointer",
                      cursor: "pointer",
                      height: "60px",
                      verticalAlign: "middle",
                      justifyItems: "center",
                      alignItems: "center",
                      borderRadius: "10px",
                    }}
                  >
                    Stop Now
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setIsStarted(true);
                      SpeechRecognition.startListening({ continuous: true });
                    }}
                    style={{
                      cursor: "pointer",
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
                    Talk Now
                  </button>
                )}
                <img
                  src="../assets/stop.png"
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 50,
                  }}
                />
                <button
                  onClick={() => {
                    setIsStarted(false);
                    resetTranscript();
                  }}
                  style={{
                    cursor: "pointer",
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
