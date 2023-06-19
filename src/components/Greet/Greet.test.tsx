import React from "react"
import { render, screen } from "@testing-library/react"
import { Greet } from "./Greet"

test('should render Hello', () => {
    render(<Greet />);
    const greetElement = screen.getByTestId("greet");
    expect(greetElement).toBeInTheDocument();
})