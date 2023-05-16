import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import BookService from "../Pages/BookService/BookService";
import Bookings from "../Pages/Bookings/Bookings";
import Private from "./Private";

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
        path: "bookService/:id",
        element: (
          <Private>
            <BookService></BookService>
          </Private>
        ),
        loader: ({ params }) =>
          fetch(`https://car-doctor-server-shanin18.vercel.app/services/${params.id}`),
      },
      {
        path: "bookings",
        element: <Bookings></Bookings>,
      },
    ],
  },
]);

export default router;
