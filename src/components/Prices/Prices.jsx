import React from 'react'
import styles from './Prices.module.css'
import imgGym from '../../images/gym3.jpg'
import imgGym2 from '../../images/gym13.jpeg'
import imgGym3 from '../../images/gym1.jpg'
import { NavLink } from 'react-router-dom'
import { useNavBar } from '../../hooks/useNavBar'

export const Prices = () => {
  const { goTop } = useNavBar()

  return (
    <div>
      <section className={styles.containerPrices}>
        <h1>PRICES</h1>
        <div className={styles.cardsContainer}>

          <div className={styles.card}>
            <img src={imgGym} alt='imgGym' width='150px' height='150px' />
            <h2>BEGINNERS</h2>
            <h3>$<span>39</span>p/m</h3>
            <p className={styles.fitnessPlan}>Fitness plan</p>
            <p className={styles.cycling}>Cycling</p>
            <p className={styles.weightLossPlan}>Weight Loss Plan</p>
            <p className={styles.personalTrainer}>Personal Trainer</p>
            <p className={styles.extraActivity}>Extra activity free</p>
            <NavLink to='/contact'>
              <button onClick={goTop}>BUY NOW</button>
            </NavLink>
          </div>

          <div className={styles.card2}>
            <img src={imgGym2} alt='imgGym' width='150px' height='150px' />
            <h2>ADVANCED</h2>
            <h3>$<span>65</span>p/m</h3>
            <p className={styles.fitnessPlan}>Fitness plan</p>
            <p className={styles.cycling}>Cycling</p>
            <p className={styles.weightLossPlan}>Weight Loss Plan</p>
            <p className={styles.personalTrainer}>Personal Trainer</p>
            <p className={styles.extraActivity}>Extra activity free</p>
            <NavLink to='/contact'>
              <button onClick={goTop}>BUY NOW</button>
            </NavLink>
          </div>

          <div className={styles.card3}>
            <img src={imgGym3} alt='imgGym' width='150px' height='150px' />
            <h2>ROCKY BALBOA</h2>
            <h3>$<span>100</span>p/m</h3>
            <p className={styles.fitnessPlan}>Fitness plan</p>
            <p className={styles.cycling}>Cycling</p>
            <p className={styles.weightLossPlan}>Weight Loss Plan</p>
            <p className={styles.personalTrainer}>Personal Trainer</p>
            <p className={styles.extraActivity}>Extra activity free</p>
            <NavLink to='/contact'>
              <button onClick={goTop}>BUY NOW</button>
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  )
}
