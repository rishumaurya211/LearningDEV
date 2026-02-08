import React, { useContext, useState } from "react";
import { CountContext } from "./context";
//Goal is build the button that help us in incresing and decrease the count varible
// Use the context api for count that help us to teleport the child where we need us..


// Here i have use the context provider the give the count value outside the component & it helps in the to void the prosp drilling...
export const Props = () => {
  const [count, setcount] = useState(0);

  // Wrapn the component that want to use the teleport value..
  return (
    <div>
      <CountContext.Provider value={count}>
        <Count count={count} setcount={setcount} />
      </CountContext.Provider>
    </div>
  );

  function CountRender() {
    let count = useContext(CountContext);
    return <div> {count} </div>;
  }
  function Count({ setcount }) {
    return (
      <div>
        <CountRender />
        <Button setcount={setcount} />
      </div>
    );
  }
  function Button({ setcount }) {
    const count = useContext(CountContext);
    return (
      <div>
        <button
          onClick={() => {
            setcount(count + 1);
          }}
        >
          Increase
        </button>
        <button
          onClick={() => {
            setcount(count - 1);
          }}
        >
          Decrease
        </button>
      </div>
    );
  }
};
