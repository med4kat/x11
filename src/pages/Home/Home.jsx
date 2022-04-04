import React from "react";
import { Link } from "react-router-dom";
import Task from "./components/Task.jsx";

function Home() {

  return (
    <main>
      {/* <!-- navbar --> */}
      <nav className="navbar navbar-light">
        <span className="navbar-brand mb-0 h1">MULTIPLY BY 11</span>
        <span className="navbar-brand mb-0 h1">
          {/* <a className="navbar-brand" href="./about">
            ?
          </a> */}
          <Link className="navbar-brand" to="/about">
            ?
          </Link>
        </span>
      </nav>

      <div className="container-fluid">
        {/* <!--progressbar--> */}

        <div className="row progrees-bar-row">
          <div className="col-md-6 offset-md-3">
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "50%" }}
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
        {/* <!--math-task--> */}
        <div className="row math-task-row">
          <Task />


          </div>
      </div>
    </main>
  );
}

export default Home;
