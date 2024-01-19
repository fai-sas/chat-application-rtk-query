/* eslint-disable no-unused-vars */

import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Conversation from '../pages/Conversation'
import Inbox from '../pages/Inbox'

const Route = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'inbox',
        element: <Conversation />,
      },
      {
        path: 'inbox/:id',
        element: <Inbox />,
      },
    ],
  },
])

export default Route
