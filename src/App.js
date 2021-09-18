import { useState } from "react";
import ScreenComponent from "./components/ScreenComponent.jsx";
import ButtonsComponent from "./components/ButtonsComponent.jsx";
import './App.css';
import "./components/style.css";



const App = () => {

  const [screenValue, setScreenValue] = useState("0");

  const screenValueHandler = (screenValueHandlerParam) => {
    setScreenValue(screenValueHandlerParam);
  };


  return (
    <div className="calc">
      <ScreenComponent screenValueProp={screenValue}/>
      <ButtonsComponent screenValueHandlerFuncProp={screenValueHandler}/>  
    </div>
  );
}

export default App;
