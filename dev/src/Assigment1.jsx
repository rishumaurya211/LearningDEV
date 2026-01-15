import React, { memo, useCallback, useState } from "react";

const Assigment1 = () => {
  const [count, setcount] = useState(0);

  const handleIncrement = useCallback(() => {
    setcount(function(currCount){
      return currCount+1;
    });
  }, []);
  const handledecrement = useCallback(() => {
    setcount(function (currCount){
      return currCount-1;
    });
  }, []);
  return (
    <div>
      <p>This is the {count}</p>
      <CounterButtons
        onIncrement={handleIncrement}
        ondecrement={handledecrement}
      />
    </div>
  );
};
const CounterButtons = memo(({ onIncrement, ondecrement }) => {
  return (
    <div>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={ondecrement}>Decrement</button>
    </div>
  );
});

export default Assigment1;
