import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <main>
      {/* <!-- navbar --> */}
      <nav className="navbar navbar-light">
        <span className="navbar-brand mb-0 h1">MULTIPLY BY 11</span>
        <span className="navbar-brand mb-0 h1">
          <Link
            className="navbar-brand"
            to="/
          "
          >
            TRAIN
          </Link>
        </span>
      </nav>

      <div className="container-fluid">
        {/* <!--math-task--> */}
        <div className="row">
          <div className="col-md-6 offset-md-3 h1" id="about">
            About Multiply By 11 Trainer
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 offset-md-3 p">
            Multiply By 11 Trainer is a web app for learning and practicing
            mental mutliplication by 11. The Trainer generates double, triple
            and quadruple digits to multiply by 11.
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 offset-md-3 h1" id="how_it_works">
            How It Works
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 offset-md-3 p">
            To multiply any two-digit number by 11, add the digits of the number
            together and then put this sum between the original two digits.
            <br />
            <br />
            To multiply any 3-or-more-digit number by 11, add up the various
            pairs of neighboring numbers in the original number, and then stick
            the results between the 2 outside digits of the original number
            while removing the inside number(s).
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
