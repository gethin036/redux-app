import React from 'react'
import { useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { singlePost } from './postsSlice'

export default function SinglePostPage () {
  const { postId }  = useParams()
  // console.log(postId)

  // const post = useSelector(state => state.posts.find(post => post.id === postId))
  const post = useSelector(singlePost(postId))

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }

  return (
    <section>
      <article className="post">
        <h2>{ post.title }</h2>
        <p className="post-content">{ post.content }</p>
        <Link to={`/editpost/${post.id}`} className="button">Edit Post</Link>
      </article>
    </section>
  )
}