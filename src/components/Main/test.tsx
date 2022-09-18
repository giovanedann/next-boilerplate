import { render, screen } from '@testing-library/react'
import Main from '.'

describe('<Main />', () => {
  it('should render the logo', () => {
    render(<Main />)

    expect(
      screen.getByAltText(/white react athom with pink background/i)
    ).toBeInTheDocument()
  })

  it('should render the heading', () => {
    render(<Main />)

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /boilerplate react \+ nextjs/i
      })
    ).toBeInTheDocument()
  })

  it('should render the description', () => {
    render(<Main />)

    expect(
      screen.getByText(
        /typescript, react, nextjs, jest, testing library, storybook, framer motion and styled components/i
      )
    ).toBeInTheDocument()
  })

  it('should render the background and text colors correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({
      'background-color': '#06092b',
      color: '#fff'
    })

    expect(container).toMatchSnapshot()
  })

  it('should render the developer image', () => {
    render(<Main />)

    expect(screen.getByAltText(/developer coding/i)).toBeInTheDocument()
  })
})
