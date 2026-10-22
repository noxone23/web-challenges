import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";
import { expect, vi } from "vitest";

test("renders a label and an input with the correct attributes", () => {

  render(
    <Input
      labelText="Username"
      name="username"
      placeholder="Enter username"
      required={true}
      onChange={() => {}}
    />,
  );

  const inputEl = screen.getByLabelText("Username");
  
  expect(inputEl).toBeInTheDocument();
  expect(inputEl).toHaveAttribute("name", "username");
  expect(inputEl).toHaveAttribute("placeholder", "Enter username");
});

test("calls callback on every user input", async () => {

const user = userEvent.setup();
const handleChange = vi.fn();

render(
<Input 
labelText="Username" 
name="username" 
onChange={handleChange} />
);

const inputEl = screen.getByLabelText("Username")
await user.type(inputEl, "Neo");

expect(handleChange).toHaveBeenCalledTimes(3);

});