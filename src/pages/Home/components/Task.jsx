import React, { useState, useEffect } from "react";

const random = (min = 10, max = 99) => {
  let num = Math.random() * (max - min) + min;
  return Math.floor(num);
};

const myStyle = {
  task: {
    // border: "1px red solid",
  },
};

function Task() {
  const [task, setTask] = useState({
    multiplicant: null,
    multiplier: 11,
    product: null,
    answer: null,
    isCorrectAnswer: false,
  });

  /* init state */
  useEffect(() => {
    reset();
  }, []);

  function handleAnswer(e) {
    e.preventDefault();
    if (e?.target?.value === undefined) return;

    let answer = Number(e.target.value);
    if (isNaN(answer)) return;

    if (answer === task.product) {
      setTask({ ...task, isCorrectAnswer: true });

      e.target.style.color = "green";

      /* wait a bit and reset the task */
      let timeoutID = setTimeout(() => {
        e.target.value = null;
        e.target.style.color = "#353951";
        reset(timeoutID);
      }, 2000);
    }
  }

  function reset(timeoutID) {
    if (timeoutID) clearTimeout(timeoutID);

    let multiplicant = random(),
      product = multiplicant * 11;
    console.log(product);

    setTask({
      ...task,
      multiplicant,
      product,
      isCorrectAnswer: false,
    });
  }
  return (
    
    <div className="math-wrapper">

      <section className="task-wrapper">
        <section className="task" style={myStyle.task}>
          <div className="operator">x</div>

          <div className="numbers">
            <div className="multiplicant">{task.multiplicant ?? 0}</div> {/*col-sm-4 offset-md-4*/}
            <div className="multiplier">{task.multiplier ?? 0}</div> {/*col-sm -4 offset-md-4*/}
         </div>
        </section>
      </section>
      <section className="product-wrapper">
        {/* <div className="product" id="result">?</div> */}
        <input className="product" id="result" type="text" onChange={handleAnswer}>
          {task.answer}
        </input>
      </section>
    </div>

  )
  // return (
  //   <div className="col-md-6 offset-md-3 task" style={myStyle.task}>
  //     <div className="row">
  //       <div className="col-sm-4 offset-md-4 multiplicant">
  //         {task.multiplicant ?? 0}
  //       </div>
  //     </div>
  //
  //     <div className="row">
  //       <div className="col-sm-4 offset-md-4 multiplier">
  //         x {task.multiplier ?? 0}
  //       </div>
  //     </div>
  //
  //     <div className="row">
  //       <div className="col-sm-4 offset-md-4 equals-row">
  //         <div className="equals"></div>
  //       </div>
  //     </div>
  //
  //     <div className="row">
  //       <div className="col-sm-4 offset-md-4 product" id="result">
  //         <input className="product-input" type="text" onChange={handleAnswer}>
  //           {task.answer}
  //         </input>
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default Task;
