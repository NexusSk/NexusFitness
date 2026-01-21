import { useState, useEffect } from 'react'
import UserProfile from './UserProfile'

export default function Navigation({ onLoginClick, user, onLogout }) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80 // Account for fixed navbar
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md shadow-xl border-b border-slate-800' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 group-hover:bg-primary-500">
              <span className="text-white font-bold text-xl">N</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-light text-white group-hover:text-primary-300 transition-colors duration-300">
              Nexus Fitness
            </h1>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('map')}
              className="px-4 py-2 rounded-lg font-light text-gray-300 hover:text-white transition-all duration-300 hover:bg-slate-800/50 transform hover:scale-105"
            >
              Locations
            </button>
            <button 
              onClick={() => scrollToSection('gym-info')}
              className="px-4 py-2 rounded-lg font-light text-gray-300 hover:text-white transition-all duration-300 hover:bg-slate-800/50 transform hover:scale-105"
            >
              Our Gyms
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="px-4 py-2 rounded-lg font-light text-gray-300 hover:text-white transition-all duration-300 hover:bg-slate-800/50 transform hover:scale-105"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="px-4 py-2 rounded-lg font-light text-gray-300 hover:text-white transition-all duration-300 hover:bg-slate-800/50 transform hover:scale-105"
            >
              Our Story
            </button>
            {user ? (
              <UserProfile user={user} onLogout={onLogout} />
            ) : (
              <button
                onClick={onLoginClick}
                className="bg-primary-600 text-white px-6 py-2.5 rounded-lg hover:bg-primary-500 transition-all duration-300 font-medium transform hover:scale-105 hover:shadow-lg hover:shadow-primary-500/30"
              >
                Sign In
              </button>
            )}
          </div>
          {user ? (
            <div className="md:hidden">
              <UserProfile user={user} onLogout={onLogout} />
            </div>
          ) : (
            <button
              onClick={onLoginClick}
              className="md:hidden bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-500 transition-all duration-300 text-sm font-medium transform hover:scale-105"
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </nav>
  )
}

