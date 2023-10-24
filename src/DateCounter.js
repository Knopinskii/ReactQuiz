import { useState } from "react";

export default function DataCounter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  function dec() {
    setCount((count) => count - step);
  }

  function inc() {
    setCount((count) => count + step);
  }

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  function reset() {
    setCount(0);
    setStep(1);
  }

  function defineCount(e) {
    setCount(Number(e.target.value));
  }

  function defineStep(e) {
    setStep(Number(e.target.value));
  }
  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min={0}
          max={10}
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>
      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>
      <p>{date.toDateString()}</p>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
