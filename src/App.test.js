import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("the counter starts at 0", () => {
  render(<App />);
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(0);
});

test("minus button has correct text", () => {
  render(<App />);

  const minusButton = screen.getByTestId("minus-button");
  expect(minusButton).toHaveTextContent("-");
});

test("plus button has correct text", () => {
  render(<App />);

  const plusButton = screen.getByTestId("plus-button");
  expect(plusButton).toHaveTextContent("+");
});

test("when the + button is clicked, the counter changes to 1", () => {
  render(<App />);
  const plusButton = screen.getByTestId("plus-button");
  fireEvent.click(plusButton);

  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent("1");
});

test("when the - button is clicked, the counter changes to -1", () => {
  render(<App />);
  const minusButton = screen.getByTestId("minus-button");
  fireEvent.click(minusButton);

  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent("-1");
});

test("onoff button has blue color", () => {
  render(<App />);
  const onOffButton = screen.getByTestId("onoff");
  expect(onOffButton).toHaveStyle({ backgroundColor: "blue" });
});

test("when onoff button is clicked +-button is disabled", () => {
  render(<App />);
  const onOffButton = screen.getByTestId("onoff");
  fireEvent.click(onOffButton);

  const plusButton = screen.getByTestId("plus-button");
  expect(plusButton).toBeDisabled();
});
