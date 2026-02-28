import React, { useState } from "react";
import { Props } from "./Components/Props";
import CountR from "./Components/CountR";
import Assigment5 from "./Assigment5";
import { RecoilRoot } from "recoil";

const App = () => {
  return (
    <div>
      <MainApp />
    </div>
  );
};

function MainApp() {
  return (
    <RecoilRoot>
      <Assigment5 />
    </RecoilRoot>
  );
}

export default App;
