import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '0', name: 'Tianna Jenkins' },
  { id: '1', name: 'Kevin Grant' },
  { id: '2', name: 'Madison Price' } 
]

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}
})

export const getUsers = (state) => state.users
export const postAuthor = (userId) => (state) => state.users.find(user => user.id === userId)

export default userSlice.reducer