import React from 'react'
import styles from './CalculateBMI.module.css'
import imgGym from '../../images/gym15.jpg'
import { ToastContainer } from 'react-toastify'
import { useInputBMI } from '../../hooks/useInputBMI'

export const CalculateBMI = () => {
  const { input, handleChange, calculateBMI } = useInputBMI()

  return (
    <div className={styles.main}>
      <h1>CALCULATE YOUR BMI</h1>
      <div className={styles.BMIImg}>
        <div className={styles.containerBMI}>
          <h2>Easily determine your body mass index with our accurate calculation tool.</h2>

          <div className={styles.inputs}>
            <input type='number' placeholder='Your weight/kg...' name='weight' onChange={(e) => handleChange(e)} value={input.weight} />
            <input type='number' placeholder='Your height/cm...' name='height' onChange={(e) => handleChange(e)} value={input.height} />
          </div>

          <div className={styles.labels}>
            <label>Your BMI is: <span>{input.BMI}</span></label>
            <label>Your weight is: <span>{input.weightBMI}</span></label>
          </div>
          <button className={styles.buttonCalculate} onClick={() => calculateBMI()}>CALCULATE</button>
        </div>
        <ToastContainer />

        <div className={styles.containerImg}>
          <img loading='lazy' decoding='async' src={imgGym} alt='BMI img' />
        </div>

      </div>
    </div>
  )
}
