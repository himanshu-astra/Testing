import { screen, render } from "@testing-library/react";
import user from "@testing-library/user-event";
import Counter from "./Counter";

describe('Counter', () => {
    test('is rendering initial count', () => {
        render(<Counter />);
        const tag = screen.getByRole('heading');
        expect(tag.textContent).toEqual("0")
    })

    test('is rendering button', () => {
        render(<Counter />);
        const button = screen.getByRole('button', {
            name: 'Increment'
        });
        expect(button).toBeInTheDocument()
    })

    test('renders a count of 2 after clicking twice', async () => {
        user.setup()
        render(<Counter />)
        const button = screen.getByRole('button', {
            name: 'Increment'
        });
        await user.dblClick(button)
        const header = screen.getByRole("heading")
        expect(header).toHaveTextContent("2")
    })
})