import React, { useState, useEffect } from 'react'
import styles from './Navbar.module.css'
import LogoAS from '../../images/Icon/LogoAS.png'
import { NavLink } from 'react-router-dom'

function Navbar () {
  const BASE_URL = 'http://localhost:3002/'
  // const BASE_URL = 'https://gym-as.vercel.app/'

  // Navbar cambia a fondo negro al hacer scroll
  const changeOpacity = (pxPantalla) => {
    window.addEventListener('scroll', () => {
      const scroll = document.documentElement.scrollTop
      const navBar = document.getElementById('navBar')
      if (navBar) {
        if (scroll > pxPantalla) {
          navBar.className = styles.headerOpacity
        } else {
          navBar.className = styles.header
        }
      }
    })
  }
  changeOpacity(50)

  const goTop = () => {
    window.scrollTo({
      top: 0
    })
  }

  // Estado para mostrar el menú que despliega la Navbar
  const [showNavbar, setShowNavBar] = useState(false)
  const showNav = () => {
    setShowNavBar(!showNavbar)
  }

  // Estado para mostar NavBar responsive de acuerdo al max-width de la pantalla
  const [isSmallScreen, setIsSmallScreen] = useState(false)
  useEffect(() => {
    function handleResize () {
      setIsSmallScreen(window.innerWidth < 768)
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div>
      <header id='navBar' className={styles.header}>
        <img src={LogoAS} alt='LogoAS' title='Antonio Silva' />
        <div id='menuIcon' className={styles.menuIcon}>
          <i onClick={showNav} className={showNavbar === false ? 'bx bx-menu' : 'bx bx-x'} />
        </div>
        <nav className={isSmallScreen && showNavbar === false ? styles.hide : styles.navbar}>
          <NavLink to='/' onClick={goTop}>
            <a href='/' className={window.location.href === BASE_URL ? styles.active : ''}>Home</a>
          </NavLink>
          <NavLink to='/about' onClick={goTop}>
            <a href='/about' className={window.location.href === BASE_URL + 'about' ? styles.active : ''}>About</a>
          </NavLink>
          <NavLink to='/gallery' onClick={goTop}>
            <a href='/gallery' className={window.location.href === BASE_URL + 'gallery' ? styles.active : ''}>Gallery</a>
          </NavLink>
          <NavLink to='/pricing' onClick={goTop}>
            <a href='/pricing' className={window.location.href === BASE_URL + 'pricing' ? styles.active : ''}>Pricing</a>
          </NavLink>
          <NavLink to='/classes' onClick={goTop}>
            <a href='/classes' className={window.location.href === BASE_URL + 'classes' ? styles.active : ''}>Classes</a>
          </NavLink>
          <NavLink to='/contact' onClick={goTop}>
            <a href='/contact' className={window.location.href === BASE_URL + 'contact' ? styles.active : ''}>Contact</a>
          </NavLink>
        </nav>
      </header>
    </div>
  )
}
export default Navbar
