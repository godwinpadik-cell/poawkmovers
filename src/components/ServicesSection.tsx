import React from 'react';
import { 
  Truck, 
  Globe2, 
  ShieldAlert, 
  Building2, 
  CheckCircle2, 
  ArrowUpRight,
  Stethoscope
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const services = [
    {
      id: 'local-moves',
      num: '01',
      title: 'Local Accra & Inter-Region Relocations',
      kicker: 'Accra Metro & All 16 Ghana Regions',
      description: 'Engineered for smooth transit across Greater Accra and long-distance inter-city corridors. Whether moving an apartment in East Legon, a family estate in Cantonments, or relocating to Kumasi, Takoradi, or Tamale, our branded Poawk Property Movers fleet and route supervisors ensure zero damage and punctual arrival.',
      image: '/src/assets/images/hero_truck_poawk_1793740555389.jpg',
      features: [
        'Door-to-door transit across Greater Accra & 16 administrative regions',
        'Weatherproof box trucks branded Poawk Property Movers with hydraulic lift gates',
        'Experienced handling crews in Poawk Property Movers uniforms trained in gated community logistics',
        'Direct Ghana highway route management (Kumasi, Takoradi, Cape Coast, Tamale, Sunyani)'
      ],
      ctaText: 'Calculate Local / Regional Move'
    },
    {
      id: 'hospital-medical',
      num: '02',
      title: 'Hospital, Clinical Laboratory & Medical Relocations',
      kicker: 'Proven Relocation for SIC Hospital & Healthcare Facilities',
      description: 'Specialized healthcare moving requires exceptional protocol. As demonstrated in our successful transfer of SIC Hospital, we transport sensitive clinical laboratory equipment, automated biochemistry analyzers, centrifuges, specimen cold-storage units, and ultrasound scanners using anti-vibration shock mounts and timber crating with zero calibration loss.',
      image: '/src/assets/images/hospital_medical_relocation_1793739492637.jpg',
      features: [
        'Anti-vibration transport & shock-absorbing timber crates for sensitive medical analyzers',
        'Pre-move decontamination protocols and secure handling of clinical laboratory units',
        'Patient records, confidential archives, and pharmacy storage security seals',
        'Zero-downtime phased relocation ensuring clinical wards resume without disruption'
      ],
      ctaText: 'Inquire About Medical & Lab Moves'
    },
    {
      id: 'packing-unpacking',
      num: '03',
      title: 'White-Glove Packing & Branded Crating',
      kicker: 'Customizable Wrapping for Furniture & Sensitive Electronics',
      description: 'Packing is the single most critical factor in avoiding moving damage. Our specialists arrive in official Poawk Property Movers uniforms with branded double-walled heavy cartons, shock-absorbing bubble cushioning, stretch film, wardrobe boxes for hanging garments, and tailor-made timber crates for marble, art, and curved monitors.',
      image: '/src/assets/images/packing_boxes_poawk_1793740555190.jpg',
      features: [
        'Poawk Property Movers branded double-wall cartons & custom timber crates',
        'Anti-static bubble wrap and foam cushioning for TVs and computer monitors',
        'Double-layer corrugated wardrobe boxes allowing garments to remain on hangers',
        'Full post-move uncrating, room assembly, and debris removal'
      ],
      ctaText: 'Book Packing Services'
    },
    {
      id: 'corporate-office',
      num: '04',
      title: 'Structured Corporate & Commercial Transfers',
      kicker: 'Engineered to Eliminate Business & Trading Downtime',
      description: 'Relocating an office demands military-level coordination. We execute weekend and overnight transfers so your staff can leave their old office Friday afternoon and log in at their new workstation Monday at 8:00 AM. We specialize in server rack transport, ergonomic desk assembly, and security-sealed archive bins.',
      image: '/src/assets/images/corporate_office_poawk_1793740556960.jpg',
      features: [
        'Weekend, evening, and holiday relocation scheduling to prevent revenue disruption',
        'Numbered color-coded crate systems branded Poawk Property Movers',
        'Specialized IT transport for servers, switches, monitors, and telecom racks by Poawk crew',
        'Safe commercial disposal or secure document storage coordination'
      ],
      ctaText: 'Plan Corporate Relocation'
    },
    {
      id: 'international-relocation',
      num: '05',
      title: 'International Household & Corporate Relocations',
      kicker: 'Air & Ocean Freight to 50+ Countries Worldwide',
      description: 'Poawk Property Movers orchestrates global moving logistics connecting Ghana to the UK, USA, Canada, Europe, UAE, South Africa, and beyond. We handle export customs documentation, custom stenciled crating to international phytosanitary standards (ISPM 15), container drayage, and global destination delivery.',
      image: '/src/assets/images/export_crate_poawk_1793740585877.jpg',
      features: [
        'Full Container Load (FCL 20ft & 40ft) and Less-than-Container Load (LCL) options',
        'Express air freight for urgent diplomatic, executive, and high-value cargo',
        'Complete Ghana Customs (GRA) documentation, bill of lading & export clearance',
        'Door-to-door destination delivery partners across 50+ countries worldwide'
      ],
      ctaText: 'Explore International Relocation'
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-bold tracking-wider text-amber-600 mb-2">
            SPECIALIZED RELOCATION SOLUTIONS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">
            End-to-End Moving Excellence in Ghana & Globally
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Headquartered in Ayawaso district, Accra, Poawk Property Movers delivers specialized service pillars tailored to residential households, hospital clinical laboratories, corporate enterprises, and overseas moves.
          </p>
        </div>

        {/* Asymmetric Service Cards */}
        <div className="space-y-16">
          {services.map((svc, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={svc.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-8 rounded-3xl border border-slate-200/90 hover:border-slate-300 transition-all bg-slate-50/50"
              >
                
                {/* Visual Image Column */}
                <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-200 border border-slate-200 shadow-sm group">
                    <img
                      src={svc.image}
                      alt={svc.title}
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-md text-white text-xs font-mono font-bold">
                      {svc.num}
                    </div>
                  </div>
                </div>

                {/* Text Content Column */}
                <div className={`lg:col-span-7 ${isEven ? 'lg:order-2' : 'lg:order-1'} flex flex-col justify-center`}>
                  
                  <div className="text-xs font-bold text-blue-700 uppercase tracking-wide mb-2">
                    {svc.kicker}
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4">
                    {svc.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                    {svc.description}
                  </p>

                  {/* Bullet points */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {svc.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Single-line button */}
                  <div>
                    <button
                      onClick={() => onSelectService(svc.title)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm rounded-xl transition-all cursor-pointer group"
                    >
                      <span>{svc.ctaText}</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-amber-400" />
                    </button>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
