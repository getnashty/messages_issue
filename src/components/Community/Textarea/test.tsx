import React from "react";
import { render, screen } from "@testing-library/react";
import { Textarea } from ".";

test("renders learn react link", () => {
  render(<Textarea />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
