import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // optional
import userEvent from "@testing-library/user-event";
import RouteSwitch from "./RouteSwitch";

describe("RouteSwitch component", () => {
  it("renders the home page", () => {
    const { getByRole } = render(<RouteSwitch />);
    expect(getByRole("heading").textContent).toMatch(/hello from app/i);
  });
});

describe("nav bar switches pages", () => {
  it("renders contacts after click", () => {
    render(<RouteSwitch />);
    const contacts = screen.getByRole("link", { name: "Contacts" });
    userEvent.click(contacts);
    expect(screen.getByRole("heading").textContent).toMatch(
      /hello from contacts/i
    );
  });
});

describe("nav bar switches pages", () => {
  it("renders shop after click", () => {
    render(<RouteSwitch />);
    const shop = screen.getByRole("link", { name: "Products" });
    userEvent.click(shop);
    expect(screen.getByTestId("shopTitle").textContent).toMatch(
      /hello from shop/i
    );
  });
});
