import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useState, useEffect } from 'react'

const Home = () => {

  const [headerColor, setHeaderColor] = useState("");
  const [headerFont, setHeaderFont] = useState("")

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setHeaderColor("white");
        setHeaderFont("text-black")
      } else {
        setHeaderColor("");
        setHeaderFont("text-white")
      }
    };

    handleResize(); // Ejecutar en el primer render
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Header color={headerColor} fontColor={headerFont} />
      <Banner />
      <Footer />
    </div>
  )
}

export default Home
