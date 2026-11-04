import React, { useState } from 'react';
import { 
  FileText, 
  Video, 
  Package, 
  CheckCircle2, 
  Truck, 
  ArrowRight,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

interface MoveProcessProps {
  onStartEstimate: () => void;
  onOpenVirtualSurvey: () => void;
}

export const MoveProcess: React.FC<MoveProcessProps> = ({
  onStartEstimate,
  onOpenVirtualSurvey
}) => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Request Your Free Move Estimate',
      shortTitle: 'Request Estimate',
      icon: FileText,
      tagline: 'Start online in 60 seconds with our instant rate calculator or call our Accra dispatch desk.',
      details: 'Tell us where you are moving from, where you are heading (Accra neighborhoods, inter-region, or 50+ countries worldwide), your target move date, and home size. You immediately receive baseline transparent estimates in Ghanaian Cedis (GH₵) and USD ($).',
      actionLabel: 'Calculate Instant Cost',
      actionHandler: onStartEstimate
    },
    {
      num: '02',
      title: 'Schedule In-Home or Virtual Video Survey',
      shortTitle: 'Home Survey',
      icon: Video,
      tagline: 'Choose between a physical walkthrough or a 15-minute smartphone video survey.',
      details: 'Walk through your property via WhatsApp video with a Poawk moving specialist. We calculate your exact cubic meter (CBM) volume, identify heavy items (pianos, safes, marble), and assess stairwell access.',
      actionLabel: 'Schedule Virtual Video Survey',
      actionHandler: onOpenVirtualSurvey
    },
    {
      num: '03',
      title: 'Customize Your Moving Package',
      shortTitle: 'Select Package',
      icon: Package,
      tagline: 'Tailor your move with packing, custom crating, and full-value protection options.',
      details: 'Choose from Essential Transport, Full-Service Packing, or White-Glove VIP protection. Add customized timber crates for flat-screen televisions, antique artwork, or SIC Hospital-grade medical and lab equipment.',
      actionLabel: 'View Moving Packages',
      actionHandler: () => {
        const el = document.getElementById('moving-packages');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      num: '04',
      title: 'Receive a Binding Quote & E-Accept',
      shortTitle: 'Binding Quote',
      icon: CheckCircle2,
      tagline: '100% price certainty with zero surprise fees on moving day.',
      details: 'Unlike casual roadside truckers who bargain and demand extra cash halfway through the journey, Poawk Property Movers delivers a formal written manifest with a guaranteed binding rate. Approve online or via WhatsApp with one tap.',
      actionLabel: 'Explore Pricing Guarantee',
      actionHandler: onStartEstimate
    },
    {
      num: '05',
      title: 'Moving Day & Live Shipment Tracking',
      shortTitle: 'Moving Day',
      icon: Truck,
      tagline: 'Uniformed crews, enclosed weatherproof trucks, and room-by-room setup.',
      details: 'On move day, our vetted permanent crew arrives in Poawk Property Movers uniforms with clean, enclosed box trucks equipped with hydraulic lifts. Track your order status in real time via our MyPoawk tracker until the final box is unpadded.',
      actionLabel: 'Track Move Milestones',
      actionHandler: () => {
        const el = document.getElementById('coverage-guide');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-bold tracking-wider text-blue-400 mb-2 font-mono uppercase">
            THE POAWK MOVING PROCESS · PROVEN RELOCATION SYSTEM
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white [text-wrap:balance]">
            Moving Made Easy. Every Step of the Way.
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            We eliminated the uncertainty and stress of moving in Ghana. Here is the exact five-stage process that ensures seamless, damage-free relocations across Accra and worldwide.
          </p>
        </div>

        {/* Step Navigation Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3 mb-10 pb-4 border-b border-slate-800">
          {steps.map((st, i) => {
            const Icon = st.icon;
            const isActive = activeStep === i;
            return (
              <button
                key={i}
                type="button"
                onClick={() => setActiveStep(i)}
                className={`p-3.5 sm:p-4 rounded-2xl text-left transition-all cursor-pointer border flex flex-col justify-between ${
                  isActive
                    ? 'bg-blue-600/20 border-blue-500 text-white shadow-lg'
                    : 'bg-slate-800/40 border-slate-800 text-slate-400 hover:bg-slate-800/70 hover:text-slate-200'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-mono font-bold ${isActive ? 'text-blue-400' : 'text-slate-500'}`}>
                    STEP {st.num}
                  </span>
                  <Icon className={`w-4 h-4 ${isActive ? 'text-blue-400' : 'text-slate-500'}`} />
                </div>
                <div className="text-xs sm:text-sm font-bold truncate">
                  {st.shortTitle}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Feature Showcase */}
        {(() => {
          const current = steps[activeStep];
          const Icon = current.icon;
          return (
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-800/70 border border-slate-700/80 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-mono font-bold border border-blue-500/30">
                  <span>PHASE {current.num} OF 05</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {current.title}
                </h3>

                <p className="text-base text-blue-200 font-medium">
                  {current.tagline}
                </p>

                <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
                  {current.details}
                </p>

                <div className="pt-3 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={current.actionHandler}
                    className="px-5 py-3 bg-blue-500 hover:bg-blue-400 text-slate-950 font-bold rounded-xl text-xs sm:text-sm flex items-center gap-2 transition-colors cursor-pointer shadow-md"
                  >
                    <span>{current.actionLabel}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Guaranteed Binding Rate Policy</span>
                  </div>
                </div>
              </div>

              {/* Step indicator visual card */}
              <div className="lg:col-span-4 p-6 rounded-2xl bg-slate-900 border border-slate-700 text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center mx-auto">
                  <Icon className="w-8 h-8" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase">Poawk Property Movers Protocol</div>
                  <div className="text-base font-bold text-white mt-1">Poawk Quality Assurance</div>
                  <div className="text-xs text-slate-400 mt-2">
                    Every step is supervised by a senior relocation manager from our Ayawaso district office.
                  </div>
                </div>

                <div className="pt-2 flex justify-between items-center text-xs text-slate-500 border-t border-slate-800">
                  <span>Questions?</span>
                  <a
                    href="tel:+233240977141"
                    className="text-amber-400 font-bold hover:underline"
                  >
                    +233 24 097 7141
                  </a>
                </div>
              </div>

            </div>
          );
        })()}

      </div>
    </section>
  );
};
