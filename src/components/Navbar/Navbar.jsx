import React, { useState, useEffect } from 'react'
import styles from './Navbar.module.css'
import LogoAS from '../../images/Icon/LogoAS.png'
import { NavLink } from 'react-router-dom'

function Navbar () {
  // const BASE_URL = 'http://localhost:3003/'
  const BASE_URL = 'https://gym-as.vercel.app/'

  // Navbar cambia a fondo negro al hacer scroll
  const changeOpacity = (pxPantalla) => {
    window.addEventListener('scroll', () => {
      const scroll = document.documentElement.scrollTop
      const navBar = document.getElementById('navBar')
      if (navBar) {
        if (window.location.href === BASE_URL && scroll < pxPantalla) {
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

  // Cuando la pantalla es de dispositivo movil, cerrar la navbar cuando se hace clic en una pestaña
  const closeNavbar = () => {
    if (isSmallScreen) showNav()
  }

  return (
    <div>
      <header id='navBar' className={window.location.href === BASE_URL ? styles.headerOpacity : styles.header}>
        <img src={LogoAS} alt='LogoAS' title='Antonio Silva' />
        <div id='menuIcon' className={styles.menuIcon}>
          <i onClick={showNav} className={showNavbar === false ? 'bx bx-menu' : 'bx bx-x'} />
        </div>
        <nav className={isSmallScreen && showNavbar === false ? styles.hide : styles.navbar}>
          <NavLink to='/' onClick={goTop}>
            <span onClick={closeNavbar} href='/' className={window.location.href === BASE_URL ? styles.active : ''}>Home</span>
          </NavLink>
          <NavLink to='/about' onClick={goTop}>
            <span onClick={closeNavbar} href='/about' className={window.location.href === BASE_URL + 'about' ? styles.active : ''}>About</span>
          </NavLink>
          <NavLink to='/gallery' onClick={goTop}>
            <span onClick={closeNavbar} href='/gallery' className={window.location.href === BASE_URL + 'gallery' ? styles.active : ''}>Gallery</span>
          </NavLink>
          <NavLink to='/pricing' onClick={goTop}>
            <span onClick={closeNavbar} href='/pricing' className={window.location.href === BASE_URL + 'pricing' ? styles.active : ''}>Pricing</span>
          </NavLink>
          <NavLink to='/classes' onClick={goTop}>
            <span onClick={closeNavbar} href='/classes' className={window.location.href === BASE_URL + 'classes' ? styles.active : ''}>Classes</span>
          </NavLink>
          <NavLink to='/contact' onClick={goTop}>
            <span onClick={closeNavbar} href='/contact' className={window.location.href === BASE_URL + 'contact' ? styles.active : ''}>Contact</span>
          </NavLink>
        </nav>
      </header>
    </div>
  )
}
export default Navbar
