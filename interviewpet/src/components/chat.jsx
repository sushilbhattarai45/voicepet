import React, { useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
  resetTranscript,
  browserSupportsSpeechRecognition,
} from "react-speech-recognition";
import moment from "moment/moment";
import axios from "axios";
import { Link } from "react-router-dom";
import { account, database } from "../sdk/appwrite.jsx";
import { ID } from "appwrite";
import { useTime } from "react-timer-hook";
import toast, { Toaster } from "react-hot-toast";

function Chat() {
  const [email, setEmail] = React.useState("");
  useEffect(() => {
    getCurrentUser();
    checkAuth(email);
  }, []);

  const getCurrentUser = async () => {
    try {
      const data = await account.get();

      if (data) {
        setEmail(data.email);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const checkAuth = async () => {
    if (email == null) {
      window.location.href = "/auth";
    }
  };
  const { seconds, minutes, hours, ampm } = useTime({ format: "12-hour" });
  const [isStarted, setIsStarted] = React.useState(false);
  const [mainImg, setMainImg] = React.useState(false);
  const [session_id, setSession_id] = React.useState();
  const [lastqn, setLastqn] = React.useState([
    {
      qn: "",
      ans: "",
    },
  ]);
  async function getData() {
    let questions = transcript;

    if (!browserSupportsSpeechRecognition) {
      return <span>Browser doesn't support speech recognition.</span>;
    }

    query(questions, lastqn);
  }

  async function query(questions, lastqn) {
    if (lastqn != null && lastqn.length > 0) {
      for (let i = 0; i < lastqn.length; i++) {
        questions =
          "The previous context was " +
          lastqn[i].qn +
          " and the answer was " +
          lastqn[i].ans +
          " .  Now answer this " +
          questions;
      }
    }
    console.log(questions);
    const options = {
      method: "POST",
      url: "https://chatgpt-gpt-3-5.p.rapidapi.com/ask",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "699ea8e4admsha947a620bc04ad1p16131ajsncd08755dae31",
        "X-RapidAPI-Host": "chatgpt-gpt-3-5.p.rapidapi.com",
      },
      data: {
        query:
          " My last question was " +
          lastqn +
          ". Answer this question  " +
          questions,
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data.response);

      if (!response.data.response) {
        query(transcript);
      } else {
        resetTranscript();

        // let utterance = new SpeechSynthesisUtterance(response.data.response);
        setMainImg(true);
        // speechSynthesis.speak(utterance);
        lastqn.push({ qn: transcript, ans: response.data.response });
        uploadData(response.data.response);
        await new Promise((resolve) => setTimeout(resolve, 5000)); // 3 sec
        console.log(2);
        setMainImg(false);
      }
    } catch (error) {
      console.error(error);
    }
  }
  async function uploadData(ans) {
    const data = await account.get();
    const promise = database.createDocument(
      "64807d7325103770a222",
      "64807d872f22ce9d0c9a",
      ID.unique(),
      {
        session_id: session_id,
        user_id: data.$id,
        qn: transcript,
        ans: ans,
        doc: "Jun 8, 2023, 11:47",
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
            flex: 1,
            flexDirection: "column",
          }}
        >
          <div
            style={{
              flex: 0.4,
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
              Timer :
              <span
                style={{
                  color: "red",
                }}
              >
                {" " + hours}:{" " + minutes}:{" " + seconds}{" "}
                <span
                  autoCapitalize="true"
                  style={{
                    autoCapitalize: "true",
                  }}
                >
                  {" " + ampm}
                </span>
              </span>
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
              Day :{" "}
              <span
                style={{
                  color: "red",
                }}
              >
                {moment().format("dddd")}{" "}
              </span>
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
              Date :{" "}
              <span
                style={{
                  color: "red",
                }}
              >
                {moment().format("MMM Do YYYY")}
              </span>
            </p>
          </div>
          <div
            style={{
              flex: 1,
              display: "flex",
              marginTop: -100,
            }}
          >
            <p>Hello</p>
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
            VoicePet - A Seamless Digital English Fluency enhancing and Virtual
            Assistant Platform
          </p>
        </div>
      </div>
    </>
  );
}
export default Chat;
