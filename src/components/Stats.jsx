import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

export default function Stats() {
  const { language } = useLanguage()
  const t = translations[language]
  
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced stats with dramatic presentation - only visible on scroll */}
        <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto animate-on-scroll">
          <div className="text-center transform hover:scale-125 transition-all duration-500 group cursor-default">
            <div className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-b from-white to-primary-300 bg-clip-text text-transparent mb-2 group-hover:from-primary-400 group-hover:to-primary-200 transition-all duration-500">
              10K+
            </div>
            <div className="text-xs md:text-sm text-gray-400 uppercase tracking-widest font-semibold group-hover:text-primary-400 transition-colors duration-300">
              {t.hero.members}
            </div>
          </div>
          <div className="text-center transform hover:scale-125 transition-all duration-500 group cursor-default">
            <div className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-b from-white to-primary-300 bg-clip-text text-transparent mb-2 group-hover:from-primary-400 group-hover:to-primary-200 transition-all duration-500">
              2
            </div>
            <div className="text-xs md:text-sm text-gray-400 uppercase tracking-widest font-semibold group-hover:text-primary-400 transition-colors duration-300">
              {t.hero.locations}
            </div>
          </div>
          <div className="text-center transform hover:scale-125 transition-all duration-500 group cursor-default">
            <div className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-b from-white to-primary-300 bg-clip-text text-transparent mb-2 group-hover:from-primary-400 group-hover:to-primary-200 transition-all duration-500">
              24/7
            </div>
            <div className="text-xs md:text-sm text-gray-400 uppercase tracking-widest font-semibold group-hover:text-primary-400 transition-colors duration-300">
              {t.hero.access}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


