import { useState } from 'react'
import AdminDashboard from '../components/AdminDashboard/AdminDashboard'
import AdminHeader from '../components/AdminHeader'
import AdminMenu from '../components/AdminMenu'

const HomeAdmin = () => {
  const [category, setCategory] = useState(1)
  const [filtros, setFiltros] = useState({
    categoria: '',
    busqueda: '',
    active: false
  })

  return (
    <div>
      <AdminHeader />
      <div className="flex">
        <AdminMenu category={category} setCategory={setCategory} />
        <AdminDashboard
          category={category}
          setFiltros={setFiltros}
          filtros={filtros}
        />
      </div>
    </div>
  )
}

export default HomeAdmin
