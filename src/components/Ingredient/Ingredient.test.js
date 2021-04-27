import React from "react";
import { render } from "@testing-library/react";
import Ingredient from "./Ingredient";

describe("Ingredient tests", () => {
  it("should render", () => {
    expect(render(<Ingredient />)).toBeTruthy();
  });
});
