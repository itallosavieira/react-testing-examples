import { render, screen } from "@testing-library/react"
import Home from "./Home";

describe('Home Page', () => {
  it('should displays the title', () => {
    render(<Home />);
    screen.getByText("Home");
  })
})
