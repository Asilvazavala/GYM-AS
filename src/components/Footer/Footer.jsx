import React from 'react'
import styles from './Footer.module.css'
import LogoAS from '../../images/Icon/LogoAS.png'
import { NavLink } from 'react-router-dom'
import { useNavBar } from '../../hooks/useNavBar'

export const Footer = () => {
  const { goTop } = useNavBar()

  return (
    <footer>
      <div className={styles.main}>

        <div className={styles.leftContainer}>
          <img src={LogoAS} alt='LogoAS' />
          <p>Hard work beats talent when talent doesn't want to work hard, choose how you want to treat your body, go to next level.</p>
          <div className={styles.homeSci}>
            <a target='_blank' rel='noopener noreferrer' href='https://as-work.vercel.app/'><i className='bx bx-desktop' /></a>
            <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/antonio-silva-developer/'><i className='bx bxl-linkedin' /></a>
            <a target='_blank' rel='noopener noreferrer' href='https://github.com/Asilvazavala'><i className='bx bxl-github' /></a>
          </div>
          <p>Privacy Policy | © 2023 Gym AS <br />Design by Antonio Silva  </p>
        </div>

        <div className={styles.centerContainer}>
          <h3>Our Classes</h3>
          <NavLink to='/classes' onClick={goTop} style={{ textDecoration: 'none' }}>
            <p>Fitness</p>
            <p>Aerobics</p>
            <p>Yoga</p>
            <p>Full-body Strength</p>
            <p>Learn Machines</p>
          </NavLink>
        </div>

        <div className={styles.rightContainer}>
          <h3>Work Hours</h3>
          <p className={styles.dayTitle}>Monday - Friday:</p>
          <p>7:00am - 21:00pm</p>
          <p className={styles.dayTitle}>Saturday:</p>
          <p>7:00am - 19:00pm</p>
          <p className={styles.dayTitle}>Sunday - Closed</p>
        </div>
      </div>
    </footer>
  )
}
