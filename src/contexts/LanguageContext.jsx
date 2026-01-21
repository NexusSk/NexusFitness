import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Default to Slovak, but check localStorage
    const saved = localStorage.getItem('nexusFitnessLanguage')
    return saved || 'sk'
  })

  useEffect(() => {
    localStorage.setItem('nexusFitnessLanguage', language)
  }, [language])

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'sk' ? 'en' : 'sk')
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

