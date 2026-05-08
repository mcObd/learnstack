import { Routes, Route } from 'react-router-dom'

import Home from '../Pages/Home'
import Auth from '../Pages/Auth'
import Dashboard from '../Pages/Dashboard'
import Courses from '../Pages/Courses'
import CourseDetails from '../Pages/CourseDetails'
import Profile from '../Pages/Profile'
import AdminLogin from '../Pages/admin/AdminLogin'
import AdminDashboard from '../Pages/admin/AdminDashboard'

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />

      {/* User - protected later */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/course/:id" element={<CourseDetails />} />
      <Route path="/profile" element={<Profile />} />

      {/* Admin */}
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
  )
}
