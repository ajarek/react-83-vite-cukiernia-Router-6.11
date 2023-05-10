import { createContext, useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Main from './layouts/Main/Main'
import Home from './pages/Home/Home'
import AboutUs from './pages/AboutUs/AboutUs'
import Store from './pages/Store/Store'
import Contact from './pages/Contact/Contact'
import Cart from './pages/Cart/Cart'
import Error from './pages/Error/Error'
export const AppContext = createContext()

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: 'about-us',
        element: <AboutUs />,       
        errorElement: <Error />,
      },
      {
        path: 'store',
        element: <Store />,       
        errorElement: <Error />,
      },
      {
        path: 'contact',
        element: <Contact />,       
        errorElement: <Error />,
      },
      {
        path: 'cart',
        element: <Cart />,       
        errorElement: <Error />,
      },
     
    ]
  },
])
function App() {
  

  return (
    <div
      className='App'
      
    >
      <AppContext.Provider
        value={{ }}
      >
        <RouterProvider router={router} />
      </AppContext.Provider>
    </div>
  )
}

export default App
