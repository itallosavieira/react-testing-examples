import { render, screen } from "@testing-library/react"
import Header from "./Header";

describe('Home Page', () => {
  it('should displays the title', () => {
    render(<Header />);
    screen.getByText("Header");
  })
})
