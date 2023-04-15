import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Dashboard from './components/pages/Dashboard'
import App from './App'
import Error404 from './components/pages/Error404'
import Banks from './components/pages/Banks'

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App><Dashboard /></App>,
  },
  {
    path: "/banks",
    element: <App><Banks /></App>,
  },
  {
    path: "/*",
    element: <App><Error404 /></App>,
  },
])

const Router = () => {
  return <RouterProvider router={routes} />
}

export default Router