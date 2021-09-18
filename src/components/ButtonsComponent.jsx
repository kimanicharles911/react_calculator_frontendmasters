import { useState, useEffect } from "react";

const ButtonsComponent = ({ screenValueHandlerFuncProp }) => {

  const [toggleEqualBtn, setToggleEqualBtn] = useState(false);
  const [ runningTotal, setRunningTotal ] = useState(0);
  console.log(`😜 Bail - runningTotal`, runningTotal);
  // let buffer = "0";
  const [buffer, setBuffer] = useState("0");
  // let previousOperator = null;
  const [previousOperator, setPreviousOperator] = useState(null);

  const handleButtonClick = (value) => {
    isNaN(value) ? handleSymbol(value) : handleNumber(value);
    screenValueHandlerFuncProp(buffer);
    /* screenValueHandlerFuncProp(value); */

  };

  const handleSymbol = (symbol) => {
    switch(symbol){
      case "C":
        setToggleEqualBtn(false);
        setBuffer("0");
        setRunningTotal(0);
        break;
      case "=":
        if(previousOperator === null){
          return;
        }
        flushOperation(parseInt(buffer));
        setPreviousOperator(null);
        setToggleEqualBtn(true);
        console.log(`😜 111111`, runningTotal);
        setBuffer(runningTotal);
        console.log(`😜 222222`, runningTotal);
        // setRunningTotal(0);
        break;
      case "←":
        buffer.length === 1 ? setBuffer("0") : setBuffer(buffer.substring(0, buffer.length - 1));
        break;
      case "+":
      case "-":
      case "×":
      case "÷":
        setToggleEqualBtn(false);
        handleMath(symbol);
        break;      
    }
  };

  const handleMath = (symbol) => {
    /* This if statement is for ending the function if the condition is true. */
    if(buffer === "0"){
      return;
    } 
    const intBuffer = parseInt(buffer);
  
    // runningTotal === 0 ? setRunningTotal(intBuffer) : flushOperation(intBuffer);

    if(runningTotal === 0){
      console.log(`😜 runningTotal is zero for now `, runningTotal);
      setRunningTotal(intBuffer);
    }else{
      flushOperation(intBuffer);
    }
    console.log(`😜 Ronaldo - runningTotal`, runningTotal);
  
    setPreviousOperator(symbol);
    console.log(`😜 new operator`, previousOperator);
  
    setBuffer("0");
  };

  const flushOperation = (intBuffer) => {
    console.log(`😜 previousOperator`, previousOperator);
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

  const handleNumber = (numberString) => {
    if(buffer === "0"){
      console.log(`😜 buffer === "0"`, true);
      setBuffer(numberString);
    }else{
      console.log(`😜 buffer NOT = "0"`, true);
      setBuffer(buffer + numberString);
    }
    
  };

  useEffect(() => {
    if(toggleEqualBtn === false){
      screenValueHandlerFuncProp(buffer);
    }else{
      screenValueHandlerFuncProp(runningTotal);
    }
  }, [toggleEqualBtn, buffer]);

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