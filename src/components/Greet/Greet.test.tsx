import { render, screen } from "@testing-library/react"
import { Greet } from "./Greet"

test('Greet renders correctly', () => {
    render(<Greet />);
    const greetElement = screen.getByTestId("greet");
    expect(greetElement.textContent).toEqual("Hello");
})

test('Greet renders with name', () => {
    render(<Greet name="Himanshu" />);
    const greetElement = screen.getByTestId("greet");
    expect(greetElement.textContent).toEqual("Hello Himanshu");
})