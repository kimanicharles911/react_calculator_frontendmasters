/* This project was inspired by https://frontendmasters.com/bootcamp/introduction-html/
  and https://frontendmasters.com/bootcamp/calculator-javascript/ */

/* I created a component and destructured the props I received from the parent component App.js */
const ScreenComponent = ({ screenValueProp }) => {

  return(
    /* Below is the JSX for the screen part of the calculator.
    The screen value of the calculator is set from the screenValueProp.  */
    <section className="screen" >
      {screenValueProp}
    </section>
  );
};
export default ScreenComponent;