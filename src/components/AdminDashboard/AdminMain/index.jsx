import Banner from './Banner'
import Footer from './Footer'
import Header from './Header'
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
        setHeaderColor('')
        setHeaderFont('text-white')
      }
    }

    handleResize() // Ejecutar en el primer render
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="overflow-x-hidden ">
      <Header color={headerColor} fontColor={headerFont} />
      <div className="mr-5 ml-52">
        <Banner />
      </div>
      <div className="ml-52">
        {' '}
        <Footer bg={'#f1f1f1'} color={'black'} />
      </div>
    </div>
  )
}

export default Home
