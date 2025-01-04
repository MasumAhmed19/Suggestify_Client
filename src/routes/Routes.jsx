import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import ErrorPage from '../pages/ErrorPage'
import Home from '../pages/Home'

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
            
        }
    ]
}
])

export default router
