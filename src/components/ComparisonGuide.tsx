import React from 'react';
import { Check, X, Shield, AlertTriangle, Building, Award } from 'lucide-react';

export const ComparisonGuide: React.FC = () => {
  const comparisonData = [
    {
      feature: 'Weatherproof Enclosed Moving Trucks',
      poawk: 'Enclosed, padded box trucks with hydraulic tail lifts',
      roadside: 'Open-bed wooden trucks / flatbeds exposed to Accra rain & dust',
      multinational: 'Enclosed container vehicles (often third-party contracted)'
    },
    {
      feature: 'Protective Materials & Crating',
      poawk: 'Double-walled cartons, stretch film, bubble wrap & custom timber crates',
      roadside: 'None or minimal rope; clients must supply own materials',
      multinational: 'Full standard packing crates (high premium surcharge)'
    },
    {
      feature: 'Pricing Transparency & Written Quote',
      poawk: 'Fixed, transparent binding quote in GH₵ or USD with no arrival surprises',
      roadside: 'Verbal bargaining; frequent surprise demands for extra cash',
      multinational: 'Complex corporate tariff with high minimums ($3,500+ USD)'
    },
    {
      feature: 'Staff & Goods Handling Training',
      poawk: 'Permanent, vetted, uniformed teams trained in furniture disassembly',
      roadside: 'Casual day laborers picked up at roadside junctions',
      multinational: 'Certified crews with rigid corporate scheduling'
    },
    {
      feature: 'Transit Protection & Accountability',
      poawk: 'Ayawaso Accra headquarters, formal manifest & transit coverage',
      roadside: 'No liability or contract; zero recourse if items break or disappear',
      multinational: 'Corporate insurance policy with high deductibles'
    },
    {
      feature: 'Local & Global Flexibility',
      poawk: 'Rapid Accra dispatch within 24-48 hrs + global moves to 50+ nations',
      roadside: 'Local road only; cannot handle customs or inter-region security',
      multinational: 'Strict 2-3 week lead time required before survey'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold tracking-wider text-amber-600 mb-2">
            MARKET COMPARISON GUIDE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">
            Exploring Moving Options in Accra: How Providers Compare
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Relocating valuable household or corporate property in Accra involves choosing between roadside ad-hoc hires, expensive multinational freight conglomerates, or a dedicated Ghanaian relocation specialist.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="py-4 px-4 sm:px-6 font-bold text-slate-900 w-1/4">
                  Moving Standard & Criteria
                </th>
                <th className="py-4 px-4 sm:px-6 font-bold text-slate-950 bg-amber-500/10 border-x border-amber-300/40 w-1/3">
                  <div className="flex items-center gap-1.5 text-slate-950 font-extrabold">
                    <Award className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Poawk Property Movers</span>
                  </div>
                  <div className="text-2xs font-normal text-amber-900 mt-0.5">
                    Ayawaso, Accra · Local & 50+ Countries
                  </div>
                </th>
                <th className="py-4 px-4 sm:px-6 font-semibold text-slate-600 w-1/4">
                  Roadside Truckers / Trotro Hires
                </th>
                <th className="py-4 px-4 sm:px-6 font-semibold text-slate-600 w-1/4">
                  Foreign Multinational Forwarders
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {comparisonData.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">
                    {row.feature}
                  </td>
                  
                  {/* Poawk Column */}
                  <td className="py-4 px-4 sm:px-6 bg-amber-500/5 border-x border-amber-300/30 font-medium text-slate-900">
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{row.poawk}</span>
                    </div>
                  </td>

                  {/* Roadside */}
                  <td className="py-4 px-4 sm:px-6 text-slate-600">
                    <div className="flex items-start gap-2">
                      <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      <span>{row.roadside}</span>
                    </div>
                  </td>

                  {/* Multinational */}
                  <td className="py-4 px-4 sm:px-6 text-slate-600">
                    <div className="flex items-start gap-2">
                      <Shield className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                      <span>{row.multinational}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom takeaway note */}
        <div className="mt-8 p-6 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h4 className="text-base font-bold text-white mb-1">
              The Best of Both Worlds: Professional Rigor at Realistic Ghanaian Rates
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              We combine the enterprise-grade crating and customs standards of international movers with the nimbleness, rapid availability, and fair pricing of a dedicated Accra-based team.
            </p>
          </div>
          <a
            href="https://wa.me/233240977141?text=Hello%20Poawk%20Property%20Movers,%20I%20am%20comparing%20moving%20companies%20in%20Accra%20and%20would%20like%20to%20discuss%20my%20relocation."
            target="_blank"
            rel="noreferrer"
            className="px-5 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-xl text-xs sm:text-sm whitespace-nowrap transition-colors shrink-0 shadow-md"
          >
            Chat with Our Moving Specialist
          </a>
        </div>

      </div>
    </section>
  );
};
