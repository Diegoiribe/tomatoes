import { useState } from 'react'
import AdminDashboard from '../components/AdminDashboard/AdminDashboard'
import AdminHeader from '../components/AdminHeader'
import AdminMenu from '../components/AdminMenu'

const HomeAdmin = () => {
  const [category, setCategory] = useState(1)

  return (
    <div>
      <AdminHeader />
      <div className="flex">
        <AdminMenu category={category} setCategory={setCategory} />
        <AdminDashboard category={category} />
      </div>
    </div>
  )
}

export default HomeAdmin
