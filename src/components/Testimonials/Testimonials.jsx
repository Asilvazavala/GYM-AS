import React from 'react'
import styles from './Testimonials.module.css'
import { useTestimonials } from '../../hooks/useTestimonials'

export const Testimonials = () => {
  const { showTestimonials, slideLeft, slideRight } = useTestimonials()

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
                    <img loading='lazy' decoding='async' src={el.image} alt='imgGym' />
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
