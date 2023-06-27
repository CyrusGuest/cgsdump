import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const ProtectedRoute = ({ children }) => {
  let { User } = useContext(AppContext)

  if (!User) {
    return <Navigate to="/" replace />
  }

  return children
}

export default ProtectedRoute