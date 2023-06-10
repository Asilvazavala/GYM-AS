import React from 'react'
import styles from './NeedTrainer.module.css'
import imgGym from '../../images/gym7.jpg'
import { NavLink } from 'react-router-dom'
import { useNavBar } from '../../hooks/useNavBar'

export const NeedTrainer = () => {
  const { goTop } = useNavBar()

  return (
    <div className={styles.main}>
      <h1>NEED A TRAINER?</h1>
      <div className={styles.containerNeedTrainer}>
        <div className={styles.containerImg}>
          <img loading='lazy' decoding='async' src={imgGym} alt='BMI img' />
        </div>
        <div className={styles.containerTextButton}>
          <h2>Easily find the right fitness coach for your needs</h2>
          <h3>Call: +123-456789</h3>
          <NavLink to='/contact'>
            <button onClick={goTop}>CONTACT NOW</button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}
