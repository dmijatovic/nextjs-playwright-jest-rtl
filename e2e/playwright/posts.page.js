const {chromium} = require("playwright");
const dummyData = require('./posts')

async function mockResponse(route,request){
  // console.log("mockResponse...dummyData", dummyData)
  await route.fulfill({
    status:200,
    contentType:'application/json',
    body: JSON.stringify(dummyData)
  })
}

(async()=>{
  const browser = await chromium.launch({devtools:true})
  const context = await browser.newContext()
  const page = await context.newPage()

  await page.goto("http://localhost:3000")

  const postsLink = await page.$("a >> text=Posts")
  postsLink.click()

  page.on('request',request=>{
    console.log('>>',request.method(),request.url())
  })

  // await page.route("**/api/posts",async(route,request)=>{
  //   console.log("request made...")
  //   await route.fulfill({
  //     status:200,
  //     contentType:'application/json',
  //     body: JSON.stringify(dummyData)
  //   })
  // })
  page.route("**/api/posts", mockResponse)

  const [response] = await Promise.all([
    page.waitForNavigation(),
    postsLink.click()
  ])

  const postItems = await page.$$('data-testid=post-item')

  // debugger

  await browser.close()

})();
