import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import GymMap from './components/GymMap'
import GymInfo from './components/GymInfo'
import Pricing from './components/Pricing'
import About from './components/About'
import LoginModal from './components/LoginModal'

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isSignUp, setIsSignUp] = useState(false)

  useEffect(() => {
    // Smooth scroll animation observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    // Observe all elements with animate-on-scroll class
    const elements = document.querySelectorAll('.animate-on-scroll')
    elements.forEach(el => observer.observe(el))

    return () => {
      elements.forEach(el => observer.unobserve(el))
    }
  }, [])

  return (
    <div className="min-h-screen scroll-smooth bg-slate-900 relative overflow-x-hidden">
      {/* Uniform dark blue background with brighter spots */}
      <div className="fixed inset-0 z-0">
        {/* Base dark blue background */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-900"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.03)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        {/* Brighter glowing spots */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-glow-slow"></div>
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-primary-400/15 rounded-full blur-3xl animate-drift"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-primary-600/25 rounded-full blur-3xl animate-drift-reverse"></div>
        <div className="absolute top-3/4 right-1/3 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-glow"></div>
        <div className="absolute top-1/3 left-1/2 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl animate-drift"></div>
        
        {/* Additional accent spots */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-3xl animate-drift-reverse"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-600/15 rounded-full blur-3xl animate-drift"></div>
      </div>
      
      <div className="relative z-10">
        <Navigation onLoginClick={() => setIsLoginOpen(true)} />
        <Hero onGetStarted={() => setIsLoginOpen(true)} />
        <GymMap />
        <GymInfo />
        <Pricing onSubscribe={() => setIsLoginOpen(true)} />
        <About />
        <LoginModal 
          isOpen={isLoginOpen} 
          onClose={() => setIsLoginOpen(false)}
          isSignUp={isSignUp}
          setIsSignUp={setIsSignUp}
        />
      </div>
    </div>
  )
}

export default App

