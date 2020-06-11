import React from "react";
import ReactDOM from "react-dom";
import NavbarHead from "../NavbarHead";
import { render } from "@testing-library/react";

it("renders header", () => {
  const div = document.createElement("div");
  ReactDOM.render(<NavbarHead ></NavbarHead>, div)
});

