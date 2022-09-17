import { render, screen } from '@testing-library/react'
import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    render(<Main />)

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /boilerplate react \+ nextjs/i
      })
    ).toBeInTheDocument()
  })
})
