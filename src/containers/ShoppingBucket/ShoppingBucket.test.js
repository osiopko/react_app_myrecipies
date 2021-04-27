import React from "react";
import { render } from "@testing-library/react";
import ShoppingBucket from "./ShoppingBucket";

describe("ShoppingBucket tests", () => {
  it("should render", () => {
    expect(render(<ShoppingBucket />)).toBeTruthy();
  });
});
