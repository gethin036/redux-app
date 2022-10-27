import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { postsList } from './postsSlice'
import PostAuthor from './PostAuthor'

const PostsList = () => {
  const posts = useSelector(postsList)
  // console.log(posts)

  const renderedPosts = posts.map(post => (
    <article className="post-excerpt" key={post.id}>
      <h3>{ post.title }</h3>
      <div>
        <PostAuthor userId={post.userId} />
      </div>
      <p className="post-content">{ post.content.substring(0,100) }</p>
      <Link to={`/posts/${post.id}`} className="button muted-button"> View Post</Link>
    </article>
  ))

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      { renderedPosts }
    </section>
  )
}


export default PostsList