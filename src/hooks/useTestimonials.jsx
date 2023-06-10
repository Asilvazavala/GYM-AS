import { useState } from 'react'
import imgGym from '../images/gym4.jpg'
import imgGym2 from '../images/gym2.jpg'
import imgGym3 from '../images/gym5.jpg'
import imgGym4 from '../images/gym7.jpg'

export const useTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      image: imgGym,
      name: 'Antonio Silva',
      description: '“Ive been a member of Gym AS for the past 6 months and it has been an amazing experience. The trainers are knowledgeable and supportive, the equipment is top-notch, and the community of members is friendly and encouraging.”'
    },
    {
      id: 2,
      image: imgGym2,
      name: 'Ana Watson',
      description: '“The nutritional instructors are the best, I have reached my ideal weight and I feel better than ever, thanks to all the staff, I have achieved all these important changes in my body in 1 year, I will continue working to improve.”'
    },
    {
      id: 3,
      image: imgGym3,
      name: 'John Doe',
      description: '“Ive been a member of Gym AS for the past 6 months and it has been an amazing experience. The trainers are knowledgeable and supportive, the equipment is top-notch, and the community of members is friendly and encouraging.”'
    },
    {
      id: 4,
      image: imgGym4,
      name: 'Steve Stone',
      description: '“The nutritional instructors are the best, I have reached my ideal weight and I feel better than ever, thanks to all the staff, I have achieved all these important changes in my body in 1 year, I will continue working to improve.”'
    }
  ]

  const [showTestimonials, setShowTestimonials] = useState(testimonials.slice(0, 2))

  const slideLeft = () => {
    const slide = showTestimonials.map(el => el.id)
    if (slide[0] !== 1) {
      setShowTestimonials(testimonials.slice(slide[0] - 3, slide[1] - 2))
    }
  }

  const slideRight = () => {
    const slide = showTestimonials.map(el => el.id)
    if (testimonials.length > slide[1]) {
      setShowTestimonials(testimonials.slice(slide[0] + 1, slide[1] + 2))
    }
  }

  return { showTestimonials, slideLeft, slideRight }
}
