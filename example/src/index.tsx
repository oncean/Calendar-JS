import React, { } from "react";
import { render } from "react-dom";
import Calendar from "../../src/Calendar";

const App: React.SFC = () => {
  return (
    <div>
      <Calendar />
    </div>
  );
};

render(<App />, document.querySelector("#app"));
