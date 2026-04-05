import React, { useEffect, useState } from "react";

function useDebounce(value, timeout) {
  const [debouncedValue, setDebounceValue] = useState(value);
  useEffect(() => {
    let timeoutNumber = setTimeout(() => {
      setDebounceValue(value);
    }, timeout);
    return () => {
      clearTimeout(timeoutNumber);
    };
  }, [value]);
  return debouncedValue;
}
const App = () => {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 500);
  return (
    <>
      This is the debounce{debouncedValue}
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        placeholder="searching"
      />
    </>
  );
};

export default App;
