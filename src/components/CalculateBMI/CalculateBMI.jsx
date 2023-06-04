import React, { useState } from 'react'
import styles from './CalculateBMI.module.css'
import imgGym from '../../images/gym15.jpg'
import { ToastContainer } from 'react-toastify'
import { useNotification } from '../../hooks/useNotification'

export const CalculateBMI = () => {
  const { notificationError } = useNotification()
  const [input, setInput] = useState({
    weight: '',
    height: '',
    BMI: '',
    weightBMI: ''
  })

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  const calculateBMI = () => {
    if (!input.height || !input.weight) {
      notificationError('Please complete Height/Weight')
    } else {
      // Calculate BMI
      let BMI = Number(input.height)
      BMI > 100 ?
        BMI = Number(input.weight / ((input.height / 100) * (input.height / 100))).toFixed(1)
        : BMI = Number(input.weight / (input.height * input.height)).toFixed(1)

      // Calculate Weight in base BMI
      let weightBMI = 'Normal'
      if (BMI > 30) {
        weightBMI = 'Overweight'
      } else if (BMI < 18.5) {
        weightBMI = 'Underweight'
      }

      // Update inputs
      setInput({ ...input, BMI, weightBMI })
    }
  }

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
          <ToastContainer />
          <button onClick={() => calculateBMI()}>CALCULATE</button>
        </div>

        <div className={styles.containerImg}>
          <img loading='lazy' decoding='async' src={imgGym} alt='BMI img' />
        </div>

      </div>
    </div>
  )
}
