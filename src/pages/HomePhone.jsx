import React, { useState, useEffect } from 'react'
import Header from '../components/PlantillaPhone/Header'
import Products from '../components/PlantillaPhone/Products'
import Banner from '../components/PlantillaPhone/Banner'
import Eslogan from '../components/PlantillaPhone/Eslogan'
import Section from '../components/PlantillaPhone/Section'

const HomePhone = () => {
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
        <div>
            <Header color={headerColor} fontColor={headerFont} />
            <Products />
            <Banner />
            <Eslogan />
            <Section />
        </div>
    )
}

export default HomePhone