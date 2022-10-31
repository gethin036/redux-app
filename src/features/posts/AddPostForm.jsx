import React, { useState } from 'react'
import { useSelector ,useDispatch } from 'react-redux'
import { Button, Select, Input } from 'antd';
import { postAdded  } from './postsSlice'
import { useTranslation } from 'react-i18next'
import { getUsers } from '../users/userSlice'

export default function AddPostFrom () {
  const dispatch = useDispatch()
  const { t, i18n } = useTranslation()
  const users = useSelector(getUsers)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [userId, setUserId] = useState('')
  const [lang, setLang] = useState('zh')

  const onTitleChange = e => setTitle(e.target.value)
  const onContentChange = e => setContent(e.target.value)
  const onAuthorChange = e => setUserId(e.target.value)

  const savePost = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId))

      setTitle('')
      setContent('')
    }
  }
  const { Option } = Select
  const languageList = ['zh', 'en']
  const languageOption = languageList.map(language => (
    <Option key={language} value={language}>{language}</Option>  
  ))

  const onLanguageChange = (value) => {
    setLang(value)
    console.log(i18n.t('addNewPost'))
    i18n.changeLanguage(value)
  }

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

  const usersOptions = users.map(user => (
    <option key={user.id} value={user.id}>{user.name}</option>
  ))

  return(
    <section>
      <h2>{t('addNewPost')}</h2>
      {/* <button></button> */}
      <Select value={lang} onChange={onLanguageChange} style={{
          width: 200,
        }}>
        <Option value=""></Option>
        { languageOption }
      </Select>
      <form>
        <label htmlFor="postTitle">Post Title: </label>
        {/* <input 
          type="text"
          id="postTitle"
          name="postTitle"
          placeholder="What's you mind"
          value={title}
          onChange={onTitleChange}
        /> */}
        <Input 
          type="text"
          id="postTitle"
          name="postTitle"
          placeholder="What's you mind"
          value={title}
          onChange={onTitleChange}
        />
        <label htmlFor="postAuthor">Author: </label>
        <select id="postAuthor" value={userId} onChange={onAuthorChange}>
          <option value=""></option>
          { usersOptions }
        </select>
        <label htmlFor="postContent">Content: </label>
        {/* <textarea 
          name="postContent" 
          id="postContent"
          placeholder="Please input"
          value={content}
          onChange={onContentChange} 
        /> */}
        <Input.TextArea
          name="postContent" 
          id="postContent"
          placeholder="Please input"
          value={content}
          onChange={onContentChange} 
        />
        {/* <button type="button" onClick={savePost} disabled={!canSave}>Save Post</button> */}
        <Button type="primary" onClick={savePost} disabled={!canSave}>Save Post</Button>
        {/* <Button type="text">Text Button</Button> */}
      </form>
    </section>
  )
}