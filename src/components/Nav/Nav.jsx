import { useState, useContext } from 'react'
import { AppContext } from '../../App'
import { Link } from 'react-router-dom'
import Hamburger from 'hamburger-react'
import './Nav.css'

const Nav = () => {
  const [isOpen, setOpen] = useState(false)
  const { shoppingList} = useContext(AppContext)
  return (
    <nav className='nav'>
      <Link className='link'
        to={'/'}>
        <img src="/img/donut.jpg" alt="" />
      </Link>
      <ul className={!isOpen ? 'wrapper' : 'wrapper navbar-none'}>
      <Link
        className='link link-text'
        to={'/'}
      >
        Główna
      </Link>
      <Link
        className='link link-text'
        to={'/about-us'}
      >
        O nas
      </Link>
      <Link
        className='link link-text'
        to={'/store'}
      >
        Sklep
      </Link>
      <Link
        className='link link-text'
        to={'/contact'}
      >
        Kontakt
      </Link>
      <Link
        className='link'
        to={'/cart'}
      >
        <div className="cart-span">
        🛒<span>{shoppingList.length}</span>
        </div>
      </Link>
      </ul>
      <div className='hamburger'>
        <Hamburger
          size={30}
          duration={0.3}
          distance='md'
          color={isOpen ? '#ff3f34' : '#1e272e'}
          easing='ease-in'
          rounded
          label='Show menu'
          onToggle={(toggled) => {
            setOpen(true)
            if (toggled) {
              // open a menu
            } else {
              setOpen(false)
            }
          }}
        />
      </div>
    </nav>
  )
}

export default Nav
