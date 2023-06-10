import { useState } from 'react'
import { useNotification } from './useNotification'

export const useInputBMI = () => {
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
      let BMI = Number(input.height)
      BMI > 100
        ? BMI = Number(input.weight / ((input.height / 100) * (input.height / 100))).toFixed(1)
        : BMI = Number(input.weight / (input.height * input.height)).toFixed(1)

      let weightBMI = 'Normal'
      if (BMI > 30) {
        weightBMI = 'Overweight'
      } else if (BMI < 18.5) {
        weightBMI = 'Underweight'
      }

      setInput({ ...input, BMI, weightBMI })
    }
  }

  return { input, handleChange, calculateBMI }
}
