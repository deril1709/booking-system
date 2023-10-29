import './App.css'
import { Routes, Route } from 'react-router-dom'
import IndexPage from './pages/IndexPage'
import LoginPage from './pages/LoginPage'
import Layout from './Layout'
import RegisterPage from './pages/RegisterPage'
import axios from 'axios'
import { UserContextProvider } from './UserContext'
import Lapangan from './pages/Lapangan'
import SingleField from './pages/SingleField'
import AccountPage from './pages/AccountPage'
import AdminDashboard from './admin/AdminDashboard'
import AdminFormlapangan from './admin/AdminFormlapangan'
import AdminBooking from './admin/AdminBooking'

axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/list" element={<Lapangan />} />
          <Route path="/field" element={<SingleField />} />
          <Route path="/account/:subpage?" element={<AccountPage />} />
          <Route path="/account/:subpage/:action" element={<AccountPage />} />
        </Route>
        <Route path='/admin' element={<AdminDashboard />} />
        <Route path="/admin/formlapangan" element={<AdminFormlapangan />} />
        <Route path="/admin/booking" element={<AdminBooking />} />
      </Routes>
    </UserContextProvider>
  )
}

export default App