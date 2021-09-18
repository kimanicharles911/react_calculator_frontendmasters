/* This project was inspired by https://frontendmasters.com/bootcamp/introduction-html/
  and https://frontendmasters.com/bootcamp/calculator-javascript/ */
/* I used useState hook in my project to manage changing variables.
I also imported the ScreenComponent and ButtonsComponent from the components folder.
I also imported my custom CSS */
import { useState } from "react";
import ScreenComponent from "./components/ScreenComponent.jsx";
import ButtonsComponent from "./components/ButtonsComponent.jsx";
import './App.css';
import "./components/style.css";


/* I converted the App component from a normal functional component to an arrow functional component since I love arrow functions. */
const App = () => {

  /* I created the screenValue state instantiating it with a string of zero.
  The screenValue state is used by the ScreenComponent to set the value of the calculator's screen.*/
  const [screenValue, setScreenValue] = useState("0");


  /* The screenValueHandler function is used to enable the fetching of data from a child component i.e ButtonsComponent.jsx to this parent component App.js . The parameter of this function i.e screenValueHandlerParam, will be the data (either the buffer or runningTotal variable) being expected from the child component. The screenValue state is then set to this received data. After this the data has already been stored in screenValue state variable and can be used by the App component in any way.   */
  const screenValueHandler = (screenValueHandlerParam) => {
    setScreenValue(screenValueHandlerParam);
  };


  return (
    /* This is the JSX where the components carrying the JSX for the screen and buttons are wrapped. */
    <div className="calc">
      <ScreenComponent screenValueProp={screenValue}/>
      <ButtonsComponent screenValueHandlerFuncProp={screenValueHandler}/>  
    </div>
  );
}

export default App;
