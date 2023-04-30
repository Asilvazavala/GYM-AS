import * as React from 'react'
import styles from './Navbar.module.css'
import LogoAS from '../../images/Icon/LogoAS.png'

function Navbar () {
  const BASE_URL = 'http://localhost:3002/'

  // Navbar cambia a fondo negro
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

  return (
    <div>
      <header id='navBar' className={styles.header}>
        <img src={LogoAS} alt='LogoAS' title='Antonio Silva' />
        <nav className={styles.navbar}>
          <a href='/' className={window.location.href === BASE_URL ? styles.active : ''}>Home</a>
          <a href='/about' className={window.location.href === BASE_URL + 'about' ? styles.active : ''}>About</a>
          <a href='/gallery' className={window.location.href === BASE_URL + 'gallery' ? styles.active : ''}>Gallery</a>
          <a href='/pricing' className={window.location.href === BASE_URL + 'pricing' ? styles.active : ''}>Pricing</a>
          <a href='/classes' className={window.location.href === BASE_URL + 'classes' ? styles.active : ''}>Classes</a>
          <a href='/contact' className={window.location.href === BASE_URL + 'contact' ? styles.active : ''}>Contact</a>
        </nav>
      </header>
    </div>
  )
}
export default Navbar
