import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home/Home"
import Projects from "./pages/Projects/Projects"
import Layout from "./layouts/Layout"
import PageNotFound from "./pages/PageNotFound/PageNotFound"

const routers = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {index: true, element: <Home />},
            {path: "projecten", element: <Projects />},
            {path: "*", element: <PageNotFound />}
        ]
    },
])

export default routers
