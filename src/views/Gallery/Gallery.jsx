import React, { useState } from 'react'
import styles from './Gallery.module.css'
import imgGym from '../../images/teamGym.jpg'
import imgGym2 from '../../images/Home/gymPrincipal.webp'
import imgGym3 from '../../images/gym9.jpg'
import imgGym4 from '../../images/Home/Cycling.webp'
import imgGym5 from '../../images/gym13.jpeg'
import imgGym6 from '../../images/gym14.jpeg'
import imgGym7 from '../../images/gym7.jpg'
import imgGym8 from '../../images/gym8.jpg'
import imgGym9 from '../../images/Home/Karate.jpg'
import imgGym10 from '../../images/gym10.jpg'

export const Gallery = () => {
  const images = [
    {
      id: 1,
      image: imgGym
    },
    {
      id: 2,
      image: imgGym2
    },
    {
      id: 3,
      image: imgGym3
    },
    {
      id: 4,
      image: imgGym4
    },
    {
      id: 5,
      image: imgGym5
    },
    {
      id: 6,
      image: imgGym6
    },
    {
      id: 7,
      image: imgGym7
    },
    {
      id: 8,
      image: imgGym8
    },
    {
      id: 9,
      image: imgGym9
    },
    {
      id: 10,
      image: imgGym10
    }
  ]

  const [showImage, setShowImage] = useState(images)
  const [selectedImage, setSelectedImage] = useState(null)

  const handleImageClick = (image) => {
    setSelectedImage(image)
  }

  const handleCloseImage = () => {
    setSelectedImage(null)
  }

  const handleNextImage = () => {
    const findImage = images.findIndex(el => el.id === selectedImage.id)
    findImage < 9
      ? setSelectedImage(images[findImage + 1])
      : setSelectedImage(images[0])
  }

  const handlePrevImage = () => {
    const findImage = images.findIndex(el => el.id === selectedImage.id)
    findImage > 2
      ? setSelectedImage(images[findImage - 1])
      : setSelectedImage(images[images.length - 1])
  }

  return (
    <div className={styles.main}>
      <h1>GALLERY</h1>
      <section>
        {showImage && showImage.map(el => {
          return (
            <img
              title='Click to see larger image'
              key={el.id}
              src={el.image}
              alt='Gallery'
              onClick={() => handleImageClick(el)}
              className={selectedImage?.id === el.id ? styles.selected : ''}
            />
          )
        })}
      </section>

      {selectedImage && (
        <div className={styles.fullscreen}>
          <img
            src={selectedImage.image}
            alt='Selected Image'
            className={styles.fullscreenImage}
          />

          <i title='prev image' className={`${styles.prev} bx bxs-left-arrow`} onClick={handlePrevImage} />
          <i title='next image' className={`${styles.next} bx bxs-right-arrow`} onClick={handleNextImage} />
          <i title='close image' className={`${styles.close} bx bx-window-close`} onClick={handleCloseImage} />
        </div>
      )}
    </div>
  )
}
