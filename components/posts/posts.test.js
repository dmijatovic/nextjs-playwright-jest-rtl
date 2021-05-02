import {render,screen, waitFor,waitForElementToBeRemoved} from '@testing-library/react'

import Posts from 'pages/posts'

describe('Posts page',()=>{
  it('render page with 3 posts',async()=>{
    await waitFor(()=>{
      render (<Posts/>)
    })
    // get loader
    const loader = screen.getByText("Loading...")
    expect(loader).toBeInTheDocument()
    // wait untill loader is removed
    await waitForElementToBeRemoved(loader)
    //  check for 3 posts
    const posts = screen.getAllByTestId("post-item")
    expect(posts).toHaveLength(3)
    // screen.debug()
  })
})