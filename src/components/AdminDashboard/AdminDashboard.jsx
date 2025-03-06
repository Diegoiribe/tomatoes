import Ingresos from './Components/Ingresos'
import Inventary from './Components/Inventary'
import Sales from './Components/Sales'

const AdminDashboard = ({ category }) => {
  return (
    <div className="w-full mt-[80px]">
      {category === 1 && <Ingresos />}
      {category === 2 && <Sales />}
      {category === 3 && <Inventary />}
      {category === 4 && null}

    </div>
  )
}

export default AdminDashboard
