import React from "react";
import("./css/footer.css");

function Footer() {
  console.log("Footer Fn");
  return (
    <footer className="down-buttons">
      <button type="link" className="btn-down home-page-link shadow-mid-dark">
        <a
          href="https://codencja.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          Back to Home Page
        </a>
      </button>
      <div className="copy-right">
        {" "}
        <b>&copy; 2021 </b>
        <i>by</i> <strong>Codencja</strong>
      </div>
    </footer>
  );
}

export default React.memo(Footer);
