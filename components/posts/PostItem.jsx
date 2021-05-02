
export default function PostItem({post}){
  return(
    <section
      data-testid="post-item">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </section>
  )
}