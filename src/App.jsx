import { Route, Routes, useLocation } from 'react-router-dom'
import './App.module.css'
import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Error404 } from './components/Error404/Error404'
import { Home } from './views/Home/Home'
import { About } from './views/About/About'
import { Classes } from './views/Classes/Classes'
import { Gallery } from './views/Gallery/Gallery'
import { Pricing } from './views/Pricing/Pricing'
import { Contact } from './views/Contact/Contact'
import { Footer } from './components/Footer/Footer'

function App () {
  const [showNavbar, setShowNavbar] = useState(true)
  const location = useLocation()

  // Ocultar Navbar en una ruta específica
  const hideNavbarRoutes = ['/login', '/register']

  // Verificar si la ruta actual está en la lista de rutas para ocultar Navbar
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname)

  // Mostrar u ocultar Navbar según la ruta actual
  const handleNavbarVisibility = () => {
    setShowNavbar(!shouldHideNavbar)
  }

  return (
    <div onClick={handleNavbarVisibility}>
      {showNavbar && <Navbar />}
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/classes' element={<Classes />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
      {showNavbar && <Footer />}
    </div>
  )
}

export default App
