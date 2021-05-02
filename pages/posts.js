import {useEffect,useState} from 'react'
import Head from 'next/head'

import PageLayout from 'components/PageLayout'
import Header from 'components/posts/Header'
import Footer from 'components/home/Footer'
import PostItem from 'components/posts/PostItem'

export default function PostsPage() {
  const [posts,setPosts] = useState([])
  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    // console.log("Posts.useEffect...start")
    fetch('/api/posts')
      .then(res=>{
        // console.log("res...", res)
        return res.json()
      })
      .then(data=>{
        // console.log("data...", data)
        setPosts(data)
        setLoading(false)
      })
      .catch(e=>{
        // console.log("Error:", e.message)
        setLoading(false)
      })
  },[])

  function renderPosts(){
    // console.log("renderPosts...posts...",posts)
    if (loading===true){
      return(
        <div>Loading...</div>
      )
    }
    return posts.map(post=>{
      return(
        <PostItem
          key={post.id}
          post={post} />
      )
    })
  }
  // console.log("Posts...loading...", loading)
  return (
    <>
      <Head>
        <title>Posts page</title>
        <meta name="description" content="Info about testing Playwright" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout
        header={<Header/>}
        footer={<Footer/>}
      >
        <section>
          <h2>Section title</h2>
          <p>Some text here</p>
          {renderPosts()}
        </section>
      </PageLayout>
    </>
  )
}
