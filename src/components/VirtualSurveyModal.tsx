import React, { useState } from 'react';
import { X, Video, Calendar, Clock, CheckCircle2, Phone, Camera, Shield } from 'lucide-react';

interface VirtualSurveyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VirtualSurveyModal: React.FC<VirtualSurveyModalProps> = ({
  isOpen,
  onClose
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('10:00 AM - 11:00 AM');
  const [homeSize, setHomeSize] = useState('2-3 Bedroom Apartment / Home');
  const [platform, setPlatform] = useState('WhatsApp Video');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleLaunchWhatsApp = () => {
    const text = `*Schedule Virtual Video Move Survey - Poawk Property Movers*
Name: ${name || 'Prospective Client'}
Phone: ${phone}
Preferred Date: ${date || 'Earliest available'}
Time Slot: ${timeSlot}
Property Size: ${homeSize}
Platform: ${platform}
Notes: ${notes || 'Ready for virtual survey'}`;

    window.open(`https://wa.me/233240977141?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close survey modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 pb-5 border-b border-slate-200">
          <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-sm">
            <Video className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
              Schedule a Virtual Home Survey
            </h3>
            <p className="text-xs text-slate-500">
              Certified Poawk Property Movers Virtual Survey. Walk us through your home on video for a binding quote within 30 minutes.
            </p>
          </div>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-bold text-slate-900">
              Virtual Survey Slot Requested!
            </h4>
            <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
              Our lead estimator will initiate your <strong>{platform}</strong> call at <strong>{timeSlot}</strong> on <strong>{date || 'your chosen date'}</strong>.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
              <button
                type="button"
                onClick={handleLaunchWhatsApp}
                className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs transition-colors cursor-pointer"
              >
                Confirm via WhatsApp Directly
              </button>
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-xs transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-5 space-y-4">
            
            {/* Value prop banner */}
            <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-900 flex items-start gap-2.5">
              <Camera className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <span>
                <strong>No waiting for an in-person estimator:</strong> Use your phone's camera to show our moving surveyor your rooms, stairwells, and delicate furniture for an exact guaranteed price.
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Ama Osei"
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Phone / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+233 24 097 7141"
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Preferred Time Slot
                </label>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
                >
                  <option>8:30 AM - 9:30 AM</option>
                  <option>10:00 AM - 11:00 AM</option>
                  <option>1:00 PM - 2:00 PM</option>
                  <option>3:30 PM - 4:30 PM</option>
                  <option>5:30 PM - 6:30 PM (Evening)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Property Size
                </label>
                <select
                  value={homeSize}
                  onChange={(e) => setHomeSize(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
                >
                  <option>1-Bedroom Apartment</option>
                  <option>2-3 Bedroom Apartment / Home</option>
                  <option>4+ Bedroom House / Estate</option>
                  <option>Small Commercial Office (1-10 Desks)</option>
                  <option>Corporate Facility (20+ Workstations)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Video Platform
                </label>
                <select
                  value={platform}
                  onChange={(e) => setPlatform(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
                >
                  <option>WhatsApp Video Call</option>
                  <option>Google Meet</option>
                  <option>Zoom</option>
                  <option>Apple FaceTime</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Special Notes (optional)
              </label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Mention any large sofas, pianos, fragile mirrors, or tight stairwells..."
                className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs sm:text-sm transition-colors cursor-pointer shadow-sm"
            >
              Schedule Virtual Survey
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
