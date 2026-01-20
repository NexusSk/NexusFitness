export default function About() {
  const timeline = [
    {
      year: '2018',
      title: 'The Beginning',
      content: 'Nexus Fitness was born from a simple belief: everyone deserves access to world-class fitness facilities that inspire transformation. Founded by a group of fitness enthusiasts and entrepreneurs, we set out to create something different - a gym that wasn\'t just about equipment, but about building a community of motivated individuals.',
      icon: 'seed'
    },
    {
      year: '2019',
      title: 'Our First Location',
      content: 'We opened Nexus Fitness Center in the heart of Bratislava. With over 3,500 square meters of premium space, we invested in the latest equipment, luxurious amenities, and created an environment where members could push their limits. The response was overwhelming - within months, we had thousands of members who shared our passion for fitness.',
      icon: 'gym'
    },
    {
      year: '2022',
      title: 'Expanding Our Reach',
      content: 'As our community grew, we recognized the need for a more accessible option. We opened Nexus Fitness Express - a compact yet fully-equipped facility designed for those who want premium fitness without the premium footprint. This expansion allowed us to serve even more members while maintaining our commitment to excellence.',
      icon: 'rocket'
    },
    {
      year: 'Today',
      title: 'Our Mission Today',
      content: 'Nexus Fitness stands as Bratislava\'s premier fitness destination. We\'re not just a gym - we\'re a movement dedicated to helping people transform their lives through fitness. Whether you\'re a beginner taking your first steps or an athlete training for competition, we provide the tools, support, and environment you need to succeed.',
      icon: 'star'
    }
  ]

  return (
    <section id="about" className="py-24 text-white relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-on-scroll">
          <div className="inline-block mb-4 animate-scale-in">
            <span className="bg-primary-600/20 border border-primary-500/30 text-primary-400 px-4 py-2 rounded-full text-sm font-semibold hover:bg-primary-600/30 transition-all duration-300 transform hover:scale-105">
              OUR JOURNEY
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-light mb-6 animate-on-scroll">
            Our
            <span className="block font-normal bg-gradient-to-r from-primary-400 to-primary-300 bg-clip-text text-transparent"> Story</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light animate-on-scroll">
            From a vision to a reality - building a fitness community in Bratislava
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto space-y-12">
          {timeline.map((item, index) => (
            <div key={index} className="relative group animate-on-scroll" style={{ animationDelay: `${index * 0.15}s` }}>
              {/* Timeline line */}
              {index < timeline.length - 1 && (
                <div className="absolute left-8 top-16 w-0.5 h-full bg-gradient-to-b from-primary-500/50 to-transparent"></div>
              )}
              
              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-all duration-300 group-hover:shadow-primary-500/50">
                    {item.icon === 'seed' && (
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                      </svg>
                    )}
                    {item.icon === 'gym' && (
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    )}
                    {item.icon === 'rocket' && (
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    )}
                    {item.icon === 'star' && (
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    )}
                  </div>
                </div>
                <div className="flex-1 bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-primary-500/50 transition-all duration-500 group-hover:bg-slate-800 transform hover:scale-[1.02] hover:shadow-xl hover:shadow-primary-500/10">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-2xl font-light text-primary-400 group-hover:text-primary-300 transition-colors duration-300">{item.year}</span>
                    <h3 className="text-3xl font-light text-white group-hover:text-primary-300 transition-colors duration-300">{item.title}</h3>
                  </div>
                  <p className="text-lg text-gray-300 leading-relaxed font-light group-hover:text-gray-200 transition-colors duration-300">
                    {item.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Call to action */}
        <div className="mt-20 text-center animate-on-scroll">
          <div className="relative bg-slate-800/50 border border-slate-700 rounded-3xl p-12 max-w-4xl mx-auto shadow-2xl overflow-hidden hover:border-primary-500/50 transition-all duration-500 hover:shadow-primary-500/10 transform hover:scale-[1.02]">
            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-light mb-4 text-white">Ready to Start Your Journey?</h3>
              <p className="text-xl mb-8 text-gray-400 max-w-2xl mx-auto font-light">
                Join thousands of members who have transformed their lives at Nexus Fitness
              </p>
              <button
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="group bg-primary-600 text-white px-10 py-5 rounded-xl text-lg font-medium hover:bg-primary-500 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto border border-primary-500 hover:shadow-lg hover:shadow-primary-500/30"
              >
                View Our Plans
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

