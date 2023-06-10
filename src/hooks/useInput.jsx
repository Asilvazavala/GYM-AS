import { useState } from 'react'
import { useNotification } from './useNotification'

export const useInput = () => {
  const { notificationSuccess, notificationWarning } = useNotification()

  const [input, setInput] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  function handleNotification () {
    !input.name || !input.email || !input.message
      ? notificationWarning('Complete all fields please')
      : notificationSuccess('Message sent succesfully!')
  }

  return { input, handleChange, handleNotification }
}
