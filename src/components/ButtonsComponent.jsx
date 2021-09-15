import { useState } from "react";

const ButtonsComponent = ({ runningTotalProp, setRunningTotalProp, bufferProp, setBufferProp, previousOperatorProp, setPreviousOperatorProp, setScreenValueProp, screenValueProp }) => {

  const handleButtonClick = (param) => {
    isNaN(param) ? handleSymbol(param) : handleNumber(param);
    console.log(`😜`, screenValueProp);
    // setScreenValueProp(bufferProp);
    console.log(`😜`, screenValueProp);
  };

  const handleSymbol = (symbol) => {
    switch(symbol){
      case "C":
        setScreenValueProp("0");
        setRunningTotalProp(0);
        break;
      case "=":
        if(previousOperatorProp === null){
          return;
        }
        flushOperation(parseInt(screenValueProp));
        setPreviousOperatorProp(null);
        console.log(`😜Former`, runningTotalProp);
        setScreenValueProp(runningTotalProp);
        setRunningTotalProp(0);
        break;
      case "←":
        screenValueProp.length === 1 ? setScreenValueProp("0") : setScreenValueProp(screenValueProp.substring(0, screenValueProp.length - 1));
        break;
      case "+":
      case "-":
      case "×":
      case "÷":
        handleMath(symbol);
        break;      
    }
  };

  const handleMath = (symbol) => {
    /* This if statement is for ending the function if the condition is true. */
    if(screenValueProp === "0"){
      return;
    } 
    const intBuffer = parseInt(screenValueProp);
    
  
    console.log(`😜Bingo`, runningTotalProp);
    runningTotalProp === 0 ? setRunningTotalProp(intBuffer) : flushOperation(intBuffer);
    console.log(`😜Bingo`, runningTotalProp);
  
    setPreviousOperatorProp(symbol);
  
    setScreenValueProp("0");
  };

  const flushOperation = (intBuffer) => {
    if(previousOperatorProp === "+"){
      setRunningTotalProp(runningTotalProp + intBuffer);
    } else if(previousOperatorProp === "-"){
      setRunningTotalProp(runningTotalProp - intBuffer);
    } else if(previousOperatorProp === "×"){
      setRunningTotalProp(runningTotalProp * intBuffer);
    } else {
      setRunningTotalProp(runningTotalProp / intBuffer);
    }
  };

  const handleNumber = (numberString) => {
    screenValueProp === "0" ? setScreenValueProp(numberString) : setScreenValueProp(screenValueProp + numberString);
    console.log(`😜C😜`, screenValueProp);
    console.log(`😜CC😜`, typeof(screenValueProp));
    console.log(`😜D😜`, screenValueProp);
    console.log(`😜DD😜`, typeof(screenValueProp));
  };

  return(
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