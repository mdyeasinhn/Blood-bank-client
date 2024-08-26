import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path : '/',
            element : <Home/>
        },
        {
          path: '/login',
          element : <Login/>
        },
        {
          path: '/signin',
          element :<SignIn/>
        },
        {
          path: '/signup',
          element :<SignUp/>
        }
      ]
    },
  ]);

  export default router ;