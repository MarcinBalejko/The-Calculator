import React, { Fragment, useState, useEffect } from "react";
import * as math from "mathjs";
import Footer from "./Footer";

const Calculator = (props) => {
  const [equation, setEquation] = useState([]);
  const [currentOperand, setCurrentOperand] = useState("");

  useEffect(() => {
    clearAll();
  }, []);

  const createCurrentOperand = (e) => {
    setCurrentOperand(currentOperand + e.target.value);
    setEquation([...equation, e.target.value]);
  };

  const insertOperation = (e) => {
    if (currentOperand !== "") {
      setEquation([...equation, e.target.value]);
      setCurrentOperand("");
    } else {
      return;
    }
  };

  const clearAll = () => {
    setEquation("");
    setCurrentOperand("");
  };

  // For negative numbers
  const plusMinus = () => {
    if (currentOperand) {
      setEquation([...equation, "-" + currentOperand]);
      setCurrentOperand("-" + currentOperand);
    } else {
      setEquation([...equation, "-"]);
      setCurrentOperand("-");
    }
  };

  const percentage = () => {
    let percentOperand = [];
    let eq = equation;
    percentOperand.push(currentOperand);
    console.log(percentOperand);
    console.log(eq);

    if (currentOperand) {
      function removeItems(arr, item) {
        for (let i = 0; i < item; i++) {
          arr.pop();
        }
      }

      removeItems(equation, percentOperand[0].length);
      setEquation([...equation, parseInt(percentOperand[0]) / 100]);
    }
  };

  const showResult = () => {
    try {
      if (equation[0] === undefined && currentOperand === "") {
        return;
      }

      let values = equation.join(" ");
      let valuesready = values.replace(/\s/g, "");
      let computing;

      // Removing unneeded operation (+, -, /, *) from the end of equation
      switch (equation[equation.length - 1]) {
        case "+" || "-" || "*" || "/":
          equation.pop();
          break;
        default:
          computing = math.evaluate(valuesready);
      }

      setCurrentOperand(computing);
    } catch (err) {
      alert(err);
    }
  };

  return (
    <Fragment>
      <div id="main-container">
        <div id="calculator-container">
          <div id="calculator-grid">
            <div className="equation">
              <div data-previous-operand className="data-equation slow">
                {equation}
              </div>
            </div>
            <div className="current-operand">
              <div data-current-operand className="data-current-operand">
                {currentOperand}
              </div>
            </div>

            <button className="cell percent" onClick={() => percentage()}>
              %
            </button>
            <button className="cell plus-minus " onClick={() => plusMinus()}>
              <span className="plus-minus-sign">/</span>
            </button>

            <button className="cell clear" onClick={() => clearAll()}>
              C
            </button>
            <button
              className="cell divide"
              value={"/"}
              onClick={(e) => insertOperation(e)}
            >
              /
            </button>
            <button
              className="cell multiply"
              value={"*"}
              onClick={(e) => insertOperation(e)}
            >
              X
            </button>
            <button
              className="cell substract"
              value={"-"}
              onClick={(e) => insertOperation(e)}
            >
              -
            </button>
            <button
              className="cell add"
              value={"+"}
              onClick={(e) => insertOperation(e)}
            >
              +
            </button>
            <button
              className="cell nine"
              value={9}
              onClick={(e) => createCurrentOperand(e)}
            >
              9
            </button>
            <button
              className="cell eight"
              value={8}
              onClick={(e) => createCurrentOperand(e)}
            >
              8
            </button>
            <button
              className="cell seven"
              value={7}
              onClick={(e) => createCurrentOperand(e)}
            >
              7
            </button>
            <button
              className="cell six"
              value={6}
              onClick={(e) => createCurrentOperand(e)}
            >
              6
            </button>
            <button
              className="cell five"
              value={5}
              onClick={(e) => createCurrentOperand(e)}
            >
              5
            </button>
            <button
              className="cell four"
              value={4}
              onClick={(e) => createCurrentOperand(e)}
            >
              4
            </button>
            <button
              className="cell three"
              value={3}
              onClick={(e) => createCurrentOperand(e)}
            >
              3
            </button>
            <button
              className="cell two"
              value={2}
              onClick={(e) => createCurrentOperand(e)}
            >
              2
            </button>
            <button
              className="cell one"
              value={1}
              onClick={(e) => createCurrentOperand(e)}
            >
              1
            </button>
            <button
              className="cell zero"
              value={0}
              onClick={(e) => createCurrentOperand(e)}
            >
              0
            </button>
            <button
              className="cell comma"
              value={"."}
              onClick={(e) => createCurrentOperand(e)}
            >
              ,
            </button>
            <button
              className="cell equals span-two"
              value={"="}
              onClick={() => showResult()}
            >
              =
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default Calculator;
