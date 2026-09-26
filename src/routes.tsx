import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home/Home"
import CategorySelect from "./pages/CategorySelect/CategorySelect"
import Projects from "./pages/Projects/Projects"
import Layout from "./layouts/Layout"
import PageNotFound from "./pages/PageNotFound/PageNotFound"
import { useEffect } from "react"

const routers = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {index: true, element: <Home />},
            {path: "mijnwerk", element: <CategorySelect />},
            {path: "projecten", element: <Projects />},
            {path: "*", element: <PageNotFound />}
        ]
    },
])

export default routers
