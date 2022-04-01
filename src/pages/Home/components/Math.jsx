import React, { useState } from "react";

function Math() {
  const [task, setTask] = useState({
    multiplicant: 0,
    multiplier: 0,
    product: 0,
    answer: null,
  });

  function getNewMultiplicant() {}
  function getNewMultiplier() {}
  function calculate() /* :number */ {}
  function check() /* :boolean */ {}

  return (
    <div class="col-md-6 offset-md-3 math">
      <div class="row">
        <div class="col-sm-4 offset-md-4  multiplicant">{multiplicant}</div>
      </div>

      <div class="row">
        <div class="col-sm-4 offset-md-4 multiplier">x {multiplier}</div>
      </div>

      <div class="row">
        <div class="col-sm-4 offset-md-4 equals-row">
          <div class="equals"></div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-4 offset-md-4 product" id="result">
          {/* {product} */}
          <input type="text">?</input>
        </div>
      </div>
    </div>
  );
}

export default Math;
