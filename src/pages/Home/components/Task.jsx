import React, { useState, useEffect } from "react";

const random = (min = 10, max = 99) => {
  let num = Math.random() * (max - min) + min;
  return Math.floor(num);
};
// const log = (...args) => console.log(...args);

const myStyle = {
  task: {
    // border: "1px red solid",
  },
};

interface TaskState {
  multiplicant: number;
  multiplier: number;
  product: number | null | "?";
  userAnswer: number | null;
}

function Task() {
  const [task, setTask]: TaskState = useState({
    multiplicant: 0,
    multiplier: 11,
    product: null,
    userAnswer: undefined,
  });
  const [answerArr, setAnswerArr] = useState([]);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);

  /* init state */
  useEffect(() => {
    reset();
  }, [reset]);

  function handleKeyDown(e) {
    let rv;

    if (e.key === "Backspace") {
      /* remove last added key */
      rv = answerArr.slice(0, answerArr.length - 1);
      setAnswerArr(rv);
    } else if (isNaN(e.key)) {
      return;
    } else {
      /* store to answer array */
      rv = [...answerArr, e.key];
      setAnswerArr(rv);
    }

    /* compute user's answer */
    const userAnswer = Number(rv.join(""));

    /* show it to user */
    setTask({ ...task, userAnswer });

    /* check if we have a correct answer */
    if (userAnswer === task.product) {
      setIsCorrectAnswer(true);
      const productDiv = document.querySelector(".product");
      /* lock correct answer */

      /* reset the task */
      resetTask(productDiv);
    }
  }

  /* add listeners */
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [answerArr, task.product, isCorrectAnswer, handleKeyDown]);

  function resetTask(div) {
    /* set userAnswer text color to green */
    div.style.color = "green";

    /* set reset countdown */
    let timeoutID = setTimeout(() => {
      /* restore userAnswer text color */
      div.style.color = "#353951";
      reset(timeoutID);
    }, 750);
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
      userAnswer: null,
    });

    setAnswerArr([]);
    setIsCorrectAnswer(false);
  }

  return (
    <div className="math-wrapper">
      <section className="task-wrapper">
        <section className="task" style={myStyle.task}>
          <div className="operator">x</div>
          <div className="numbers">
            <div className="multiplicant">{task.multiplicant ?? 0}</div>{" "}
            <div className="multiplier">{task.multiplier ?? 0}</div>{" "}
          </div>
        </section>
      </section>
      <section className="product-wrapper">
        <div className="product">{task.userAnswer ?? "?"}</div>
      </section>
    </div>
  );
}

export default Task;
