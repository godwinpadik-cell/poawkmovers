import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Globe, 
  Send, 
  CheckCircle2, 
  Clock, 
  Building2, 
  MessageSquare,
  Linkedin
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [moveDetails, setMoveDetails] = useState('');
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = `Hello Poawk Property Movers, I would like to inquire about a move:
Name: ${name || 'Prospective Client'}
Phone: ${phone || 'Not provided'}
From: ${origin || 'Accra'}
To: ${destination || 'Destination'}
Date: ${preferredDate || 'Upcoming'}
Details: ${moveDetails || 'General inquiry'}`;

    window.open(`https://wa.me/233240977141?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact & Office Information */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              {/* Brand Logo & Motto */}
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/logo.jpg"
                  alt="Poawk Property Movers Official Logo"
                  className="w-12 h-12 object-contain rounded-xl border border-slate-200 bg-white p-1 shadow-xs shrink-0"
                />
                <div>
                  <div className="text-sm font-extrabold text-slate-900 tracking-tight">
                    Poawk Property Movers
                  </div>
                  <div className="text-[10px] font-mono text-sky-600 font-bold tracking-wider uppercase">
                    What Can't We Move?
                  </div>
                </div>
              </div>

              <div className="text-xs font-bold tracking-wider text-amber-600 mb-2">
                GET IN TOUCH · ACCRA DISPATCH
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">
                Direct Contact & Headquarters
              </h2>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Reach our logistics coordinators directly by phone or WhatsApp, or visit our Ayawaso district office in Greater Accra. We respond promptly with detailed rate cards and physical survey dates.
              </p>
            </div>

            {/* Direct Cards */}
            <div className="space-y-4">
              
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-amber-400 text-slate-950 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">
                    Primary Telephone & WhatsApp
                  </div>
                  <a
                    href="tel:+233240977141"
                    className="text-base font-bold text-slate-900 hover:text-amber-600 transition-colors block mt-0.5"
                  >
                    +233 (0) 24 097 7141
                  </a>
                  <div className="text-xs text-slate-500 mt-0.5">
                    Direct line to dispatch lead supervisor
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-amber-400 text-slate-950 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">
                    Headquarters Location
                  </div>
                  <div className="text-sm font-bold text-slate-900 mt-0.5">
                    Ayawaso District, Greater Accra Region, Ghana
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    Serving East Legon, Cantonments, Airport, Tema & all 16 regions
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-amber-400 text-slate-950 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">
                    Operating Hours
                  </div>
                  <div className="text-sm font-bold text-slate-900 mt-0.5">
                    Monday – Saturday: 7:30 AM – 6:30 PM
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    Overnight & Sunday moves available by special corporate arrangement
                  </div>
                </div>
              </div>

              {/* Profiles & External Links */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="https://gh.linkedin.com/in/oawk-property-movers-176307234"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-sky-700" />
                  <span>LinkedIn Profile</span>
                </a>
                <a
                  href="https://oawkpropertymovers.website2.me/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                >
                  <Globe className="w-3.5 h-3.5 text-amber-600" />
                  <span>Portfolio Site</span>
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Contact & Survey Request Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-1">
              Request a Written Quote & Move Survey
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Fill in your relocation specifications below. Our operations team will calculate your volume and contact you with fixed rates.
            </p>

            {submitted ? (
              <div className="p-8 text-center bg-emerald-50 rounded-2xl border border-emerald-200">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                <h4 className="text-lg font-bold text-emerald-900">
                  Move Request Submitted Successfully
                </h4>
                <p className="text-xs sm:text-sm text-emerald-700 mt-2 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{name}</strong>. A relocation specialist from our Ayawaso office will contact you via <strong>{phone}</strong> shortly with your tailored quote.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="px-4 py-2 bg-emerald-600 text-white font-bold rounded-lg text-xs hover:bg-emerald-700 transition-colors cursor-pointer"
                  >
                    Open on WhatsApp Now
                  </button>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 bg-white text-slate-700 border border-slate-300 font-semibold rounded-lg text-xs hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Kwame Mensah"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+233 24 097 7141"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Target Moving Date
                    </label>
                    <input
                      type="date"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Moving From (Pickup Address in Accra)
                    </label>
                    <input
                      type="text"
                      value={origin}
                      onChange={(e) => setOrigin(e.target.value)}
                      placeholder="e.g. East Legon, Accra"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Moving To (Destination City or Country)
                    </label>
                    <input
                      type="text"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      placeholder="e.g. Cantonments or London, UK"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Move Details & Special Items (e.g. 3-bedroom, piano, delicate paintings, office desks)
                  </label>
                  <textarea
                    rows={3}
                    value={moveDetails}
                    onChange={(e) => setMoveDetails(e.target.value)}
                    placeholder="Provide any details on staircases, fragile electronics, or special packing requirements..."
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="submit"
                    className="flex-1 py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-xs sm:text-sm transition-colors cursor-pointer"
                  >
                    Submit Booking Request
                  </button>
                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="py-3 px-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Quick WhatsApp Dispatch</span>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
