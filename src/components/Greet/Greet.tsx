type GreetProps = {
    name?: string
}

export const Greet = ({ name = "" }: GreetProps) => {
    return <div data-testid="greet">Hello{name ? ` ${name}`: ''}</div>
}