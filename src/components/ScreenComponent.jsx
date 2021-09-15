/* I learnt to use ref at: https://dmitripavlutin.com/react-useref-guide/ */
import { useState, useRef, useEffect } from "react";

const ScreenComponent = ({ screenValueProp }) => {

  return(
    <section className="screen" >
      {screenValueProp}
    </section>
  );
};
export default ScreenComponent;