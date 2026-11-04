import React from 'react';
import { TESTIMONIALS, FAQ_DATA } from '../data/movingData';
import { ChevronDown, ChevronUp, Star, Stethoscope, Building, Award } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold tracking-wider text-blue-700 mb-2">
            CLIENT EXPERIENCES & CASE STUDIES
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">
            Trusted by SIC Hospital, Corporate Offices & Accra Households
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            From precision medical clinical laboratory transfers for SIC Hospital to corporate headquarters and international relocations, our clients share their verified experiences.
          </p>
        </div>

        {/* Testimonials 4-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {TESTIMONIALS.map((t, idx) => {
            const isHospital = t.org.includes('SIC Hospital');
            return (
              <div
                key={idx}
                className={`p-6 sm:p-7 rounded-2xl bg-white border transition-all flex flex-col justify-between shadow-xs ${
                  isHospital
                    ? 'border-blue-400/80 ring-2 ring-blue-500/10'
                    : 'border-slate-200/90'
                }`}
              >
                <div>
                  {/* Route metadata - clean text with separator */}
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-slate-500 mb-4 pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-1.5">
                      {isHospital ? (
                        <span className="font-bold text-blue-700 flex items-center gap-1">
                          <Stethoscope className="w-3.5 h-3.5" />
                          <span>{t.service}</span>
                        </span>
                      ) : (
                        <span className="font-semibold text-amber-700">{t.service}</span>
                      )}
                      <span aria-hidden="true">·</span>
                      <span>{t.route}</span>
                    </div>

                    {isHospital && (
                      <span className="text-2xs font-bold text-blue-800 bg-blue-50 px-2.5 py-0.5 rounded-md font-sans">
                        Hospital Case Study
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-slate-700 leading-relaxed italic mb-6">
                    "{t.quote}"
                  </p>
                </div>

                {/* Attributable Client Lockup */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-slate-900">{t.name}</div>
                    <div className="text-xs text-slate-600 font-medium">{t.role}</div>
                    <div className="text-xs text-slate-400">{t.org}</div>
                  </div>
                  <div className="flex text-amber-400 shrink-0">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* FAQs */}
        <div className="max-w-4xl mx-auto pt-10 border-t border-slate-200">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="text-2xl font-bold text-slate-900">
              Frequently Asked Questions
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Everything you need to know about booking, medical/lab crating, packing, and relocation timelines with Poawk Property Movers.
            </p>
          </div>

          <div className="space-y-3">
            {FAQ_DATA.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className="rounded-xl border border-slate-200 bg-white overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(i)}
                    className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-slate-900 hover:text-blue-700 transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-blue-700 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
