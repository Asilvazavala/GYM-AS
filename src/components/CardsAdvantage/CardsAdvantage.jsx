import React from 'react'
import styles from './CardsAdvantage.module.css'

export const CardsAdvantage = () => {
  return (
    <div className={styles.main}>
      <h1>WHY CHOOSE US?</h1>
      <div className={styles.cardsContainer}>

        <div className={styles.card}>
          <i className='bx bxs-check-square' />
          <h2>PROGRESSION</h2>
          <h3>Our team of experts will work with you to create a customized plan that helps you achieve success one step at a time.</h3>
        </div>

        <div className={styles.card2}>
          <i className='bx bxs-chart' />
          <h2>WORKOUT</h2>
          <h3>With a variety of workouts to choose from, you'll have everything you need to get into the best shape of your life.</h3>
        </div>

        <div className={styles.card3}>
          <i className='bx bx-food-menu' />
          <h2>NUTRITIONS</h2>
          <h3>Our team will work with you to create a personalized meal plan that helps you reach your specific health goals.</h3>
        </div>
      </div>
    </div>
  )
}
