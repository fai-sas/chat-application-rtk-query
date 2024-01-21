/* eslint-disable no-unused-vars */

import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Conversation from '../pages/Conversation'
import Inbox from '../pages/Inbox'
import PrivateRoute from '../components/PrivateRoute'
import PublicRoute from '../components/PublicRoute'

const Route = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <PublicRoute>
            <Login />
          </PublicRoute>
        ),
      },
      {
        path: 'register',
        element: (
          <PublicRoute>
            <Register />
          </PublicRoute>
        ),
      },
      {
        path: 'inbox',
        element: (
          // <PrivateRoute>
          <Conversation />
          // </PrivateRoute>
        ),
      },
      {
        path: 'inbox/:id',
        element: (
          // <PrivateRoute>
          <Inbox />
          // </PrivateRoute>
        ),
      },
    ],
  },
])

export default Route
