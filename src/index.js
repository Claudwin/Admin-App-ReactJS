import React from "react";
import { render } from "react";

function Hi() {
  return <p> Hi. </p>;
}

render(<Hi />, document.getElementById("app"));
