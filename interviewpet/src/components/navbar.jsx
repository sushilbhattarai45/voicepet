import React from "react";
import { Link } from "react-router-dom";
import "./css/navbar.css";
function NavBar() {
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
            InterViewPet
          </p>

          <ul>
            <li> Pricing</li>
            <li> Algorithm</li>
            <li> Login</li>
          </ul>
        </nav>
      </div>
    </>
  );
}
export default NavBar;
