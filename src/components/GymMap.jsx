import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Custom marker icons
const gymIcon = new Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
})

const gyms = [
  {
    id: 1,
    name: 'Nexus Fitness Center',
    address: 'Hlavná 15, Bratislava',
    position: [48.1450, 17.1070], // Bratislava city center
    size: 'Large',
    description: 'Our flagship location with premium amenities'
  },
  {
    id: 2,
    name: 'Nexus Fitness Express',
    address: 'Námestie SNP 10, Bratislava',
    position: [48.1480, 17.1120], // Another location in Bratislava
    size: 'Medium',
    description: 'Convenient location in the heart of the city'
  }
]

export default function GymMap() {
  return (
    <section id="map" className="py-24 relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-block mb-4 animate-scale-in">
            <span className="bg-primary-600/20 border border-primary-500/30 text-primary-400 px-4 py-2 rounded-full text-sm font-semibold hover:bg-primary-600/30 transition-all duration-300 transform hover:scale-105">
              OUR LOCATIONS
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-light text-white mb-6 animate-on-scroll">
            Find Us in
            <span className="block font-normal bg-gradient-to-r from-primary-400 to-primary-300 bg-clip-text text-transparent"> Bratislava</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light animate-on-scroll">
            Two convenient locations to serve you better. Choose the one that fits your lifestyle.
          </p>
        </div>

        <div className="bg-slate-800/50 rounded-3xl overflow-hidden shadow-2xl border border-slate-700 mb-12 transform hover:scale-[1.01] transition-all duration-500 animate-on-scroll hover:border-primary-500/50 hover:shadow-primary-500/10">
          <div style={{ height: '550px', width: '100%' }}>
            <MapContainer
              center={[48.1465, 17.1095]}
              zoom={13}
              style={{ height: '100%', width: '100%' }}
              scrollWheelZoom={true}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {gyms.map((gym) => (
                <Marker key={gym.id} position={gym.position} icon={gymIcon}>
                  <Popup>
                    <div className="p-3">
                      <h3 className="font-bold text-lg text-primary-600 mb-1">{gym.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{gym.address}</p>
                      <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                        gym.size === 'Large' 
                          ? 'bg-primary-600 text-white' 
                          : 'bg-primary-200 text-primary-800'
                      }`}>
                        {gym.size} Facility
                      </span>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {gyms.map((gym, index) => (
            <div key={gym.id} className="group relative bg-slate-800/50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-slate-700 hover:border-primary-500/50 animate-on-scroll hover:shadow-primary-500/10" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-3xl font-light text-white group-hover:text-primary-300 transition-colors duration-300">{gym.name}</h3>
                  <span className={`px-4 py-2 rounded-full text-sm font-medium transform group-hover:scale-110 transition-transform duration-300 ${
                    gym.size === 'Large' 
                      ? 'bg-primary-600 text-white' 
                      : 'bg-primary-500/80 text-white'
                  }`}>
                    {gym.size}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 mb-3 group-hover:text-gray-300 transition-colors duration-300">
                  <svg className="w-5 h-5 text-primary-500 group-hover:text-primary-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="font-light">{gym.address}</p>
                </div>
                <p className="text-gray-300 leading-relaxed font-light group-hover:text-gray-200 transition-colors duration-300">{gym.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

