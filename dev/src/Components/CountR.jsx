import React from "react";
import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { countAtom } from "../store/atoms/count";

const CountR = () => {
  return (
    <RecoilRoot>
      <Count />
    </RecoilRoot>
  );

  function CountRender() {
    const count = useRecoilValue(countAtom);
    return (
      <div>
        {" "}
        {count}
        <EvenCountRender />
      </div>
    );
  }
  function EvenCountRender() {
    const isEven = useRecoilValue(evenSelector);
    return <div>{isEven ? "It is even" : null}</div>;
  }
  function CountEven() {
    const count = useRecoilValue(countAtom);
    return <div>{count % 2 == 0 ? "IT is even " : null}</div>;
  }
  function Count() {
    return (
      <div>
        <CountRender />
        <Button />
      </div>
    );
  }
  function Button() {
    const setcount = useSetRecoilState(countAtom);

    return (
      <div>
        <button
          onClick={() => {
            setcount((count) => count + 1);
          }}
        >
          Increase
        </button>
        <button
          onClick={() => {
            setcount((count) => count - 1);
          }}
        >
          Decrease
        </button>
      </div>
    );
  }
};
export default CountR;
