import { render, screen } from "@testing-library/react"
import Footer from "./Footer";

describe('Home Page', () => {
  it('should displays the title', () => {
    render(<Footer />);
    screen.getByText("Footer");
  })
})
