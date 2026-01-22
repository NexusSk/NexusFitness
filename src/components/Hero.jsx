import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

export default function Hero({ onGetStarted }) {
  const { language } = useLanguage()
  const t = translations[language]
  
  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Premium badge with enhanced animation */}
          <div className="inline-flex items-center gap-3 mb-16 animate-fade-in-up">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-primary-500 to-primary-400 animate-slide-in-left"></div>
            <span className="text-sm font-semibold text-primary-400 uppercase tracking-[0.2em] px-4 py-2 border border-primary-500/30 rounded-full bg-primary-500/5 backdrop-blur-sm">
              {t.hero.premiumFitness}
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent via-primary-500 to-primary-400 animate-slide-in-right"></div>
          </div>

          {/* Massive, alluring heading with dramatic effects */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-extrabold mb-6 animate-fade-in-up leading-[0.9] tracking-tight" style={{ animationDelay: '0.1s' }}>
            <span className="block relative">
              <span className="relative z-10 bg-gradient-to-r from-white via-primary-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
                {t.hero.transform}
              </span>
              {/* Glow effect behind text */}
              <span className="absolute inset-0 bg-gradient-to-r from-primary-400 via-primary-300 to-primary-400 bg-clip-text text-transparent blur-xl opacity-60 animate-pulse"></span>
            </span>
            <span className="block relative mt-2 isolate">
              <span 
                className="relative z-10 font-black bg-clip-text text-transparent drop-shadow-2xl"
                style={{
                  backgroundImage: 'linear-gradient(90deg, rgb(96, 165, 250), rgb(125, 211, 252), rgb(59, 130, 246), rgb(125, 211, 252), rgb(96, 165, 250))',
                  backgroundSize: '200% 100%',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  animation: 'shimmer 3s linear infinite',
                  willChange: 'background-position'
                }}
              >
                {t.hero.yourBody}
              </span>
              {/* Single optimized glow layer - reduced opacity to prevent glitches */}
              <span className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-r from-primary-500/30 via-primary-400/40 to-primary-600/30 blur-2xl opacity-50" style={{ 
                animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                willChange: 'opacity'
              }}></span>
            </span>
          </h1>
          
          {/* Enhanced description with better typography */}
          <p className="text-xl md:text-2xl lg:text-3xl mb-16 text-gray-300 max-w-3xl mx-auto font-light leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <span className="bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent">
              {t.hero.description}
            </span>
          </p>
          
          {/* Enhanced CTA buttons with dramatic effects */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <button
              onClick={onGetStarted}
              className="group relative bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 text-white px-10 py-5 rounded-xl text-lg font-bold hover:from-primary-500 hover:via-primary-400 hover:to-primary-500 transition-all duration-500 border-2 border-primary-400/50 transform hover:scale-110 hover:shadow-2xl hover:shadow-primary-500/50 overflow-hidden"
            >
              {/* Animated background shine */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
              <span className="relative z-10 flex items-center">
                {t.hero.getStarted}
                <svg className="inline-block w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            <button
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative text-gray-300 hover:text-white px-10 py-5 rounded-xl text-lg font-semibold transition-all duration-500 border-2 border-gray-600 hover:border-primary-500/70 bg-gray-900/30 hover:bg-gray-900/50 backdrop-blur-sm transform hover:scale-110 hover:shadow-xl hover:shadow-primary-500/20"
            >
              <span className="relative z-10">{t.hero.viewPlans}</span>
            </button>
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

