import React from "react";
import ReactDOM from "react-dom";
import Welcome from "../Welcome";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

it("renders invitation", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Welcome></Welcome>, div);
});

it("renders invitation correctly", () => {
  const { getByTestId } = render(<Welcome></Welcome>);
  expect(getByTestId("welcome")).toHaveTextContent('Welcome To "RecipeIt"');
});
