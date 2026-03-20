'use client';

import { useState } from 'react';
import { Phone, MapPin, Mail, Send, CheckCircle } from 'lucide-react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // TODO: Replace with real Supabase insert or email API call
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <section className="py-16">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Reach Us Directly</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Phone Numbers</p>
                  <a href="tel:+263772287864" className="text-lg font-bold text-gray-900 hover:text-yellow-600 transition-colors block">
                    +263 772 287 864
                  </a>
                  <a href="tel:+263712023451" className="text-lg font-bold text-gray-900 hover:text-yellow-600 transition-colors block">
                    +263 712 023 451
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Location</p>
                  <p className="text-lg font-bold text-gray-900">Entumbane, Bulawayo</p>
                  <p className="text-gray-500 text-sm">Zimbabwe</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Availability</p>
                  <p className="text-gray-900 font-medium">Monday – Saturday</p>
                  <p className="text-gray-500 text-sm">7:00 AM – 6:00 PM (CAT)</p>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="mt-10 rounded-2xl bg-yellow-50 border border-yellow-200 h-52 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="w-10 h-10 text-yellow-400 mx-auto mb-2" />
                <p className="text-sm font-medium">Entumbane, Bulawayo, Zimbabwe</p>
                <p className="text-xs text-gray-400">Google Maps integration available on request</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
            {submitted ? (
              <div className="card text-center py-16">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-500">
                  Thank you for reaching out. We will get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 btn-primary"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="name">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Your full name"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="email">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="inquiry">
                    Inquiry Type *
                  </label>
                  <select
                    id="inquiry"
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition bg-white"
                  >
                    <option value="">Select an inquiry type</option>
                    <option value="chicks">Day-Old / Week-Old Chicks</option>
                    <option value="eggs">Fertilized Eggs</option>
                    <option value="incubator-purchase">Incubator Purchase</option>
                    <option value="incubator-service">Incubator Servicing / Repair</option>
                    <option value="custom-hatch">Custom Hatching Service</option>
                    <option value="technical-advice">Technical Advice</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="message">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="Tell us what you need — quantity, delivery location, timeline, or any questions..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" /> Send Message
                    </>
                  )}
                </button>
                <p className="text-xs text-gray-400 text-center">
                  We typically respond within 24 hours during business days.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
