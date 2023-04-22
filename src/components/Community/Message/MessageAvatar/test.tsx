import React from "react";
import { render, screen } from "@testing-library/react";
import { MessageAvatar } from ".";

test("renders learn react link", () => {
  render(<MessageAvatar />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
