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
import UpdateQuery from "../pages/UpdateQuery";
import MyRecommendation from "../pages/MyRecommendation";
import PrivateRoute from "./PrivateRoute";
import RecommendationForMe from "../pages/RecommendationForMe";

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
        element: <PrivateRoute><AddQueryPage /></PrivateRoute> 
      },{
        path: "/my-queries/:email",
        element: <PrivateRoute><MyQueries /></PrivateRoute>
      },{
        path:'query/:id', // kaj krte hbeeee
        element:<QueryDetailPage />
      },{
        path:'update/:id',
        element: <PrivateRoute><UpdateQuery /></PrivateRoute>
      },{
        path:'/my-recommendations/:email',
        element:<PrivateRoute><MyRecommendation /></PrivateRoute>
      },{
        path:'/recommendations-for-me/:email',
        element:<PrivateRoute><RecommendationForMe/></PrivateRoute>
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
