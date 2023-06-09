import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/navbar.css";
import { account } from "../sdk/appwrite";
function NavBar() {
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");

  useEffect(() => {
    getCurrentUser();
  }, []);

  const getCurrentUser = async () => {
    try {
      const data = await account.get();

      if (data) {
        setEmail(data.email);
        setName(data.name);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = async (e) => {
    try {
      await account.deleteSession("current");
      window.location.href = "/auth";
    } catch (error) {
      // toast.error(`${error.message}`);
    }
  };
  return (
    <>
      <div>
        <nav>
          <Link to="/home">
            {" "}
            <p
              style={{
                display: "flex",
                color: "white",
                position: "absolute",
                top: -1,
                left: 100,
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "800",
                fontSize: "30px",
              }}
            >
              {" "}
              Fluencer
            </p>
          </Link>

          <ul>
            <div
              style={{
                cursor: "pointer",
              }}
              onClick={() => {
                handleLogout();
              }}
            >
              <li>Logout</li>
            </div>
            {/* <li> Pricing</li> */}
            <Link to="/interview">
              {" "}
              <li
                style={{
                  color: "white",
                }}
              >
                {" "}
                Voice Session
              </li>
            </Link>
            {/* <Link"> */}{" "}
            <li
              onClick={() => {
                alert("Chat Session is not available but comming soon");
              }}
              style={{
                cursor: "pointer",
                color: "white",
              }}
            >
              {" "}
              Chat Session
            </li>
            {/* </Link> */}
            {email ? (
              <>
                {" "}
                {/* <li> MyAccount</li> */}
                <li
                  style={{
                    cursor: "pointer",
                    color: "white",
                  }}
                >
                  {" "}
                  Hi {name}{" "}
                </li>
              </>
            ) : (
              <Link
                to="/auth"
                style={{
                  textDecorationColor: "white",
                }}
              >
                {" "}
                <li
                  style={{
                    color: "white",
                  }}
                >
                  {" "}
                  Login
                </li>
              </Link>
            )}
          </ul>
        </nav>
      </div>
    </>
  );
}
export default NavBar;
