import React from 'react';
import {
  HashRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import NavBar from './component/NavBar';
import PostsList from './features/posts/PostsList';
import AddPostFrom from './features/posts/AddPostForm';
import EditPostForm from './features/posts/EditPostForm';
import SinglePostPage from './features/posts/SinglePostPage';
// import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<><AddPostFrom /><PostsList /></>}></Route>
        <Route path='/posts/:postId' element={<SinglePostPage />}></Route>
        <Route path='/editpost/:postId' element={<EditPostForm />}></Route>
        <Route path="*" element={<Navigate to="/"></Navigate>}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
