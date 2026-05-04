import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Auth from '../pages/Auth'
import Dashboard from '../pages/Dashboard'
import Courses from '../pages/Courses'
import CourseDetails from '../pages/CourseDetails'
import Profile from '../pages/Profile'
import AdminLogin from '../pages/admin/AdminLogin'
import AdminDashboard from '../pages/admin/AdminDashboard'

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