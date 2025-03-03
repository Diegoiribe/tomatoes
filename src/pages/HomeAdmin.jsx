import AdminDashboard from '../components/AdminDashboard/AdminDashboard'
import AdminHeader from '../components/AdminHeader'
import AdminMenu from '../components/AdminMenu'

const HomeAdmin = () => {
  return (
    <div>
      <AdminHeader />
      <div className="flex">
        <AdminMenu />
        <AdminDashboard />
      </div>
    </div>
  )
}

export default HomeAdmin
