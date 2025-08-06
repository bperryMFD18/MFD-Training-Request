'use client'

import { useState } from 'react'

export default function HomePage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate submission
    setTimeout(() => {
      setIsSubmitted(true)
      setIsSubmitting(false)
    }, 1000)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-green-600 mb-2">Success!</h2>
          <p className="text-gray-600">
            Your training request has been submitted successfully.
          </p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-md"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Training Request Form</h1>
          <p className="text-gray-600">Magnolia Fire Department</p>
          <p className="text-sm text-gray-500">18215 Buddy Riley Blvd. Magnolia, Texas 77354</p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-lg shadow-lg">
          <div className="p-8">
            <form onSubmit={handleSubmit}>
              {/* Personal Information */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Personal Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="ffid" className="block text-sm font-medium text-gray-700 mb-2">FFID *</label>
                    <input 
                      type="text" 
                      id="ffid" 
                      name="ffid" 
                      required 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                    />
                  </div>
                </div>
              </div>

              {/* Course Information */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Course Information</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="courseName" className="block text-sm font-medium text-gray-700 mb-2">Course/Class Name *</label>
                      <input 
                        type="text" 
                        id="courseName" 
                        name="courseName" 
                        required 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="agencyProvider" className="block text-sm font-medium text-gray-700 mb-2">Training Provider *</label>
                      <input 
                        type="text" 
                        id="agencyProvider" 
                        name="agencyProvider" 
                        required 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="datesAndTimes" className="block text-sm font-medium text-gray-700 mb-2">Course Dates & Times *</label>
                    <textarea 
                      id="datesAndTimes" 
                      name="datesAndTimes" 
                      rows={3} 
                      required 
                      placeholder="e.g., March 15-17, 2024, 8:00 AM - 5:00 PM daily"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">Why do you need this training? *</label>
                    <textarea 
                      id="description" 
                      name="description" 
                      rows={4} 
                      required 
                      placeholder="Describe how this training will benefit you and the department..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Training Request'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

