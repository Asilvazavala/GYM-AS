import React from 'react'
import styles from './Navbar.module.css'
import LogoAS from '../../images/Icon/LogoAS.png'
import { useNavBar } from '../../hooks/useNavBar'

function Navbar () {
  // const BASE_URL = 'http://localhost:3002/'
  const BASE_URL = 'https://gym-as.vercel.app/'
  const { goTop, closeNavbar, isSmallScreen, showNavbar, showNav } = useNavBar()

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

  return (
    <div>
      <header id='navBar' className={window.location.href === BASE_URL ? styles.headerOpacity : styles.header}>
        <img src={LogoAS} alt='LogoAS' title='Antonio Silva' />
        <div id='menuIcon' className={styles.menuIcon}>
          <i onClick={showNav} className={showNavbar === false ? 'bx bx-menu' : 'bx bx-x'} />
        </div>
        <nav className={isSmallScreen && showNavbar === false ? styles.hide : styles.navbar}>
          <ul onClick={goTop}>
            <li onClick={closeNavbar}>
              <a className={window.location.href === BASE_URL ? styles.active : ''} href='/'>Home</a>
            </li>
            <li onClick={closeNavbar}>
              <a className={window.location.href === BASE_URL + 'about' ? styles.active : ''} href='/about'>About</a>
            </li>
            <li onClick={closeNavbar}>
              <a className={window.location.href === BASE_URL + 'gallery' ? styles.active : ''} href='/gallery'>Gallery</a>
            </li>
            <li onClick={closeNavbar}>
              <a className={window.location.href === BASE_URL + 'pricing' ? styles.active : ''} href='/pricing'>Pricing</a>
            </li>
            <li onClick={closeNavbar}>
              <a className={window.location.href === BASE_URL + 'classes' ? styles.active : ''} href='/classes'>Classes</a>
            </li>
            <li onClick={closeNavbar}>
              <a className={window.location.href === BASE_URL + 'contact' ? styles.active : ''} href='/contact'>Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}
export default Navbar
