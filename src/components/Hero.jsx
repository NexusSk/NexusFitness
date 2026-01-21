import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

export default function Hero({ onGetStarted }) {
  const { language } = useLanguage()
  const t = translations[language]
  
  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Minimal badge with animation */}
          <div className="inline-flex items-center gap-2 mb-12 animate-fade-in-up">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary-500 animate-slide-in-left"></div>
            <span className="text-sm font-medium text-gray-400 uppercase tracking-wider">{t.hero.premiumFitness}</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary-500 animate-slide-in-right"></div>
          </div>

          {/* Minimal, modern heading with stagger animation */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-8 animate-fade-in-up leading-tight tracking-tight" style={{ animationDelay: '0.1s' }}>
            {t.hero.transform}
            <br />
            <span className="font-normal bg-gradient-to-r from-primary-400 to-primary-300 bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
              {t.hero.yourBody}
            </span>
          </h1>
          
          {/* Clean description with animation */}
          <p className="text-lg md:text-xl mb-12 text-gray-400 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {t.hero.description}
          </p>
          
          {/* Minimal CTA buttons with hover effects */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up mb-24" style={{ animationDelay: '0.3s' }}>
            <button
              onClick={onGetStarted}
              className="group relative bg-primary-600 text-white px-8 py-4 rounded-lg text-base font-medium hover:bg-primary-500 transition-all duration-300 border border-primary-500/50 transform hover:scale-105 hover:shadow-lg hover:shadow-primary-500/30"
            >
              {t.hero.getStarted}
              <svg className="inline-block w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <button
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-400 hover:text-white px-8 py-4 rounded-lg text-base font-medium transition-all duration-300 border border-gray-700 hover:border-primary-500/50 transform hover:scale-105"
            >
              {t.hero.viewPlans}
            </button>
          </div>

          {/* Minimal stats with counter animation */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12 border-t border-gray-800 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-center transform hover:scale-110 transition-transform duration-300">
              <div className="text-3xl md:text-4xl font-light text-white mb-1">10K+</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">{t.hero.members}</div>
            </div>
            <div className="text-center transform hover:scale-110 transition-transform duration-300">
              <div className="text-3xl md:text-4xl font-light text-white mb-1">2</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">{t.hero.locations}</div>
            </div>
            <div className="text-center transform hover:scale-110 transition-transform duration-300">
              <div className="text-3xl md:text-4xl font-light text-white mb-1">24/7</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">{t.hero.access}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Smooth scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <svg className="w-5 h-5 text-gray-600 hover:text-primary-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

