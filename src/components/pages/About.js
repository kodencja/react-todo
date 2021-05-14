import React from "react";

function About() {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>About</h2>
      <p style={{ textAlign: "center", marginTop: "10px" }}>
        This is a simple TodoList app connected with database at
        'https://jsonplaceholder.typicode.com/todos'. It's a page wrote in
        React.js based on class components. It uses such libraries as{" "}
        <b>react-router-dom</b>, <b>prop-types</b>, <b>axios</b> and{" "}
        <b>fontello</b>.
      </p>
    </div>
  );
}

export default React.memo(About);
