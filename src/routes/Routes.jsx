import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Queries from "../pages/Queries";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import AboutPage from "../pages/AboutPage";
import AddQueryPage from "../pages/AddQueryPage";
import MyQueries from "../pages/MyQueries";
import QueryDetailPage from "../pages/QueryDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/queries",
        element: <Queries />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },{
        path: "/add-query",
        element: <AddQueryPage />
      },{
        path: "/my-queries",
        element: <MyQueries />
      },{
        // kaj krte hbeeee
        path:'queries/:id',
        element:<QueryDetailPage></QueryDetailPage>
      }
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
]);

export default router;
