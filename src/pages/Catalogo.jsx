import Header from '../components/Header'
import Options from '../components/Options'
import Eslogan from '../components/Eslogan'
import Productos from '../components/Productos'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const Catalogo = () => {
    return (
        <div>
            <Header color="white" />
            <NavBar />
            <Options />
            <Eslogan />
            <Productos />
            <Footer />
        </div>

    )
}

export default Catalogo