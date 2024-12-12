import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import AuthLayout from "../layout/AuthLayout";
import SignIn from "../pages/Auth/SignIn/SignIn";
import SignUp from "../pages/Auth/SignUp/SignUp";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Product from "../pages/Product/Product";
import NotFound from "../pages/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"product",
        element:<Product/>
      }
    ]
  },
  {
    path:"auth",
    element: <AuthLayout/>,
    children:[
      {
        path:"signin",
        element:<SignIn/>
      },
      {
        path:"signup",
        element: <SignUp/>
      }
    ]
  },
  {
    path:"*",
    element:<NotFound/>
  }
])

export default router;