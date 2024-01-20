/* eslint-disable no-unused-vars */
import { Outlet } from 'react-router-dom'
import useAuthCheck from '../hooks/useAuthCheck'

const MainLayout = () => {
  const authChecked = useAuthCheck()

  return !authChecked ? (
    <h1>Checking Authentication....</h1>
  ) : (
    <div>
      <Outlet />
    </div>
  )
}

export default MainLayout
