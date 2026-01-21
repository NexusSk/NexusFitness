import { useState } from 'react'

export default function CheckoutModal({ isOpen, onClose, user, selectedPlan, onSuccess }) {
  const [step, setStep] = useState(1) // 1: Details, 2: Payment, 3: Processing, 4: Success
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    // Payment details
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: ''
  })

  if (!isOpen || !selectedPlan) return null

  const handleChange = (e) => {
    const { name, value } = e.target
    
    // Format card number with spaces
    if (name === 'cardNumber') {
      const formatted = value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim()
      setFormData({ ...formData, [name]: formatted.slice(0, 19) })
      return
    }
    
    // Format expiry date - allow typing and auto-format
    if (name === 'expiryDate') {
      // Remove all non-digits
      const cleaned = value.replace(/\D/g, '')
      
      // Format as MM/YY
      if (cleaned.length === 0) {
        setFormData({ ...formData, [name]: '' })
      } else if (cleaned.length <= 2) {
        setFormData({ ...formData, [name]: cleaned })
      } else {
        setFormData({ ...formData, [name]: cleaned.slice(0, 2) + '/' + cleaned.slice(2, 4) })
      }
      return
    }
    
    // Limit CVV to 3-4 digits - only allow numbers
    if (name === 'cvv') {
      const cleaned = value.replace(/\D/g, '')
      setFormData({ ...formData, [name]: cleaned.slice(0, 4) })
      return
    }
    
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmitDetails = (e) => {
    e.preventDefault()
    setStep(2)
  }

  const handleSubmitPayment = (e) => {
    e.preventDefault()
    setStep(3)
    
    // Simulate payment processing
    setTimeout(() => {
      setStep(4)
    }, 2500)
  }

  const handleComplete = () => {
    if (onSuccess) {
      onSuccess(selectedPlan)
    }
    setStep(1)
    onClose()
  }

  const getGymName = (gymId) => {
    return gymId === '1' || gymId === 1 ? 'Nexus Fitness Center' : 'Nexus Fitness Express'
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="bg-slate-800 border border-slate-700 rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-slide-up relative">
        {/* Header */}
        <div className="sticky top-0 bg-slate-800 border-b border-slate-700 p-6 rounded-t-3xl z-10">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-600 via-primary-500 to-primary-400"></div>
          
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors bg-slate-700/50 backdrop-blur-sm rounded-full p-2 hover:bg-slate-700"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-primary-600 rounded-2xl flex items-center justify-center">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-light text-white">Complete Your Subscription</h2>
              <p className="text-gray-400 font-light">{selectedPlan.type} Plan - {getGymName(selectedPlan.gym)}</p>
            </div>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center justify-between mt-6">
            {['Details', 'Payment', 'Confirm'].map((label, index) => (
              <div key={label} className="flex items-center">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium transition-all ${
                  step > index + 1 
                    ? 'bg-green-500 text-white' 
                    : step === index + 1 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-slate-700 text-gray-400'
                }`}>
                  {step > index + 1 ? (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : index + 1}
                </div>
                <span className={`ml-2 text-sm font-light ${step >= index + 1 ? 'text-white' : 'text-gray-500'}`}>{label}</span>
                {index < 2 && (
                  <div className={`w-12 md:w-20 h-0.5 mx-3 ${step > index + 1 ? 'bg-green-500' : 'bg-slate-700'}`}></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="p-6">
          {/* Order Summary Card */}
          <div className="bg-slate-900/50 rounded-2xl p-5 mb-6 border border-slate-700">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-medium text-white">{selectedPlan.type} Membership</h3>
                <p className="text-gray-400 text-sm">{getGymName(selectedPlan.gym)}</p>
              </div>
              <div className="text-right">
                <span className="text-3xl font-light text-primary-400">€{selectedPlan.price}</span>
                <span className="text-gray-500">/{selectedPlan.period}</span>
              </div>
            </div>
            {selectedPlan.originalPrice && (
              <div className="flex items-center gap-2 pt-3 border-t border-slate-700">
                <span className="text-gray-500 line-through">€{selectedPlan.originalPrice}</span>
                <span className="bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full text-xs font-medium">
                  Save €{selectedPlan.savings}
                </span>
              </div>
            )}
          </div>

          {/* Step 1: Personal Details */}
          {step === 1 && (
            <form onSubmit={handleSubmitDetails} className="space-y-4">
              <h3 className="text-lg font-medium text-white mb-4">Personal Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all bg-slate-900 text-white placeholder-gray-500 focus:outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all bg-slate-900 text-white placeholder-gray-500 focus:outline-none"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all bg-slate-900 text-white placeholder-gray-500 focus:outline-none"
                  placeholder="+421 900 123 456"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all bg-slate-900 text-white placeholder-gray-500 focus:outline-none"
                  placeholder="Street address"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all bg-slate-900 text-white placeholder-gray-500 focus:outline-none"
                    placeholder="Bratislava"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Postal Code</label>
                  <input
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all bg-slate-900 text-white placeholder-gray-500 focus:outline-none"
                    placeholder="811 01"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-4 rounded-xl font-medium hover:bg-primary-500 transition-all transform hover:scale-[1.02] mt-4"
              >
                Continue to Payment
              </button>
            </form>
          )}

          {/* Step 2: Payment */}
          {step === 2 && (
            <form onSubmit={handleSubmitPayment} className="space-y-4">
              <h3 className="text-lg font-medium text-white mb-4">Payment Details</h3>
              
              {/* Fake Card Display */}
              <div className="bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 rounded-2xl p-6 mb-6 relative overflow-hidden border border-slate-600">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary-400/10 rounded-full blur-xl"></div>
                
                <div className="flex justify-between items-start mb-8">
                  <div className="w-12 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded"></div>
                  <svg className="w-12 h-12 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="7" cy="12" r="7" fillOpacity="0.8"/>
                    <circle cx="17" cy="12" r="7" fillOpacity="0.6"/>
                  </svg>
                </div>
                
                <div className="text-xl tracking-[0.2em] text-white font-mono mb-4">
                  {formData.cardNumber || '•••• •••• •••• ••••'}
                </div>
                
                <div className="flex justify-between">
                  <div>
                    <p className="text-xs text-gray-500 uppercase">Card Holder</p>
                    <p className="text-white font-light">{formData.cardName || 'YOUR NAME'}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase">Expires</p>
                    <p className="text-white font-light">{formData.expiryDate || 'MM/YY'}</p>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Card Number</label>
                <input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  required
                  maxLength={19}
                  className="w-full px-4 py-3 border border-slate-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all bg-slate-900 text-white placeholder-gray-500 focus:outline-none font-mono"
                  placeholder="1234 5678 9012 3456"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Cardholder Name</label>
                <input
                  type="text"
                  name="cardName"
                  value={formData.cardName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all bg-slate-900 text-white placeholder-gray-500 focus:outline-none"
                  placeholder="JOHN DOE"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Expiry Date</label>
                  <input
                    type="text"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleChange}
                    required
                    maxLength={5}
                    autoComplete="cc-exp"
                    className="w-full px-4 py-3 border border-slate-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all bg-slate-900 text-white placeholder-gray-500 focus:outline-none"
                    placeholder="MM/YY"
                    style={{ pointerEvents: 'auto', zIndex: 10 }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">CVV</label>
                  <input
                    type="password"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleChange}
                    required
                    maxLength={4}
                    autoComplete="cc-csc"
                    className="w-full px-4 py-3 border border-slate-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all bg-slate-900 text-white placeholder-gray-500 focus:outline-none"
                    placeholder="•••"
                    style={{ pointerEvents: 'auto', zIndex: 10 }}
                  />
                </div>
              </div>

              {/* Security Notice */}
              <div className="flex items-center gap-3 p-4 bg-slate-900/50 rounded-xl border border-slate-700">
                <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <div>
                  <p className="text-sm text-white">Secure Payment</p>
                  <p className="text-xs text-gray-400">Your payment info is encrypted and secure</p>
                </div>
              </div>

              <div className="flex gap-4 mt-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex-1 bg-slate-700 text-white py-4 rounded-xl font-medium hover:bg-slate-600 transition-all"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-primary-600 text-white py-4 rounded-xl font-medium hover:bg-primary-500 transition-all transform hover:scale-[1.02]"
                >
                  Pay €{selectedPlan.price}
                </button>
              </div>
            </form>
          )}

          {/* Step 3: Processing */}
          {step === 3 && (
            <div className="text-center py-12">
              <div className="w-20 h-20 mx-auto mb-6 relative">
                <div className="absolute inset-0 border-4 border-slate-700 rounded-full"></div>
                <div className="absolute inset-0 border-4 border-primary-500 rounded-full border-t-transparent animate-spin"></div>
              </div>
              <h3 className="text-2xl font-light text-white mb-2">Processing Payment...</h3>
              <p className="text-gray-400 font-light">Please wait while we securely process your payment</p>
              
              <div className="mt-8 space-y-3">
                <div className="flex items-center justify-center gap-3 text-gray-400">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Card verified</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-gray-400">
                  <div className="w-5 h-5 border-2 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
                  <span>Processing payment...</span>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Success */}
          {step === 4 && (
            <div className="text-center py-8">
              <div className="w-20 h-20 mx-auto mb-6 bg-green-500/20 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-light text-white mb-2">Payment Successful!</h3>
              <p className="text-gray-400 font-light mb-6">Welcome to Nexus Fitness, {formData.name}!</p>
              
              <div className="bg-slate-900/50 rounded-2xl p-5 mb-6 border border-slate-700 text-left">
                <h4 className="text-white font-medium mb-3">Order Confirmation</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Plan</span>
                    <span className="text-white">{selectedPlan.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Location</span>
                    <span className="text-white">{getGymName(selectedPlan.gym)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Amount Paid</span>
                    <span className="text-primary-400 font-medium">€{selectedPlan.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Order ID</span>
                    <span className="text-white font-mono text-xs">NF-{Date.now()}</span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-400 mb-6">
                A confirmation email has been sent to <span className="text-primary-400">{formData.email}</span>
              </p>

              <button
                onClick={handleComplete}
                className="w-full bg-primary-600 text-white py-4 rounded-xl font-medium hover:bg-primary-500 transition-all transform hover:scale-[1.02]"
              >
                Start Your Fitness Journey
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}


