import React, { useEffect, useContext } from "react";

import { CounterContext } from "../state";
import "./counter-card.css";

const CounterCard = props => {
  const count = useContext(CounterContext);

  // if the value of the second argument changes the effect is called again
  useEffect(() => {
    console.log("mounted");

    return () => console.log("unmounted");
  }, []);

  return (
    <div className="card">
      <i>Count:</i> {count}
    </div>
  );
};

export default CounterCard;
