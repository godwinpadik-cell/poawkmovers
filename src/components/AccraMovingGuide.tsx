import React, { useState } from 'react';
import { MOVING_CHECKLIST } from '../data/movingData';
import { 
  CheckCircle, 
  Circle, 
  AlertCircle, 
  Clock, 
  ShieldCheck, 
  Building2, 
  Truck, 
  Compass,
  Check
} from 'lucide-react';

export const AccraMovingGuide: React.FC = () => {
  const [activePhase, setActivePhase] = useState<'all' | '2-weeks' | '1-week' | 'move-day' | 'post-move'>('all');
  const [completedIds, setCompletedIds] = useState<string[]>(['chk-1']);

  const toggleCheck = (id: string) => {
    setCompletedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredChecklist = activePhase === 'all'
    ? MOVING_CHECKLIST
    : MOVING_CHECKLIST.filter((item) => item.phase === activePhase);

  return (
    <section id="coverage-guide" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold tracking-wider text-amber-600 mb-2">
            LOCAL ACCRA EXPERTISE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">
            Accra Relocation Checklist & City Moving Advisory
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Relocating in Greater Accra comes with unique local considerations—from estate security gate approvals to bypassing George Walker Bush (N1) peak traffic. Use our interactive checklist to keep your move orderly.
          </p>
        </div>

        {/* 2-Column Grid: Interactive Checklist (Left 7 cols) & Accra Moving Advisory (Right 5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Interactive Checklist */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Interactive Move Checklist</h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Track your progress step-by-step
                </p>
              </div>

              <div className="text-xs font-mono font-bold text-slate-700 bg-slate-100 px-3 py-1.5 rounded-lg">
                {completedIds.length} of {MOVING_CHECKLIST.length} Completed
              </div>
            </div>

            {/* Phase Selector (Functional buttons) */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-xl mb-6">
              {[
                { id: 'all', label: 'All Steps' },
                { id: '2-weeks', label: '2 Weeks Prior' },
                { id: '1-week', label: '1 Week Prior' },
                { id: 'move-day', label: 'Moving Day' },
                { id: 'post-move', label: 'Settling In' },
              ].map((phase) => (
                <button
                  key={phase.id}
                  onClick={() => setActivePhase(phase.id as any)}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                    activePhase === phase.id
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {phase.label}
                </button>
              ))}
            </div>

            {/* Checklist Items */}
            <div className="space-y-3">
              {filteredChecklist.map((item) => {
                const isDone = completedIds.includes(item.id);
                return (
                  <div
                    key={item.id}
                    onClick={() => toggleCheck(item.id)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3.5 select-none ${
                      isDone
                        ? 'bg-emerald-50/50 border-emerald-200'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="mt-0.5 shrink-0">
                      {isDone ? (
                        <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                      ) : (
                        <Circle className="w-5 h-5 text-slate-300 hover:text-amber-500 transition-colors" />
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className={`text-sm font-bold ${isDone ? 'line-through text-slate-500' : 'text-slate-900'}`}>
                          {item.title}
                        </span>
                        <span className="text-2xs font-mono uppercase tracking-wider text-slate-400">
                          {item.category}
                        </span>
                      </div>
                      <p className={`text-xs mt-1 leading-relaxed ${isDone ? 'text-slate-400' : 'text-slate-600'}`}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Accra Local Advisory Cards */}
          <div className="lg:col-span-5 space-y-5">
            
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-600 uppercase tracking-wide mb-2">
                <Clock className="w-4 h-4" />
                <span>Accra Traffic & Timing Optimization</span>
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-2">
                Avoiding Highway Bottlenecks
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Peak morning traffic (6:30 AM – 9:30 AM) heavily impacts the George Walker Bush Highway (N1), Spintex Road, and the Tema Motorway. Poawk Property Movers schedules departures strategically—either early morning at 7:00 AM or midday at 10:30 AM—to ensure your truck arrives without standing in heavy heat and gridlock.
              </p>
              <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 font-medium">
                💡 <em>Pro Tip:</em> Moves between Ayawaso/Dzorwulu and Airport Residential or Cantonments typically complete within 3 hours during midday slots.
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-600 uppercase tracking-wide mb-2">
                <Building2 className="w-4 h-4" />
                <span>Gated Estates & Security Permits</span>
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-2">
                East Legon, Trassaco & Cantonments Entry
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Most premier gated communities in Greater Accra require 24-hour advance clearance for commercial moving trucks. Our operations desk supplies truck registration numbers and driver identification to your estate association ahead of time, preventing gate disputes.
              </p>
            </div>

            <div className="bg-slate-900 text-white rounded-2xl border border-slate-800 p-6 shadow-md">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-wide mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Direct Operations Desk</span>
              </div>
              <h4 className="text-base font-bold text-white mb-2">
                Need Route Advice for Your Move?
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Speak directly with our moving controller based in Ayawaso district. We will guide you on the best moving days and road logistics.
              </p>
              <a
                href="tel:+233240977141"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-xl text-xs transition-colors"
              >
                Call Accra Office: +233 24 097 7141
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
