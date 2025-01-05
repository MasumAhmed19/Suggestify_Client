import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import ErrorPage from '../pages/ErrorPage'
import Home from '../pages/Home'
import Queries from '../pages/Queries'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import AboutPage from '../pages/AboutPage'

const router = createBrowserRouter([
{
    path:'/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
        {
            index: true,
            element: <Home />,
        },{
            path:'/queries',
            element:<Queries />,
        },{
            path:'/login',
            element: <Login />,
        },{
            path:'/sign-up',
            element: <SignUp />
        },{
            path:'/about',
            element:<AboutPage />
        }
    ]
}
])

export default router
