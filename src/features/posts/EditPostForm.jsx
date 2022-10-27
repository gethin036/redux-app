import React, { useState, useEffect } from 'react' 
import { useSelector, useDispatch } from 'react-redux'
import { useParams ,useNavigate } from 'react-router-dom'
import { singlePost, postUpdated } from './postsSlice'

export default function EditPostForm () {
  const { postId } = useParams()

  const post = useSelector(singlePost(postId))

  useEffect(() => {
    setTitle(post.title)
    setContent(post.content)
  }, [post])


  const [title, setTitle] = useState('')
  const [content, setContent]= useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onTitleChange = e => setTitle(e.target.value)
  const onContentChange = e => setContent(e.target.value)

  const onSavePost = () => {
    if (title && content) {
      dispatch(postUpdated({
        id: postId,
        title,
        content
      }))
      navigate(`/posts/${post.id}`)
    }
  }

  return (
    <section>
      <h2>Edit Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input 
          type="text"
          id="postTitle"
          name="postTitle"
          placeholder="What's on your mind"
          value={title}
          onChange={onTitleChange} 
        />

        <label htmlFor="postContent">Content:</label>
        <textarea 
          name="postContent" 
          id="postContent" 
          value={content} 
          onChange={onContentChange}
        />
        <button type="button" onClick={onSavePost}>Save Post</button>
      </form>
    </section>
  )
}