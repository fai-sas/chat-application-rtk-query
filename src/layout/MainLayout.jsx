import { Outlet } from 'react-router-dom'
import Sidebar from '../components/inbox/Sidebar'

const MainLayout = () => {
  return (
    <div>
      {/* <Sidebar /> */}
      <Outlet />
    </div>
  )
}

export default MainLayout
