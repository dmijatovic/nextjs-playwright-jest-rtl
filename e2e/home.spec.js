
describe("Home page",()=>{
  beforeAll(async()=>{
    await page.goto("http://localhost:3000")
  })
  it('renders home page',async()=>{
    const title = await page.isVisible("h1 >> text=Home page")
    expect(title).toBeTruthy()
  })
  it('navigates to about page',async()=>{
    const aboutLink = await page.$("a >> text=About")
    aboutLink.click()
    await page.waitForNavigation()
    const aboutHeader = await page.isVisible("h1 >> text=About page")
    expect(aboutHeader).toBeTruthy()
  })
})