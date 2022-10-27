import React from 'react'
import { useSelector } from 'react-redux'
import { postAuthor } from '../users/userSlice'

export default function PostAuthor ({ userId }) {
  const author = useSelector(postAuthor(userId))

  return <span>by { author ? author.name : 'Unkonw author'}</span>
}