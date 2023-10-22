import { createBrowserRouter } from 'react-router-dom';

import { Home } from '@/pages/Home';
import { Post } from '@/pages/Post';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/post',
    element: <Post />,
  },
]);

export { router };
