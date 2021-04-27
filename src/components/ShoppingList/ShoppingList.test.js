import React from "react";
import { render } from "@testing-library/react";
import ShoppingList from "./ShoppingList";

describe("ShoppingList tests", () => {
  it("should render", () => {
    expect(render(<ShoppingList />)).toBeTruthy();
  });
});
