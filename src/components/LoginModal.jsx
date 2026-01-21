import { useState, useEffect } from 'react'

export default function LoginModal({ isOpen, onClose, isSignUp, setIsSignUp, onSignUpSuccess, onLoginSuccess, onError }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    selectedGym: '1',
    selectedPlan: 'monthly'
  })

  // Reset to Sign In when modal opens
  useEffect(() => {
    if (isOpen) {
      setIsSignUp(false)
    }
  }, [isOpen, setIsSignUp])

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (isSignUp) {
      // Validate password match
      if (formData.password !== formData.confirmPassword) {
        if (onError) {
          onError('Passwords do not match. Please try again.')
        }
        return
      }

      // Validate password length
      if (formData.password.length < 6) {
        if (onError) {
          onError('Password must be at least 6 characters long.')
        }
        return
      }

      // Create user object with subscription
      const userData = {
        name: formData.name,
        email: formData.email,
        subscription: {
          plan: formData.selectedPlan,
          gym: formData.selectedGym
        }
      }

      // Call success callback
      if (onSignUpSuccess) {
        onSignUpSuccess(userData)
      }
      
      // Reset form
      setFormData({
        email: '',
        password: '',
        confirmPassword: '',
        name: '',
        selectedGym: '1',
        selectedPlan: 'monthly'
      })
      
      onClose()
    } else {
      // Login logic - check if user exists in localStorage
      const savedUser = localStorage.getItem('nexusFitnessUser')
      if (savedUser) {
        const userData = JSON.parse(savedUser)
        // Simple email check (in real app, this would be server-side with password verification)
        if (userData.email === formData.email) {
          if (onLoginSuccess) {
            onLoginSuccess(userData)
          }
          // Reset form
          setFormData({
            email: '',
            password: '',
            confirmPassword: '',
            name: '',
            selectedGym: '1',
            selectedPlan: 'monthly'
          })
          onClose()
        } else {
          if (onError) {
            onError('Invalid email or password. Please try again.')
          }
        }
      } else {
        if (onError) {
          onError('No account found. Please sign up first.')
        }
      }
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="bg-slate-800 border border-slate-700 rounded-3xl shadow-2xl max-w-md w-full p-10 animate-slide-up relative overflow-hidden">
        {/* Decorative gradient background */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-primary-600"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors z-10 bg-slate-700/50 backdrop-blur-sm rounded-full p-2 hover:bg-slate-700"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="relative z-10 text-center mb-8">
          <div className="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h2 className="text-3xl font-light text-white mb-2">
            {isSignUp ? 'Create Your Account' : 'Welcome Back'}
          </h2>
          <p className="text-gray-400 font-light">
            {isSignUp ? 'Start your fitness journey today' : 'Sign in to continue'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="relative z-10 space-y-5" style={{ pointerEvents: 'auto' }}>
          {isSignUp && (
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required={isSignUp}
                autoComplete="name"
                className="w-full px-4 py-3 border border-slate-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all bg-slate-900 text-white placeholder-gray-500 focus:outline-none"
                placeholder="John Doe"
                style={{ pointerEvents: 'auto', zIndex: 10 }}
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="email"
              className="w-full px-4 py-3 border border-slate-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all bg-slate-900 text-white placeholder-gray-500 focus:outline-none"
              placeholder="your@email.com"
              style={{ pointerEvents: 'auto', zIndex: 10 }}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              autoComplete="current-password"
              className="w-full px-4 py-3 border border-slate-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all bg-slate-900 text-white placeholder-gray-500 focus:outline-none"
              placeholder="••••••••"
              style={{ pointerEvents: 'auto', zIndex: 10 }}
            />
          </div>

          {isSignUp && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required={isSignUp}
                  autoComplete="new-password"
                  className="w-full px-4 py-3 border border-slate-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all bg-slate-900 text-white placeholder-gray-500 focus:outline-none"
                  placeholder="••••••••"
                  style={{ pointerEvents: 'auto', zIndex: 10 }}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Select Gym
                </label>
                <select
                  name="selectedGym"
                  value={formData.selectedGym}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all bg-slate-900 text-white"
                >
                  <option value="1">Nexus Fitness Center (Large)</option>
                  <option value="2">Nexus Fitness Express (Medium)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Select Plan
                </label>
                <select
                  name="selectedPlan"
                  value={formData.selectedPlan}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all bg-slate-900 text-white"
                >
                  <option value="monthly">Monthly</option>
                  <option value="yearly">Yearly</option>
                  <option value="onetime">One-Time Entry</option>
                </select>
              </div>
            </>
          )}

          <button
            type="submit"
            className="w-full bg-primary-600 text-white py-4 rounded-xl font-medium hover:bg-primary-500 transition-all transform hover:scale-105 mt-6"
          >
            {isSignUp ? 'Create Account & Subscribe' : 'Sign In'}
          </button>
        </form>

        <div className="relative z-10 mt-8 text-center">
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-primary-400 hover:text-primary-300 font-medium transition-colors"
          >
            {isSignUp ? 'Already have an account? Sign in' : "Don't have an account? Sign up"}
          </button>
        </div>
      </div>
    </div>
  )
}

