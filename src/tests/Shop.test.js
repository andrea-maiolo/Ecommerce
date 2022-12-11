import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // optional
import userEvent from "@testing-library/user-event";
import RouteSwitch from "./RouteSwitch";

describe("loading page should work accordingly to products readyness", () => {
  it("should render loading when products aren't ready", () => {
    render(<RouteSwitch />);
    const shop = screen.getByRole("link", { name: "Products" });
    userEvent.click(shop);
    expect(screen.getByTestId("loadT").textContent).toMatch(
      /loading products/i
    );
  });
  it("should render products when ready", () => {
    render(<RouteSwitch />);
    const shop = screen.getByRole("link", { name: "Products" });
    userEvent.click(shop);
    expect(screen.findByTestId("prods")).toBeTruthy();
  });
});

describe("products are displayed correctly", () => {
  it("should render products as cards", () => {
    render(<RouteSwitch />);
    const shop = screen.getByRole("link", { name: "Products" });
    userEvent.click(shop);
    expect(screen.findByText("€", { exact: false })).toBeTruthy();
  });
});
