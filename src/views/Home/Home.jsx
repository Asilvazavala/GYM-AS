import React from 'react'
import { MainHome } from '../../components/MainHome/MainHome'
import { CardsAdvantage } from '../../components/CardsAdvantage/CardsAdvantage'
import { Activities } from '../../components/Activities/Activities'
import { CalculateBMI } from '../../components/CalculateBMI/CalculateBMI'
import { Testimonials } from '../../components/Testimonials/Testimonials'
import { Prices } from '../../components/Prices/Prices'
import { NeedTrainer } from '../../components/NeedTrainer/NeedTrainer'
import { Whatsapp } from '../../components/Whatsapp/Whatsapp'

export const Home = () => {
  return (
    <div>
      <MainHome />
      <CardsAdvantage />
      <Activities />
      <CalculateBMI />
      <Testimonials />
      <Prices />
      <NeedTrainer />
      <Whatsapp />
    </div>
  )
}
