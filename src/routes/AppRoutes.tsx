import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';


const router = createBrowserRouter([
  {
    path: '/',
    element: <SignIn />
  },
   {
    path: '/signUp',
    element: <SignUp/>
  },
  {
    path: '/home',
    element: <Home/>
  }
]);

const AppRoutes: React.FC = () => {
  return <RouterProvider router={router} />;
};
export default AppRoutes;
