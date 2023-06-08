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

      // setDoc(
      // docs.map((item) => {
      //   doc.push(item);
      // });
      setDoc(docs);
      // );
      console.log(doc);
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
                My Sessions
              </p>
            </div>{" "}
            <div
              style={{
                flex: 1,
                alignItems: "flex-end",
                // backgroundColor: "red",
              }}
            >
              {" "}
              <p
                style={{
                  float: "right",
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: 800,
                  fontSize: "30px",
                }}
              >
                <Link
                  to="/interview"
                  style={{
                    textDecoration: "none",
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

                      width: "300px",
                      height: "60px",
                      verticalAlign: "middle",
                      justifyItems: "center",
                      alignItems: "center",
                      borderRadius: "10px",
                      left: "1010px",
                    }}
                  >
                    Start A New Session
                  </button>{" "}
                </Link>
              </p>
            </div>
          </div>

          <section
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {doc.map(function (item) {
              console.log("hello");
              return (
                <div
                  style={{
                    width: 500,
                    height: 100,
                    flex: 1,
                    borderRadius: "10px",
                    alignItems: "flex-end",
                    backgroundColor: "#030232",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: 800,
                      fontSize: "30px",
                      color: "white",
                    }}
                  >
                    {item.$id}
                  </p>{" "}
                </div>
              );
            })}{" "}
          </section>
        </section>{" "}
      </div>
    </>
  );
}

export default Home;
