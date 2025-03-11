import Ingresos from './Components/Ingresos'
import Inventary from './Components/Inventary'
import Sales from './Components/Sales'
import PropTypes from 'prop-types'
import Web from './Components/Web'

const AdminDashboard = ({ category }) => {
  return (
    <div className="w-full h-screen pt-[80px]">
      {category === 1 && <Ingresos />}
      {category === 2 && <Sales />}
      {category === 3 && <Inventary />}
      {category === 4 && <Web />}
    </div>
  )
}

AdminDashboard.propTypes = {
  category: PropTypes.number.isRequired // Asegura que `color` es un string obligatorio
}

export default AdminDashboard
