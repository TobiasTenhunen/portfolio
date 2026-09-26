import './App.css'
import { RouterProvider, useLocation } from 'react-router-dom'
import routers from './routes'
import { useEffect } from 'react'

function App() {
  return (
    <RouterProvider router={routers} />
  )
}

export default App
