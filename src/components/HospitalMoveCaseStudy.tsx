import React from 'react';
import { Activity, ShieldCheck, CheckCircle2, FlaskConical, Award, Phone } from 'lucide-react';

export const HospitalMoveCaseStudy: React.FC = () => {
  return (
    <section id="sic-hospital" className="py-16 sm:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold tracking-wider text-amber-600 mb-2">
            SPECIALIZED HEALTHCARE CASE STUDY
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">
            SIC Hospital Relocation: Clinical Labs & Diagnostic Assets
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Relocating a functioning hospital demands zero margin for error. Discover how Poawk Property Movers transferred the clinical laboratories, diagnostic imaging systems, and patient wards of SIC Hospital in Accra without calibration drift.
          </p>
        </div>

        {/* 2-Column Split: Case Narrative & High-Tech Medical Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-slate-50 rounded-3xl border border-slate-200 p-6 sm:p-10">
          
          {/* Left Column: Hospital Narrative & Metrics */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-600 uppercase">
              <FlaskConical className="w-4 h-4 text-emerald-600" />
              <span>Diagnostic Pathology & Patient Facility Relocation</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
              Precision Logistics for Sensitive Medical & Laboratory Hardware
            </h3>

            <p className="text-sm text-slate-700 leading-relaxed">
              When <strong>SIC Hospital</strong> required the comprehensive transfer of their primary healthcare center in Accra, standard moving protocols were insufficient. Laboratory equipment—such as biochemical analyzers, high-speed centrifuges, ultrasound carts, optical microscopes, and patient monitoring stations—can easily suffer optical misalignment or sensor damage from ordinary transit vibrations.
            </p>

            {/* Protocols Applied */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="p-3.5 rounded-xl bg-white border border-slate-200">
                <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5 mb-1">
                  <ShieldCheck className="w-4 h-4 text-amber-500" />
                  <span>Shock-Damped Flight Crates</span>
                </div>
                <p className="text-2xs text-slate-600 leading-relaxed">
                  High-density memory foam padding and custom rigid transport cases fabricated to isolate analyzers from road impacts.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-slate-200">
                <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5 mb-1">
                  <Activity className="w-4 h-4 text-emerald-600" />
                  <span>Sanitized Weatherproof Vehicles</span>
                </div>
                <p className="text-2xs text-slate-600 leading-relaxed">
                  Deep-cleaned enclosed cargo bodies with hydraulic lift-gates providing level, tilt-free transfer of rollable medical carts.
                </p>
              </div>
            </div>

            {/* Testimonial Quote from SIC Hospital Medical Director */}
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-slate-900">
              <p className="text-xs sm:text-sm italic leading-relaxed text-slate-800">
                "Poawk Property Movers orchestrated our hospital transfer flawlessly. Every centrifuge, clinical analyzer, and ultrasound unit arrived in Accra calibrated and certified for immediate patient diagnostics. Outstanding care and professionalism."
              </p>
              <div className="mt-2 text-xs font-bold text-slate-900">
                — Dr. Andrews K. Quaye, Medical Director & Administrator, SIC Hospital
              </div>
            </div>

            {/* Direct Contact for Clinical / Laboratory Moves */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="https://wa.me/233240977141?text=Hello%20Poawk%20Property%20Movers,%20we%20have%20a%20medical,%20laboratory,%20or%20sensitive%20equipment%20relocation%20similar%20to%20SIC%20Hospital."
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-xs sm:text-sm transition-colors flex items-center gap-2"
              >
                <span>Consult Our Medical Move Specialist</span>
              </a>
              <span className="text-xs text-slate-500">
                Direct Desk: +233 (0) 24 097 7141
              </span>
            </div>

          </div>

          {/* Right Column: Case Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900 aspect-[4/3]">
              <img
                src="/src/assets/images/hero_sic_hospital_slide2_1793737780248.jpg"
                alt="Poawk Property Movers medical equipment relocation for SIC Hospital"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-slate-950/85 backdrop-blur-md text-white text-xs border border-slate-800">
                <span className="font-bold text-amber-400 block">SIC Hospital Lab Assets</span>
                <span className="text-2xs text-slate-300">
                  Precision crating & white-glove clinical installation in Accra
                </span>
              </div>
            </div>

            {/* Quantified Outcome Strip */}
            <div className="grid grid-cols-3 gap-2 mt-3 text-center">
              <div className="p-2.5 bg-white rounded-xl border border-slate-200">
                <div className="text-base font-extrabold text-slate-900 font-mono">100%</div>
                <div className="text-2xs text-slate-500">Calibration Retained</div>
              </div>
              <div className="p-2.5 bg-white rounded-xl border border-slate-200">
                <div className="text-base font-extrabold text-emerald-600 font-mono">0 Hrs</div>
                <div className="text-2xs text-slate-500">Lab Downtime</div>
              </div>
              <div className="p-2.5 bg-white rounded-xl border border-slate-200">
                <div className="text-base font-extrabold text-slate-900 font-mono">Zero</div>
                <div className="text-2xs text-slate-500">Optics Damage</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
