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

          <Link className="navbar-brand" to="/about">
            ?
          </Link>
        </span>
      </nav>

      <div className="container-fluid">

        {/* <!--math-task--> */}
        <div className="row math-task-row">
          <Task />
        </div>
      </div>
    </main>
  );
}

export default Home;
