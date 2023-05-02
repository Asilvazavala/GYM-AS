import React from 'react'
import styles from './Contact.module.css'

export const Contact = () => {
  return (
    <div className={styles.main}>

      <div className={styles.leftContainer}>
        <h2>We are here for help you! To Shape Your Body.</h2>
        <p>At Gym AS, we are dedicated to helping you achieve the body of your dreams. Our expert trainers and nutritionists will work with you to create a personalized fitness and nutrition plan that helps you reach your specific goals.</p>
        <div className={styles.containerInfo}>
          <div className={styles.infoTop}>
            <h3>Guanajuato, MEX</h3>
            <p>85 Juarez Street, <br />Center, E1 8LG, MEX</p>
          </div>
          <div className={styles.infoTop}>
            <h3>Opening Hours</h3>
            <p>Mon to Fri: 7:00 am — 21:00 pm <br />Saturday: 7:00 am — 19:00 pm</p>
          </div>
          <div className={styles.infoBottom}>
            <h3>Information</h3>
            <p>+800-123-4567 <br />gymas@gmail.com</p>
          </div>
          <div className={styles.icons}>
            <h3>Follow Us On</h3>
            <a target='_blank' rel='noopener noreferrer' href='https://antonio-silva-portfolio.onrender.com'><i className='bx bx-desktop' /></a>
            <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/antonio-silva-developer/'><i className='bx bxl-linkedin' /></a>
            <a target='_blank' rel='noopener noreferrer' href='https://github.com/Asilvazavala'><i className='bx bxl-github' /></a>
          </div>
        </div>
      </div>

      <div className={styles.rightContainer}>
        <form action='https://formsubmit.co/asilvazavala@gmail.com' method='POST'>
          <h3>Leave Us Your Info</h3>
          <input type='text' name='name' id='name' placeholder='Antonio silva...' />
          <input type='email' name='email' id='email' placeholder='youremail@email.com...' />
          <textarea name='message' id='message' placeholder='Your appreciate comment...' />
          <div>
            <button>SUBMIT NOW</button>
          </div>
          <input type='hidden' name='_next' value='https://gym-as.vercel.app/contact' />
          <input type='hidden' name='_captcha' value='false' />
        </form>
      </div>

    </div>
  )
}
