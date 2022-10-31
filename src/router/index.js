import { useRoutes, Navigate, Outlet } from "react-router-dom";
import PostsList from '@/features/posts/PostsList';
import AddPostFrom from '@/features/posts/AddPostForm';
import EditPostForm from '@/features/posts/EditPostForm';
import SinglePostPage from '@/features/posts/SinglePostPage';

function App () {
  const routes = [
    {
      path: '/',
      element: <><AddPostFrom /><PostsList /><Outlet></Outlet></>,
      children: [
        { 
          path: 'kk',
          element: <div>children</div>
        }
      ]
    },
    {
      path: '/posts/:postId',
      element: <SinglePostPage />
    },
    {
      path: '/editpost/:postId',
      element: <EditPostForm />
    },
    {
      path: '*',
      element: <Navigate to="/" />
    }
  ]
  
  return useRoutes(routes)
}


export default App