import {rest} from 'msw'

const posts = require('./posts.json')

export const handlers=[
  rest.get("https://jsonplaceholder.typicode.com/posts",(req,res,ctx)=>{
    return res( 
      ctx.status(200),
      ctx.json(posts)
    )
  })
]