import React from 'react'
import styles from './About.module.css'
import imgGym from '../../images/teamGym.jpg'
import imgGym2 from '../../images/gym15.jpg'

export const About = () => {
  return (
    <div className={styles.main}>
      <h1>OUR HISTORY</h1>
      <div className={styles.containerAbout}>
        <div className={styles.containerImg}>
          <img src={imgGym} alt='Beginning' />
        </div>
        <div className={styles.containerText}>
          <h2>BEGINNING</h2>
          <h3>We started with great enthusiasm and commitment to offer the service you deserve, we want as much as you to see that result, that change you want is within your reach at GYM AS.</h3>
        </div>

        <div className={styles.containerText}>
          <h2>THROUGH YEARS</h2>
          <h3>Your opinion is very important to us, which is why we constantly renew ourselves for the better by listening to you and becoming a benchmark for transformations in your body.</h3>
        </div>
        <div className={styles.containerImg}>
          <img src={imgGym2} alt='Through years' />
        </div>
      </div>

    </div>
  )
}
