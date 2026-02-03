'use client'

import { useState } from 'react'
import { Building2, MapPin, Phone, User, CheckCircle2, ShieldCheck, TrendingUp, Users, ChevronDown } from 'lucide-react'
import { submitLead } from '../actions'

export default function SellPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const formData = new FormData(e.currentTarget)
    const result = await submitLead(formData)
    
    setIsSubmitting(false)
    
    if (result.success) {
      setIsSuccess(true)
      ;(e.target as HTMLFormElement).reset()
    } else {
      alert(result.error)
    }
  }

  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col lg:flex-row">
      {/* Left Column: Marketing */}
      <div className="w-full lg:w-1/2 bg-slate-900 p-8 lg:p-16 text-white flex flex-col justify-center">
        <div className="max-w-xl mx-auto lg:mx-0">
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            Sell your business with <span className="text-emerald-400">BizBoard.</span>
          </h1>
          <p className="text-lg text-slate-300 mb-12 leading-relaxed">
            Connect with our network of pre-verified investors and buyers. 
            We handle the complexities so you can focus on your next venture.
          </p>

          <div className="space-y-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 p-3 bg-slate-800 rounded-lg">
                <ShieldCheck className="h-6 w-6 text-emerald-400" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-white">Confidential Process</h3>
                <p className="text-slate-400 mt-1">Your business details are protected. We only share sensitive data with vetted buyers.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 p-3 bg-slate-800 rounded-lg">
                <Users className="h-6 w-6 text-emerald-400" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-white">Verified Buyers</h3>
                <p className="text-slate-400 mt-1">Access a curated list of serious investors actively looking for opportunities in Hyderabad.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 p-3 bg-slate-800 rounded-lg">
                <TrendingUp className="h-6 w-6 text-emerald-400" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-white">Best Market Valuation</h3>
                <p className="text-slate-400 mt-1">Our experts help you price your business correctly to ensure a faster and profitable exit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Form */}
      <div className="w-full lg:w-1/2 bg-white p-8 lg:p-16 flex flex-col justify-center">
        <div className="max-w-md mx-auto w-full">
          {isSuccess ? (
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-8 text-center animate-fade-in">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-emerald-100 mb-6">
                <CheckCircle2 className="h-10 w-10 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
              <p className="text-gray-600 mb-6">
                Your listing request has been received. Our senior listing agent will call you within 24 hours to discuss the next steps.
              </p>
              <button 
                onClick={() => setIsSuccess(false)}
                className="text-emerald-600 font-semibold hover:text-emerald-700 underline"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <>
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-gray-900">List Your Business</h2>
                <p className="mt-2 text-gray-600">Fill out the form below to get started.</p>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">
                    Full Name
                  </label>
                  <div className="relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 text-gray-900 placeholder-gray-400"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <div className="relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      required
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 text-gray-900 placeholder-gray-400"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="propertyType" className="block text-sm font-semibold text-gray-700 mb-1">
                    Property Type
                  </label>
                  <div className="relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Building2 className="h-5 w-5 text-gray-400" />
                    </div>
                    <select
                      id="propertyType"
                      name="propertyType"
                      className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 text-gray-900 bg-white appearance-none"
                    >
                      <option value="Cafe">Cafe</option>
                      <option value="Restaurant">Restaurant</option>
                      <option value="Gym">Gym / Fitness Center</option>
                      <option value="Retail">Retail Store</option>
                      <option value="Office">Office Space</option>
                      <option value="Other">Other</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-1">
                    Location / Area
                  </label>
                  <div className="relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MapPin className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="location"
                      id="location"
                      required
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 text-gray-900 placeholder-gray-400"
                      placeholder="e.g. Jubilee Hills, Gachibowli"
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex justify-center py-4 px-4 border border-transparent rounded-lg shadow-md text-base font-bold text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Listing Request'}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}