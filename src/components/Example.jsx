import React, { useState } from "react";
import "./Example.css";

const Example = () => {
  // стан компонента. Його зміна веде до перерендеру компонента
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1)
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
      <hr />
    </div>
  );
};

export default Example;
