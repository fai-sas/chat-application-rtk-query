import { Link } from 'react-router-dom'
import logoImage from '../../assets/images/chat-icon.png'
import { useDispatch } from 'react-redux'
import { userLoggedOut } from '../../features/auth/authSlice'

export default function Navigation() {
  const dispatch = useDispatch()

  const logOut = () => {
    dispatch(userLoggedOut())
    localStorage.clear()
  }

  return (
    <nav className='sticky top-0 z-40 transition-colors border-b border-general bg-violet-700'>
      <div className='mx-auto max-w-7xl'>
        <div className='flex items-center justify-between h-16'>
          <Link to='/'>
            <img className='h-10' src={logoImage} alt='logo' />
          </Link>
          <ul>
            <li className='text-white'>
              <span className='cursor-pointer' onClick={logOut}>
                Logout
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
