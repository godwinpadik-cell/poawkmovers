import React from 'react';
import { Check, Shield, Star, ArrowRight, Package, Box, Sparkles } from 'lucide-react';

interface MovePackagesProps {
  onSelectPackage: (tierName: string) => void;
}

export const MovePackages: React.FC<MovePackagesProps> = ({ onSelectPackage }) => {
  const packages = [
    {
      id: 'essential',
      title: 'Essential Moving Package',
      tagline: 'Standard Professional Move',
      badge: 'Budget-Smart',
      badgeColor: 'bg-slate-100 text-slate-800',
      description: 'Ideal for movers who prefer to pack their own personal items in boxes but want dedicated heavy loading, enclosed transport, and professional unloading.',
      features: [
        'Dedicated enclosed weatherproof truck with hydraulic lift',
        'Professional loading & unloading by permanent uniformed crew',
        'Heavy-duty furniture pad wrapping & strap tie-downs',
        'Disassembly & reassembly of standard beds & dining tables',
        'Standard transit coverage ($/GH₵ value protection)',
        'Estate gate security clearance coordination'
      ],
      idealFor: 'Apartments, budget-conscious households, student transfers',
      recommended: false
    },
    {
      id: 'full-service',
      title: 'Full-Service Packing Package',
      tagline: 'Most Popular Choice',
      badge: 'Most Popular',
      badgeColor: 'bg-blue-600 text-white',
      description: 'We handle 100% of the packing. Our crew brings all double-walled cartons, bubble wrap, stretch film, and wardrobe boxes to pack your home safely.',
      features: [
        'Everything in Essential Moving Package, plus:',
        'Full household packing of all rooms, closets, kitchen & glassware',
        'Double-walled Poawk heavy-duty corrugated moving boxes provided',
        'Anti-static bubble wrap for computer monitors & flat-screen TVs',
        'Wardrobe garment boxes allowing clothes to stay on hangers',
        'Mattress sanitized covers & protective upholstery stretch film',
        'Unloading and room-by-room box distribution at destination'
      ],
      idealFor: 'Busy families, corporate executives, expatriates, 2-4 bedroom homes',
      recommended: true
    },
    {
      id: 'full-value-white-glove',
      title: 'Full-Value White-Glove Package',
      tagline: 'Luxury & Fragile Crating',
      badge: 'Maximum Protection',
      badgeColor: 'bg-amber-500 text-slate-950 font-black',
      description: 'The highest standard of relocation care. Custom timber crating for fine art and marble, complete unpacking, furniture staging, and full debris removal.',
      features: [
        'Everything in Full-Service Packing, plus:',
        'Custom ISPM-15 heat-treated timber crates for marble & fine art',
        'Specialty equipment handling (piano, gun/fireproof safe, laboratory equipment)',
        'Full unpacking service: clothes in closets, books on shelves',
        'Complete packing debris & carton removal on moving day',
        'Zero-deductible Full-Value Transit Protection policy',
        'Dedicated senior logistics superintendent assigned on-site'
      ],
      idealFor: 'Luxury villas, diplomatic residences, hospital/clinical labs, delicate artwork',
      recommended: false
    }
  ];

  return (
    <section id="moving-packages" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-bold tracking-wider text-blue-600 mb-2 font-mono uppercase">
            TAILORED MOVING PACKAGES · POAWK PROPERTY MOVERS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">
            Choose the Perfect Moving Tier for Your Relocation
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Every home and business is unique. Select an all-inclusive moving package or customize your services with fragile-only packing, storage in transit, or custom timber crating.
          </p>
        </div>

        {/* 3-Package Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all relative ${
                pkg.recommended
                  ? 'bg-white border-2 border-blue-600 shadow-xl shadow-blue-900/5 ring-4 ring-blue-500/10'
                  : 'bg-white border border-slate-200 shadow-sm hover:shadow-md'
              }`}
            >
              {/* Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className={`text-2xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full ${pkg.badgeColor}`}>
                  {pkg.badge}
                </span>
                {pkg.recommended && (
                  <div className="flex items-center gap-1 text-xs font-bold text-blue-600">
                    <Sparkles className="w-4 h-4 fill-blue-600" />
                    <span>Recommended</span>
                  </div>
                )}
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  {pkg.title}
                </h3>
                <div className="text-xs font-semibold text-blue-600 mb-3">
                  {pkg.tagline}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {pkg.description}
                </p>

                {/* Features list */}
                <div className="space-y-3 pt-4 border-t border-slate-100 mb-8">
                  <div className="text-2xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                    Package Inclusions:
                  </div>
                  {pkg.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <Check className={`w-4 h-4 shrink-0 mt-0.5 ${pkg.recommended ? 'text-blue-600 font-bold' : 'text-emerald-600'}`} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="pt-4 border-t border-slate-100 space-y-3">
                <div className="text-2xs text-slate-500">
                  <strong className="text-slate-700">Best for:</strong> {pkg.idealFor}
                </div>

                <button
                  type="button"
                  onClick={() => onSelectPackage(pkg.id)}
                  className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer ${
                    pkg.recommended
                      ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md'
                      : 'bg-slate-900 hover:bg-slate-800 text-white'
                  }`}
                >
                  <span>Select & Get Binding Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Full-Value Protection Guarantee Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-blue-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-800 text-blue-300 flex items-center justify-center shrink-0 border border-blue-700">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-1">
                Poawk Certified Full-Value Protection (FVP) Included
              </h4>
              <p className="text-xs text-blue-200 leading-relaxed max-w-2xl">
                Unlike informal movers who accept zero accountability, Poawk Property Movers provides written transit protection on every binding quote. In the rare event of damage, your items are repaired or replaced at true replacement value.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/233240977141?text=Hello%20Poawk%20Property%20Movers,%20I%20would%20like%20more%20details%20on%20Full-Value%20Protection%20and%20moving%20packages."
            target="_blank"
            rel="noreferrer"
            className="px-5 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-xl text-xs sm:text-sm whitespace-nowrap transition-colors shrink-0 shadow-md cursor-pointer"
          >
            Speak with Protection Specialist
          </a>
        </div>

      </div>
    </section>
  );
};
