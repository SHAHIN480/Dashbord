import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "@/App.css"
import Layout from "./layout/Layout"
import Billing from "./pages/Billing"
import Course from "./pages/Course"
import Profile from "./pages/Profile"
import Settings from "./pages/Settings"


const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "billing",
        element: <Billing />
      },
      {
        path: "course",
        element: <Course />
      },
      {
        path: "profile",
        element: <Profile />
      },
      {
        path: "settings",
        element: <Settings />
      }
    ]
  }
])

const App = () => {
  return (
    <>
      <RouterProvider router={route} ></RouterProvider>
    </>
  )
}

export default App
