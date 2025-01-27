import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Projects from './Pages/Projects/Projects'
import NotFound from './Pages/Not Found/NotFound'
import 'animate.css';



const router = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "projects",
        element: <Projects />
      },
      {
        path: "*",
        element: <NotFound />
      },
    ]
  }

])


createRoot(document.getElementById('root')).render(
  <RouterProvider router = {router}></RouterProvider>
)
