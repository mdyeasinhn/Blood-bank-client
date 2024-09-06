import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Blog from "../Pages/Blog/Blog";
import Dashboard from "../Main/Dashboard";
import CreateDonationRequest from "../Components/Dashbord/Sidebar/CreateDonationRequest/CreateDonationRequest";
import PrivateRoute from "./PrivateRoute";
import CardDetails from "../Pages/Home/DonationRequests/CardDetails";
import AllUsers from "../Components/Dashbord/AllUser/AllUsers";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage/>,
      children:[
        {
            path : '/',
            element : <Home/>
        },
        {
            path : '/blog',
            element : <Blog/>
        },
        {
          path: '/login',
          element : <Login/>
        },
        {
          path: '/signup',
          element :<SignUp/>
        },
        {
          path: "/request/:id",
          element : <PrivateRoute><CardDetails/></PrivateRoute>
        }
      ]
    },

    {
      path : '/dashboard',
      element : <Dashboard/>,
      children: [
        {
          path: "create-donation-request",
          element : <CreateDonationRequest/>
        },
        {
          path: "all-users",
          element : <AllUsers/>
        }
      ]
    }
  ]);

  export default router ;