import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
  return (
    <nav className='nav'>
      <Link className='link'
        to={'/'}>
        <img src="/img/donut.jpg" alt="" />
      </Link>
      <Link
        className='link'
        to={'/'}
      >
        Główna
      </Link>
      <Link
        className='link'
        to={'/about-us'}
      >
        O nas
      </Link>
      <Link
        className='link'
        to={'/store'}
      >
        Sklep
      </Link>
      <Link
        className='link'
        to={'/contact'}
      >
        Kontakt
      </Link>
      <Link
        className='link'
        to={'/cart'}
      >
        🛒
      </Link>
      
    </nav>
  )
}

export default Nav
