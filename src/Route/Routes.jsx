import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import BookService from "../Pages/BookService/BookService";
import Bookings from "../Pages/Bookings/Bookings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signUp",
        element: <SignUp></SignUp>,
      },
      {
        path:"bookService/:id",
        element:<BookService></BookService>,
        loader:({params}) =>fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path:"bookings",
        element:<Bookings></Bookings>
      }
    ],
  },
]);

export default router;
