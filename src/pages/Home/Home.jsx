import React from "react";
import { Link } from "react-router-dom";

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
        {/* <!--FIX responsivenes is not working properly--> */}
        <div className="row math-task-row">
          <div className="col-md-6 offset-md-3 math">
            <div className="row">
              <div className="col-sm-4 offset-md-4  multiplicant">243</div>
            </div>

            <div className="row">
              <div className="col-sm-4 offset-md-4 multiplier">x 11</div>
            </div>

            <div className="row">
              <div className="col-sm-4 offset-md-4 equals-row">
                <div className="equals"></div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-4 offset-md-4 product" id="result">
                ?
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
