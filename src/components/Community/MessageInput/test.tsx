import React from "react";
import { render, screen } from "@testing-library/react";
import { MessageInput } from ".";

test("renders learn react link", () => {
  render(<MessageInput />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
