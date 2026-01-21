import { useState, useRef, useEffect } from 'react'

export default function UserProfile({ user, onLogout }) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  if (!user) return null

  const getPlanDisplayName = (plan) => {
    const planMap = {
      monthly: 'Monthly',
      yearly: 'Yearly',
      onetime: 'One-Time Entry'
    }
    return planMap[plan] || plan
  }

  const getGymDisplayName = (gymId) => {
    const gymMap = {
      '1': 'Nexus Fitness Center',
      '2': 'Nexus Fitness Express'
    }
    return gymMap[gymId] || 'Nexus Fitness'
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 px-4 py-2 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-primary-500/50 hover:bg-slate-800 transition-all duration-300 group"
      >
        <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white font-semibold group-hover:bg-primary-500 transition-colors">
          {user.name.charAt(0).toUpperCase()}
        </div>
        <div className="hidden md:block text-left">
          <div className="text-white font-medium text-sm">{user.name}</div>
          <div className="text-primary-400 text-xs font-light">
            {getPlanDisplayName(user.subscription?.plan)}
          </div>
        </div>
        <svg 
          className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-slate-800 border border-slate-700 rounded-xl shadow-2xl overflow-hidden z-50 animate-slide-down">
          <div className="p-4 border-b border-slate-700">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-semibold">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <div>
                <div className="text-white font-medium">{user.name}</div>
                <div className="text-gray-400 text-sm font-light">{user.email}</div>
              </div>
            </div>
          </div>
          
          <div className="p-4 border-b border-slate-700">
            <div className="text-xs text-gray-400 mb-2 font-light">SUBSCRIPTION</div>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-white font-medium">{getPlanDisplayName(user.subscription?.plan)}</div>
                <div className="text-gray-400 text-sm font-light">{getGymDisplayName(user.subscription?.gym)}</div>
              </div>
              <div className="px-3 py-1 bg-primary-600/20 border border-primary-500/30 rounded-lg">
                <span className="text-primary-400 text-xs font-medium">Active</span>
              </div>
            </div>
          </div>

          <div className="p-2">
            <button
              onClick={() => {
                onLogout()
                setIsOpen(false)
              }}
              className="w-full px-4 py-2 text-left text-gray-300 hover:text-white hover:bg-slate-700 rounded-lg transition-colors font-light"
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

