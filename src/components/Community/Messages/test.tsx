import React from "react";
import { render, screen } from "@testing-library/react";
import { Messages } from ".";

test("renders learn react link", () => {
  render(<Messages />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
