import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Query } from "appwrite";
import { account, database } from "../sdk/appwrite";
function Home() {
  const [udata, setUdata] = React.useState({
    email: "",
    id: "",
  });

  const [doc, setDoc] = React.useState([]);
  const [sessionlist, setSessionList] = React.useState([]);
  const [sessiondata, setSessionData] = React.useState([]);
  const user = account.getSession("current");

  useEffect(() => {
    callData();
    doc.map((item) => {
      console.log(item.$id);
    });
  }, [udata.id]);

  async function callData() {
    await getCurrentUser();
    await checkAuth(udata.email);
    await getSessions();
  }

  const getCurrentUser = async () => {
    try {
      const data = await account.get();

      if (data) {
        console.log(data.email + data.$id);
        setUdata({ email: data.email, id: data.$id });
        // console.log(data.$id);

        // let a = data.$id;
        // setId(data.$id);
        return data.$id;
      }
    } catch (error) {
      console.log(error);
    }
  };
  const checkAuth = async () => {
    if (udata.email == null) {
      window.location.href = "/auth";
    }
  };
  async function getSessions() {
    try {
      const response = await database.listDocuments(
        "64807d7325103770a222",
        "64807d872f22ce9d0c9a",
        [
          Query.equal("user_id", [udata.id]),
          Query.orderDesc("$id"),
          Query.limit(4),
        ]
      );
      let docs = response.documents;
      console.log(docs);
      let session = docs[0].session_id;
      sessionlist.push(session);
      console.log(session);
      setDoc(docs);
      for (let i = 0; i < docs.length; i++) {
        if (session != docs[i].session_id) {
          sessionlist.push(docs[i].session_id);
        }
      }

      // for (let i = 0; i < sessionlist.length; i++) {
      //   const response = await database.listDocuments(
      //     "64807d7325103770a222",
      //     "64807d872f22ce9d0c9a",
      //     [Query.equal("session_id", [sessionlist[i]]), Query.orderDesc("$id")]
      //   );
      //   let docs = response.documents;

      //   docs.map((item) => {
      //     console.log("id" + item);
      //   });
      //   console.log(docs);
      //   sessiondata.push(docs);
      // }
      // console.log(sessiondata);

      // );
      // console.log(doc);
      // setDoc(docs);
    } catch (error) {
      console.log(error);
    }
  }
  // getSessions();

  return (
    <>
      <div
        style={{
          margin: 30,
          marginLeft: 80,
        }}
      >
        <section>
          {/* <MapData /> */}
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
                // /: "blue",

                flex: 1,
              }}
            >
              <p
                style={{
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: 800,
                  fontSize: "30px",
                }}
              >
                My Recent Sessions
              </p>
            </div>{" "}
            {/* <div
              onClick={() => {
                window.location.href = "/interview";
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
              <p>Reset Context </p>
            </div> */}
          </div>
          <section
            style={{
              display: "flex",
              flexDirection: "row",
              flex: 1,
              justifyContent: "space-around",
            }}
          >
            <section
              style={{
                display: "flex",
                flex: 0.5,

                justifyContent: "space-around",
                flexDirection: "column",
              }}
            >
              {doc.map(function (item) {
                console.log("hello");
                return (
                  <div
                    style={{
                      marginBottom: 30,
                      height: 100,
                      flex: 1,
                      opacity: 0.8,
                      borderRadius: "10px",
                      alignItems: "flex-end",
                      padding: 10,
                      backgroundColor: "#030232",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        flex: 1,
                      }}
                    >
                      <p
                        style={{
                          float: "left",
                          flex: 0.6,
                          alignSelf: "flex-start",
                          marginLeft: 20,
                          fontFamily: "Poppins",
                          fontStyle: "normal",
                          fontWeight: 500,
                          fontSize: "13px",
                          color: "white",
                        }}
                      >
                        Question : {"    " + item.qn} ?
                      </p>{" "}
                      <p
                        style={{
                          float: "right",
                          flex: 0.4,
                          alignSelf: "flex-end",

                          fontFamily: "Poppins",
                          fontStyle: "normal",
                          fontSize: "10px",
                          color: "white",
                        }}
                      >
                        Date : {"    " + item.doc}
                      </p>
                    </div>
                    <p
                      style={{
                        marginLeft: 20,
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: 600,
                        fontSize: "15px",
                        color: "white",
                      }}
                    >
                      Answer : {"    " + item.ans} ?
                    </p>{" "}
                  </div>
                );
              })}{" "}
              {sessionlist.length == 0 ? (
                <div
                  style={{
                    display: "flex",
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
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
                        fontSize: "15px",
                      }}
                    >
                      Your One Step
                    </p>
                    <p
                      style={{
                        marginTop: "-20px",

                        fontFamily: "Poppins",
                        fontWeight: 600,
                        fontSize: "30px",
                      }}
                    >
                      Virual InterView Sessions
                    </p>
                    <p
                      style={{
                        marginTop: "-40px",
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: 600,
                        fontSize: "40px",
                      }}
                    >
                      Fluencer
                    </p>
                    <p
                      style={{
                        marginTop: "-50px",

                        fontFamily: "Poppins",
                        fontStyle: "italic",
                        fontWeight: 500,
                        fontSize: "20px",
                      }}
                    >
                      A Seamless Digital English Fluency enhancing and Virtual
                      Assistant Platform
                    </p>
                  </div>
                  <div
                    style={{
                      width: "200px",
                      flex: 0.9,
                      // alignSelf: "center",
                      borderRadius: "100%",
                      justifyContent: "center",
                      backgroundColor: "#030232",
                    }}
                  >
                    <img
                      src="/assets/bot2.svg"
                      style={{
                        padding: 50,
                        flex: 0.1,
                        color: "white",
                        float: "center",
                        // marginBottom: 200,
                        alignSelf: "center",
                        width: "100px",
                        height: "100px",
                      }}
                    />
                  </div>
                  <p
                    style={{
                      flex: 0.5,
                      fontFamily: "Poppins",
                      alignSelf: "center",
                      fontStyle: "italic",
                      fontWeight: 400,
                      fontSize: "20px",
                      color: "#030232",
                    }}
                  >
                    No Sessions Found- Please take a session first.
                  </p>{" "}
                </div>
              ) : null}
            </section>

            <section
              style={{
                display: "flex",
                flex: 0.5,
                justifyContent: "center",
              }}
            >
              <img
                src="/assets/chatbot.svg"
                style={{
                  // marginBottom: 200,
                  alignSelf: "flex-end",
                  position: "fixed",
                  top: 100,
                  width: "500px",
                  height: "800px",
                }}
              />{" "}
            </section>
          </section>
        </section>{" "}
        <div
          style={{
            display: "flex",
            left: 0,
            justifyContent: "center",
            position: "fixed",
            bottom: 0,
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

export default Home;
