import { useTranslation } from '../hooks/useTranslation'

export default function GymInfo() {
  const t = useTranslation()
  
  const gyms = [
    {
      id: 1,
      name: t.pricing.nexusFitnessCenter,
      size: '3,500 sqm',
      equipment: t.gymInfo.center.equipment,
      amenities: t.gymInfo.center.amenities,
      icon: 'dumbbell',
      color: 'from-primary-600 to-primary-800'
    },
    {
      id: 2,
      name: t.pricing.nexusFitnessExpress,
      size: '1,200 sqm',
      equipment: t.gymInfo.express.equipment,
      amenities: t.gymInfo.express.amenities,
      icon: 'fitness',
      color: 'from-primary-400 to-primary-600'
    }
  ]

  return (
    <section id="gym-info" className="py-24 relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-on-scroll">
          <div className="inline-block mb-4 animate-scale-in">
            <span className="bg-primary-600/20 border border-primary-500/30 text-primary-400 px-4 py-2 rounded-full text-sm font-semibold hover:bg-primary-600/30 transition-all duration-300 transform hover:scale-105">
              {t.gymInfo.premiumFacilities}
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-light text-white mb-6 animate-on-scroll">
            {t.gymInfo.worldClass}
            <span className="block font-normal bg-gradient-to-r from-primary-400 to-primary-300 bg-clip-text text-transparent"> {t.gymInfo.facilities}</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light animate-on-scroll">
            {t.gymInfo.description}
          </p>
        </div>

        <div className="space-y-20">
          {gyms.map((gym, index) => (
            <div 
              key={gym.id}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center animate-on-scroll`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex-1 w-full">
                <div className={`group relative bg-slate-800/50 border border-slate-700 rounded-3xl p-10 text-white shadow-2xl transform hover:scale-[1.02] transition-all duration-500 overflow-hidden hover:border-primary-500/50 hover:shadow-primary-500/10`}>
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
                  </div>
                  
                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-500/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-20 h-20 bg-primary-500/20 rounded-2xl flex items-center justify-center animate-float">
                        {gym.icon === 'dumbbell' ? (
                          <svg className="w-12 h-12 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        ) : (
                          <svg className="w-12 h-12 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        )}
                      </div>
                      <div className="bg-primary-500/20 border border-primary-500/30 rounded-full px-4 py-2">
                        <span className="text-sm font-medium text-primary-300">{gym.size}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-4xl font-light mb-3 text-white">{gym.name}</h3>
                    <p className="text-xl mb-8 text-gray-300 flex items-center gap-2 font-light">
                      <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                      </svg>
                      {t.gymInfo.size}: {gym.size}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                      <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-700">
                        <h4 className="text-2xl font-light mb-4 flex items-center gap-2 text-white">
                          <svg className="w-7 h-7 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                          </svg>
                          {t.gymInfo.equipment}
                        </h4>
                        <ul className="space-y-3">
                          {gym.equipment.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 group/item">
                              <div className="mt-1 w-5 h-5 rounded-full bg-primary-500 flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <span className="text-gray-300 font-light group-hover/item:text-white transition-colors">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-700">
                        <h4 className="text-2xl font-light mb-4 flex items-center gap-2 text-white">
                          <svg className="w-7 h-7 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                          </svg>
                          {t.gymInfo.amenities}
                        </h4>
                        <ul className="space-y-3">
                          {gym.amenities.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 group/item">
                              <div className="mt-1 w-5 h-5 rounded-full bg-primary-500 flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <span className="text-gray-300 font-light group-hover/item:text-white transition-colors">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

