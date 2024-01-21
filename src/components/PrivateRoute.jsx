/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Navigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useAuth()
  return isLoggedIn ? children : <Navigate to='/' />
}

export default PrivateRoute
