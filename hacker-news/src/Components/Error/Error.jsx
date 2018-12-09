import React from "react";
import { Link } from "@reach/router";
import "./Error.css";

const Error = props => {
  return (
    <div className="message">
      <h2>{props.location.state.msg}</h2>
      <p>
        {props.location.state.status === 404
          ? "Sorry Page Not Found"
          : "We have a server problem"}
      </p>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
};

export default Error;
