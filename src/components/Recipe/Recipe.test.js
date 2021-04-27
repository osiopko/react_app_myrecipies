import React from "react";
import { render } from "@testing-library/react";
import Recipe from "./Recipe";

describe("Recipe tests", () => {
  it("should render", () => {
    expect(render(<Recipe />)).toBeTruthy();
  });
});
