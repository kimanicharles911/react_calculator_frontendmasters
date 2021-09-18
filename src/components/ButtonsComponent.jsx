/* This project was inspired by https://frontendmasters.com/bootcamp/introduction-html/
  and https://frontendmasters.com/bootcamp/calculator-javascript/ */
/* I used useState hook in my project to manage changing variables. 
I used the useEffect hook in my project to listen to the buffer and toggleEqualBtn state and then use screenValueHandlerFuncProp to pass those state values up to the parent component: App.js .  */
import { useState, useEffect } from "react";

/* I created a component.
I destructured a prop ""screenValueHandlerFuncProp"" from the parent component App.js . */
const ButtonsComponent = ({ screenValueHandlerFuncProp }) => {

  /* I created the toggleEqualBtn state instantiating it with the boolean of false.
  I created the runningTotal state instantiating it with the number zero. It stores the current calculations of the current user.
  I created the buffer state instantiating it with a string of zero. It stores the current screen input from the user.
  I created the previousOperator state instantiating it with null. It stores the artithmetic operator clicked by the user before the click the second set of number(s). */
  const [toggleEqualBtn, setToggleEqualBtn] = useState(false);
  const [ runningTotal, setRunningTotal ] = useState(0);
  const [buffer, setBuffer] = useState("0");
  const [previousOperator, setPreviousOperator] = useState(null);

  /* I created a function that receives the content of the clicked button.
  I then used a ternary operator with a condition that calls the handleSymbol function if the value parameter is not of the number type else handleNumber function is called.
  Then I set the content of the calculator's screen  to the new buffer state variable.  */
  const handleButtonClick = (value) => {
    isNaN(value) ? handleSymbol(value) : handleNumber(value);
    screenValueHandlerFuncProp(buffer);
  };

  /* I created the handleSymbol function that is called by the handelButtonClick function.
  It determines what operation will be executed when specific symbols buttons are pressed in the calculator. */
  const handleSymbol = (symbol) => {
    switch(symbol){
      /* When C standing for "clear" is used it:
      1. Sets the equal button toggle to false.
      2. Sets the buffer state to a string of zero
      3. Sets the runningTotal state to zero. */
      case "C":
        setToggleEqualBtn(false);
        setBuffer("0");
        setRunningTotal(0);
        break;
      case "=":
        /* When the equal sign "=" is used it:
        1. Checks whether the previousOperator is set to null if this it true the function si returned (ended).
        2. The function flushOperation is called with the buffer variable as the parameter.
        3. The setPreviousOperator state is set to null.
        4. The setToggleEqualBtn state is set to true.
        5. The setBuffer state is set to the runningTotal state. */
        if(previousOperator === null){
          return;
        }
        flushOperation(parseInt(buffer));
        setPreviousOperator(null);
        setToggleEqualBtn(true);
        setBuffer(runningTotal);
        break;
      case "←":
        /* When the delete sign "←" is used it:
        1. Checks if the string buffer's length is equal to one if this is true the state buffer is set to a string zero otherwise it is set to the previous string less one character (number). */
        buffer.length === 1 ? setBuffer("0") : setBuffer(buffer.substring(0, buffer.length - 1));
        break;
      case "+":
      case "-":
      case "×":
      case "÷":
        /* When the arithmetic operator is used it:
        1. Sets the equal button toggle to false.
        2. Calls the handlMath function with the arithmetic operator passed as the parameter. */
        setToggleEqualBtn(false);
        handleMath(symbol);
        break;      
    }
  };

  /* I created the handleMath function which is called when an arithmetic operator is clicked.
  It checks whether the buffer state is equal to zero if this is true the function is returned (ended). */
  const handleMath = (symbol) => {
    /* This if statement is for ending the function if the condition is true. */
    if(buffer === "0"){
      return;
    } 
    /* I store the current value of the buffer state in the intBuffer variable. */
    const intBuffer = parseInt(buffer);
  
    /* The handleMath function checks whether the value of the runningTotal state is equal to zero if this is true: runningTotal state is set to the value of the intBuffer variable, otherwise the flushOperator function is called and the intBuffer variable is passed as it's parameter. */
    runningTotal === 0 ? setRunningTotal(intBuffer) : flushOperation(intBuffer);
  
    /* The value of the previousOperator is set to the symbol.
    The value of the buffer state is set to a string of zero */
    setPreviousOperator(symbol);
  
    setBuffer("0");
  };

  /* I created the flushOperation function that changes the value of the calculator's runningTotal state according to the arithmetic operator that was clicked. 
  In the calculation the runningTotal and intBuffer variable are used. */
  const flushOperation = (intBuffer) => {
    if(previousOperator === "+"){
      setRunningTotal(runningTotal + intBuffer);
    } else if(previousOperator === "-"){
      setRunningTotal(runningTotal - intBuffer);
    } else if(previousOperator === "×"){
      setRunningTotal(runningTotal * intBuffer);
    } else {
      setRunningTotal(runningTotal / intBuffer);
    }
  };

  /* I created the handleNumber function which is called by the handleButtonClick function.
  It checks whether the value of the buffer state is a string of zero.
  If true:
    the value of the buffer state is set to the numberString variable passed as a parameter from the handleButtonClick function.
  otherwise:
    the value of the buffer state is set to the concatenation of the value of the buffer state and the numberString. */
  const handleNumber = (numberString) => { 
    buffer === "0" ? setBuffer(numberString) : setBuffer(buffer + numberString);    
  };

  /* I used the useEffect react hook to listen to the buffer and toggleEqualBtn state and then use screenValueHandlerFuncProp to pass those state values up to the parent component: App.js . */
  useEffect(() => {
    toggleEqualBtn === false ? screenValueHandlerFuncProp(buffer) : screenValueHandlerFuncProp(runningTotal);
  }, [toggleEqualBtn, buffer]);

  return(
    /* Below is the JSX of the calculator's buttons.
    I set  listen for the onClick event and the call the handleButtonClick function passing the content retrieved by event.target.innerText.  */
    <section className="calc-buttons" onClick={ (event) => handleButtonClick(event.target.innerText)}>
      <div className="calc-button-row">
        <button className="calc-button double ">C</button>
        <button className="calc-button">&larr;</button>
        <button className="calc-button">&divide;</button>
      </div>
      <div className="calc-button-row">
        <button className="calc-button">7</button>
        <button className="calc-button">8</button>
        <button className="calc-button">9</button>
        <button className="calc-button">&times;</button>
      </div>
      <div className="calc-button-row">
        <button className="calc-button">4</button>
        <button className="calc-button">5</button>
        <button className="calc-button">6</button>
        <button className="calc-button">-</button>
      </div>
      <div className="calc-button-row">
        <button className="calc-button">1</button>
        <button className="calc-button">2</button>
        <button className="calc-button">3</button>
        <button className="calc-button">+</button>
      </div>
      <div className="calc-button-row">
        <button className="calc-button triple">0</button>
        <button className="calc-button">=</button>
      </div>
    </section>
  );
};
export default ButtonsComponent;