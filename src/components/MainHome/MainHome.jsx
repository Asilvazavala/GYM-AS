import React from 'react'
import styles from './MainHome.module.css'
import { NavLink } from 'react-router-dom'

export const MainHome = () => {
  return (
    <div>
      <section className={styles.home}>
        <div className={styles.homeContent}>
          <h1>TRAIN DIFFERENT</h1>
          <h3>BODY FIT & PERFECT</h3>
          <div className={styles.btnBox}>
            <NavLink to='/classes'>
              <span href='/classes'>OUR CLASSES</span>
            </NavLink>
          </div>
        </div>

        <div className={styles.homeSci}>
          <a target='_blank' rel='noopener noreferrer' href='https://as-work.vercel.app/'><i className='bx bx-desktop' /></a>
          <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/antonio-silva-developer/'><i className='bx bxl-linkedin' /></a>
          <a target='_blank' rel='noopener noreferrer' href='https://github.com/Asilvazavala'><i className='bx bxl-github' /></a>
        </div>
      </section>
    </div>
  )
}
