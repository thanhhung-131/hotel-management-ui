import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation
} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import { AuthProvider, useAuth } from './context/AuthContext'
import { CartProvider } from './context/CartContext'
import Login from './components/common/Login'
import Register from './components/common/Register'
import RoomDetail from './pages/RoomDetail'
import CartPage from './pages/Cart'
import Footer from './components/common/Footer'
import List from './pages/List'

// ProtectedRoute để kiểm tra xem người dùng đã đăng nhập chưa
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, showPopupMessage } = useAuth()
  if (!isAuthenticated) {
    showPopupMessage('You need to log in to access this page')
    return <Navigate to='/login' replace />
  }
  return <>{children}</>
}

const AppContent = () => {
  const location = useLocation()

  return (
    <div className='min-h-screen'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/rooms' element={<List />} />
        <Route
          path='/room/:roomId' // Route cho trang chi tiết phòng
          element={<RoomDetail />}
        />
        <Route
          path='/cart'
          element={
            <ProtectedRoute>
              <CartPage />
            </ProtectedRoute>
          }
        />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      {location.pathname !== '/login' && location.pathname !== '/register' && (
        <Footer />
      )}
    </div>
  )
}

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <AppContent />
        </Router>
      </CartProvider>
    </AuthProvider>
  )
}

export default App
