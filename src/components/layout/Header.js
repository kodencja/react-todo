import React from "react";
import { Link } from "react-router-dom";

function Header() {
  //when it's a function not class 'return' works as 'render()' method
  return (
    <header style={headerStyle}>
      <h2 style={{ marginBottom: "15px" }}>
        Todo List connected with database (by codencja)
      </h2>
      <Link style={linkStyle} to="/react-todo/">
        Home
      </Link>{" "}
      |{" "}
      <Link style={linkStyle} to="/react-todo/about">
        About
      </Link>
    </header>
  );
}

const headerStyle = {
  background: "#142190",
  color: "#f1f1f1",
  textAlign: "center",
  padding: "15px 10px",
  fontSize: "16px",
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
};

export default React.memo(Header);
