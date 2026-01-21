import { useState } from 'react'
import { useTranslation } from '../hooks/useTranslation'

export default function Pricing({ onSubscribe, onCheckout, user }) {
  const t = useTranslation()
  const [selectedGym, setSelectedGym] = useState(1) // 1 for Center, 2 for Express

  const pricingPlans = {
    1: { // Nexus Fitness Center (Large)
      name: t.pricing.nexusFitnessCenter,
      plans: [
        {
          type: t.pricing.monthly,
          typeKey: 'monthly',
          price: 89,
          period: t.pricing.month,
          features: [
            'access247',
            'allEquipment',
            'saunaSteam',
            'freeParking',
            'lockerAccess',
            'noContract'
          ],
          popular: false
        },
        {
          type: t.pricing.yearly,
          typeKey: 'yearly',
          price: 799,
          period: t.pricing.year,
          originalPrice: 1068,
          savings: 269,
          features: [
            'access247',
            'allEquipment',
            'saunaSteam',
            'freeParking',
            'lockerAccess',
            'twoFreeSessions',
            'priorityBooking'
          ],
          popular: true
        },
        {
          type: t.pricing.oneTimeEntry,
          typeKey: 'onetime',
          price: 15,
          period: t.pricing.visit,
          features: [
            'singleDayAccess',
            'allEquipmentOnly',
            'lockerAccess',
            'validFor1Day'
          ],
          popular: false
        }
      ]
    },
    2: { // Nexus Fitness Express (Medium)
      name: t.pricing.nexusFitnessExpress,
      plans: [
        {
          type: t.pricing.monthly,
          typeKey: 'monthly',
          price: 59,
          period: t.pricing.month,
          features: [
            'access247',
            'allEquipment',
            'sauna',
            'freeParking',
            'lockerAccess',
            'noContract'
          ],
          popular: false
        },
        {
          type: t.pricing.yearly,
          typeKey: 'yearly',
          price: 549,
          period: t.pricing.year,
          originalPrice: 708,
          savings: 159,
          features: [
            'access247',
            'allEquipment',
            'sauna',
            'freeParking',
            'lockerAccess',
            'oneFreeSession'
          ],
          popular: true
        },
        {
          type: t.pricing.oneTimeEntry,
          typeKey: 'onetime',
          price: 10,
          period: t.pricing.visit,
          features: [
            'singleDayAccess',
            'allEquipmentOnly',
            'lockerAccess',
            'validFor1Day'
          ],
          popular: false
        }
      ]
    }
  }

  const currentPlans = pricingPlans[selectedGym]

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-block mb-4 animate-scale-in">
            <span className="bg-primary-600/20 border border-primary-500/30 text-primary-400 px-4 py-2 rounded-full text-sm font-semibold hover:bg-primary-600/30 transition-all duration-300 transform hover:scale-105">
              {t.pricing.flexiblePricing}
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-light text-white mb-6 animate-on-scroll">
            {t.pricing.chooseYour}
            <span className="block font-normal bg-gradient-to-r from-primary-400 to-primary-300 bg-clip-text text-transparent"> {t.pricing.perfectPlan}</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 font-light animate-on-scroll">
            {t.pricing.description}
          </p>

          {/* Enhanced Gym Selector */}
          <div className="inline-flex bg-slate-800/50 border border-slate-700 p-2 rounded-2xl mb-12 animate-on-scroll hover:border-primary-500/50 transition-all duration-300 relative">
            <button
              onClick={() => setSelectedGym(1)}
              className={`px-8 py-4 rounded-xl font-medium transition-all duration-300 transform relative ${
                selectedGym === 1
                  ? 'bg-primary-600 text-white scale-105 shadow-lg shadow-primary-500/30 z-10'
                  : 'text-gray-400 hover:text-white hover:bg-slate-700/50 z-0'
              }`}
            >
              {t.pricing.nexusFitnessCenter}
            </button>
            <button
              onClick={() => setSelectedGym(2)}
              className={`px-8 py-4 rounded-xl font-medium transition-all duration-300 transform relative ${
                selectedGym === 2
                  ? 'bg-primary-600 text-white scale-105 shadow-lg shadow-primary-500/30 z-10'
                  : 'text-gray-400 hover:text-white hover:bg-slate-700/50 z-0'
              }`}
            >
              {t.pricing.nexusFitnessExpress}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {currentPlans.plans.map((plan, index) => (
            <div
              key={index}
              className={`group relative bg-slate-800/50 rounded-3xl p-8 shadow-xl border transition-all duration-500 transform hover:scale-105 animate-on-scroll hover:shadow-2xl ${
                plan.popular
                  ? 'border-primary-500/50 scale-105 shadow-2xl ring-2 ring-primary-500/20'
                  : 'border-slate-700 hover:border-primary-500/50'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-accent-500 to-accent-600 text-white px-5 py-2 rounded-full text-xs font-bold shadow-lg animate-pulse flex items-center gap-1.5">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {t.pricing.mostPopular}
                  </span>
                </div>
              )}

              {/* Decorative gradient background */}
              {plan.popular && (
                <div className="absolute inset-0 bg-primary-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              )}

              <div className="relative z-10">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-light text-white mb-4">{plan.type}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-6xl font-light bg-gradient-to-r from-primary-400 to-primary-300 bg-clip-text text-transparent">€{plan.price}</span>
                    {plan.period && (
                      <span className="text-gray-500 ml-2 text-xl font-light">/{plan.period}</span>
                    )}
                  </div>
                  {plan.originalPrice && (
                    <div className="mt-3 flex items-center justify-center gap-2">
                      <span className="text-gray-500 line-through text-lg font-light">€{plan.originalPrice}</span>
                      <span className="bg-green-500/20 border border-green-500/30 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                        {t.pricing.save} €{plan.savings}!
                      </span>
                    </div>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((featureKey, i) => (
                    <li key={i} className="flex items-start gap-3 group/item">
                      <div className="mt-0.5 w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-300 font-light">{t.pricing.features[featureKey]}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => {
                    if (user) {
                      // User is signed in, go to checkout with plan details
                      onCheckout({
                        ...plan,
                        gym: selectedGym
                      })
                    } else {
                      // User not signed in, open login
                      onSubscribe()
                    }
                  }}
                  className={`w-full py-4 rounded-xl font-medium text-lg transition-all ${
                    !user 
                      ? 'bg-slate-700/50 text-gray-400 cursor-not-allowed'
                      : plan.popular
                      ? 'bg-primary-600 text-white hover:bg-primary-500 transform hover:scale-105'
                      : 'bg-slate-700 text-white hover:bg-slate-600 border border-slate-600 transform hover:scale-105'
                  }`}
                  disabled={!user}
                >
                  {user ? t.pricing.getStarted : t.pricing.signUpToSubscribe}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4 font-light">
            {t.pricing.allPlansInclude}
          </p>
          <p className="text-sm text-gray-500 font-light">
            {t.pricing.yearlyPlansNote}
          </p>
        </div>
      </div>
    </section>
  )
}

