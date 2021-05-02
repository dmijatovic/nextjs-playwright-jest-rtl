// import '@testing-library/jest-dom'
import {render,screen} from '@testing-library/react'

import AboutHeader from './Header'

describe('About Header',()=>{
  beforeEach(()=>{
    render(
      <AboutHeader />
    )
  })
  it('renders component',()=>{
    const title = screen.getByText("About page")
    expect(title).toBeInTheDocument()
    // screen.debug()
  })

  it('has link to two other pages',()=>{
    const links = screen.getAllByRole("link")
    expect(links).toHaveLength(2)
  })

})