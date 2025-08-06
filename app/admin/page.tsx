'use client'

import { useState } from 'react'

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState('admin')
  const [password, setPassword] = useState('mfd2024')

  const login = () => {
    if (username === 'admin' && password === 'mfd2024') {
      setIsLoggedIn(true)
    } else {
      alert('Invalid credentials')
    }
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-md mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
            <p className="text-gray-600">Magnolia Fire Department</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Login</h2>
            
            <div className="mb-4 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-700 font-medium">Demo Credentials:</p>
              <p className="text-sm text-blue-600">Username: <strong>admin</strong></p>
              <p className="text-sm text-blue-600">Password: <strong>mfd2024</strong></p>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
              <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && login()}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
            <button 
              onClick={login}
              className="w-full bg-gray-900 hover:bg-gray-800 text-white py-2 px-4 rounded-md transition-colors"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Training Request Management</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-4">Dashboard Ready</h2>
            <p className="text-gray-600 mb-6">
              This is a basic admin dashboard. Once the app is deployed successfully, 
              we can add full functionality with database integration.
            </p>
            <button 
              onClick={() => setIsLoggedIn(false)}
              className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
