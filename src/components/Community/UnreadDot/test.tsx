import React from "react";
import { render, screen } from "@testing-library/react";
import { UnreadDot } from ".";

test("renders learn react link", () => {
  render(<UnreadDot />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
