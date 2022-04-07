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

        {/* <!--About--> */}
        <div className="row">
          <div className="col-md-6 offset-md-3 h1" id="about">
            About Multiply By 11 Trainer
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 offset-md-3 p">
            Multiply By 11 Trainer is a web app for learning and practicing
            mental mutliplication by 11. The Trainer generates double digits to multiply by 11.
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 offset-md-3 h1" id="how_it_works">
            How It Works
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 offset-md-3 p">
            To multiply any two-digit number by 11, add the digits of the number together and then put this sum between the original two digits.
          </div>
        </div>

        {/* <!--Example--> */}

        <div className="row">
          <div className="col-md-6 offset-md-3 h1" id="Example_title">
              Example
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 offset-md-3 p" id="Example">
            <div className="example_task"> 25 x 11 =  </div>
            <div className="example_product"> 275 </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 offset-md-3 p" id="Step_1">
          First step:
          <div className="example_wrapper">
          <div className="example_sum"> 2 + 5 = </div>
          <div className="example_sum_product"> 7 </div>
          </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 offset-md-3 p" id="Step_2">
          Second Step:
            <div className="example_wrapper">
            <div className="example_first_digit"> 2 </div>
            <div className="example_second_digit"> 5 </div>

            </div>
          </div>
        </div>





      </div>
    </main>
  );
}

export default About;
