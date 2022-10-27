import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  { id: '1', title: 'First Post!', content: 'Hello!' },
  { id: '2', title: 'Second Post!', content: 'More Text' }
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded:{
      reducer (state, action) {
        state.push(action.payload)
      },
      prepare(title, content, userId) {
        return{
          payload: {
            id: nanoid(),
            title,
            content,
            user: userId
          }
        }
      }
    },
    postUpdated (state, action) {
      const { id, title, content } = action.payload
      const existingPost = state.find(post => post.id === id)
      if (existingPost) {
        existingPost.title = title
        existingPost.content = content
      }
    }
  }
})

export const postsList = (state) => state.posts
export const singlePost = (postId) => (state) => state.posts.find(post => post.id === postId)

export const { postAdded, postUpdated } = postsSlice.actions

export default postsSlice.reducer