import React, { useState } from 'react'
import styles from './Testimonials.module.css'
import imgGym from '../../images/gym4.jpg'
import imgGym2 from '../../images/gym2.jpg'
import imgGym3 from '../../images/gym5.jpg'
import imgGym4 from '../../images/gym7.jpg'
export const Testimonials = () => {
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

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>TESTIMONIALS</h1>
      <i title='scroll left' onClick={slideLeft} className={`${styles.prev} bx bxs-left-arrow`} />
      <i title='scroll right' onClick={slideRight} className={`${styles.next} bx bxs-right-arrow`} />

      <section id='slider'>
        <div className={styles.container}>
          {showTestimonials && showTestimonials.map(el => {
            return (
              <div key={el.id} className={styles.slideContainer}>
                <div className={styles.slide}>
                  <i className={`${styles.quotes} bx bxs-quote-right`} />
                  <div className={styles.user}>
                    <img src={el.image} alt='imgGym' />
                    <div className={styles.userInfo}>
                      <h3>{el.name}</h3>
                      <div className={styles.stars}>
                        <i className='bx bxs-star' />
                        <i className='bx bxs-star' />
                        <i className='bx bxs-star' />
                        <i className='bx bxs-star' />
                        <i className='bx bxs-star' />
                      </div>
                    </div>
                  </div>
                  <p className={styles.text}>{el.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
