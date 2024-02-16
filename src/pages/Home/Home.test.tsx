import { fireEvent, render, screen } from "@testing-library/react"
import Home from "./Home";

describe('Home Page', () => {
  it('should displays the title', () => {
    render(<Home />);
    screen.getByText("Home");
  })

  it('should displays text when Show button is clicked', () => {
    render(<Home />)
    const button = screen.getByRole('button');
    fireEvent.click(button);
    screen.getByText(/Lorem ipsum dolo/i)
  })

  it('should hide text when Hide button is clicked', () => {
    render(<Home />)
    const button = screen.getByRole('button');
    fireEvent.click(button);
    fireEvent.click(button);
    const text = screen.queryByText(/Lorem ipsum dolo/i)
    expect(text).toBeNull()
  })
})
