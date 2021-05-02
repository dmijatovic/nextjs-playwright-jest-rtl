
const dummyData = require('./playwright/posts.page')

async function mockResponse(route,request){
  console.log("mockResponse...", dummyData)
  await route.fulfill({
    status:200,
    contentType:'application/json',
    body: JSON.stringify(dummyData)
  })
}

describe('Posts page',()=>{
  beforeAll(async()=>{
    await page.goto("http://localhost:3000")
  })

  it("navigates to posts page",async()=>{
    const postsLink = await page.$("a >> text=Posts")
    expect(postsLink).toBeTruthy()


    // page.on('request',request=>{
    //   console.log('>>',request.method(),request.url())
    // })

    // MOCK response
    page.route("**/api/posts",mockResponse)

    const [response] = await Promise.all([
      page.waitForNavigation(),
      postsLink.click()
    ])

    const postItems = await page.$$('data-testid=post-item')
    expect(postItems).toHaveLength(3)

  })
})