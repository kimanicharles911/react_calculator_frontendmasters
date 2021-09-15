import { useState } from "react";
import ScreenComponent from "./components/ScreenComponent.jsx";
import ButtonsComponent from "./components/ButtonsComponent.jsx";
import './App.css';
import "./components/style.css";



const App = () => {

  const [runningTotal, setRunningTotal] = useState(0);
  const [screenValue, setScreenValue] = useState("0");
  const [buffer, setBuffer] = useState(screenValue);
  const [previousOperator, setPreviousOperator] = useState(null);

  return (
    <div className="calc">
      <ScreenComponent screenValueProp={screenValue} setScreenValueProp={setScreenValue} />
      <ButtonsComponent runningTotalProp={runningTotal} setRunningTotalProp={setRunningTotal} bufferProp={buffer} setBufferProp={setBuffer} previousOperatorProp={previousOperator} setPreviousOperatorProp={setPreviousOperator}  setScreenValueProp={setScreenValue} screenValueProp={screenValue} />  
    </div>
  );
}

export default App;
