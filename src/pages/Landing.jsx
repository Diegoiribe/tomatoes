import Footer from '../components/Landing/Footer'
import Header from '../components/Landing/Header'
import Banner from '../components/Landing/Banner'
import Eslogan from '../components/Landing/Eslogan'
import Product from '../components/Landing/Product'
import Clients from '../components/Landing/Clients'
import Section from '../components/Landing/Section'
import { useState, useEffect } from 'react'

const Home = () => {
  const [headerColor, setHeaderColor] = useState('')
  const [headerFont, setHeaderFont] = useState('')

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setHeaderColor('white')
        setHeaderFont('text-black')
      } else {
        setHeaderColor('white')
        setHeaderFont('text-black')
      }
    }

    handleResize() // Ejecutar en el primer render
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="w-full overflow-hidden">
      <Header color={headerColor} fontColor={headerFont} />
      <div className='sm:flex sm:flex-col sm:h-screen sm:justify-center md:h-auto'>
        <Eslogan />
        <Product />
      </div>
      <Clients />
      <Banner />
      <Section />
      <Footer />
    </div>
  )
}

export default Home
