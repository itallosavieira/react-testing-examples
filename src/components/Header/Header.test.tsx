import { render, screen } from "@testing-library/react"
import { Header } from "./Header"

describe('Header Component', () => {
  it('should render the title', () => {
    render(<Header />)
    screen.getByText(/header/i);
  })
})