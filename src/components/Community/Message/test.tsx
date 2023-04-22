import React from "react";
import { render, screen } from "@testing-library/react";
import { Message } from ".";

test("renders learn react link", () => {
  render(
    <Message
      name="Amanda Nash"
      actionsEnabled={false}
      bookmarksEnabled={false}
    />
  );
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
