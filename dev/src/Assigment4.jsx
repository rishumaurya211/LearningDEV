import React, { useCallback, useState } from "react";

const Assigment4 = () => {
  const [text, settext] = useState("");
  console.log(text);

  const Alert = useCallback(() => {
    alert(text);
  }, [text]);
  return (
    <div>
      <input
        type="text"
        value={text}
        placeholder="Enter some text here"
        onChange={(e) => settext(e.target.value)}
      />

      <button onClick={Alert}>click</button>
    </div>
  );
};

export default Assigment4;
