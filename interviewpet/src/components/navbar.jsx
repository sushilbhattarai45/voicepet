import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/navbar.css";
import { account } from "../sdk/appwrite";
function NavBar() {
  const [email, setEmail] = React.useState("");
  useEffect(() => {
    getCurrentUser();
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

          <ul>
            <li> Pricing</li>
            <Link to="/interview">
              {" "}
              <li
                style={{
                  color: "white",
                }}
              >
                {" "}
                Start
              </li>
            </Link>
            {email ? (
              <>
                {" "}
                <li> MyAccount</li>
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
