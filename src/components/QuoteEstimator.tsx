import React, { useState } from 'react';
import { 
  Calculator, 
  Send, 
  FileText, 
  CheckCircle2, 
  Building, 
  Home, 
  Globe2, 
  Layers, 
  DollarSign
} from 'lucide-react';
import { ACCRA_NEIGHBORHOODS, GHANA_REGIONS, INTERNATIONAL_DESTINATIONS } from '../data/movingData';
import { MoveType, PropertySize, PackingTier, QuoteRequest } from '../types';

interface QuoteEstimatorProps {
  onGenerateManifest: (quote: QuoteRequest, estimatedGhs: number, estimatedUsd: number) => void;
}

export const QuoteEstimator: React.FC<QuoteEstimatorProps> = ({ onGenerateManifest }) => {
  const [moveType, setMoveType] = useState<MoveType>('local');
  const [propertySize, setPropertySize] = useState<PropertySize>('apartment-2');
  const [packingTier, setPackingTier] = useState<PackingTier>('standard-pack');
  
  const [origin, setOrigin] = useState('Ayawaso Central / West / North / East');
  const [destination, setDestination] = useState('East Legon & Adjiringanor');
  const [destRegion, setDestRegion] = useState('Ashanti Region (Kumasi, Obuasi)');
  const [destInternational, setDestInternational] = useState('United Kingdom');
  
  const [floorsOrigin, setFloorsOrigin] = useState(1);
  const [floorsDest, setFloorsDest] = useState(1);
  const [hasElevatorOrigin, setHasElevatorOrigin] = useState(false);
  const [hasElevatorDest, setHasElevatorDest] = useState(false);
  
  const [currency, setCurrency] = useState<'GHS' | 'USD'>('GHS');
  
  const [heavyItems, setHeavyItems] = useState({
    piano: false,
    safe: false,
    serverRack: false,
    poolTable: false,
    labEquipment: false,
  });

  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [moveDate, setMoveDate] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Calculation logic calibrated for Ghanaian market economics (USD rate ~ 15.5 GHS)
  const calculatePricing = () => {
    let baseGhs = 0;

    // 1. Move Type & Distance base
    if (moveType === 'local') {
      baseGhs += 1400; // Local Accra base truck, driver, fuel
    } else if (moveType === 'inter-region') {
      baseGhs += 4800; // Long-distance inter-city fuel, highway tolls, overnight crew
    } else {
      baseGhs += 18500; // International export packaging, customs brokerage documentation, port haulage
    }

    // 2. Scale of move
    switch (propertySize) {
      case 'studio':
        baseGhs += 600;
        break;
      case 'apartment-2':
        baseGhs += 1400;
        break;
      case 'house-4':
        baseGhs += 2900;
        break;
      case 'office-small':
        baseGhs += 2200;
        break;
      case 'office-enterprise':
        baseGhs += 6500;
        break;
    }

    // 3. Packing Tier
    let packingGhs = 0;
    if (packingTier === 'standard-pack') {
      packingGhs = propertySize === 'house-4' || propertySize === 'office-enterprise' ? 1800 : 950;
    } else if (packingTier === 'white-glove') {
      packingGhs = propertySize === 'house-4' || propertySize === 'office-enterprise' ? 3600 : 2100;
    }

    // 4. Access (Stairs without elevator)
    let accessGhs = 0;
    if (!hasElevatorOrigin && floorsOrigin > 1) {
      accessGhs += (floorsOrigin - 1) * 200;
    }
    if (!hasElevatorDest && floorsDest > 1) {
      accessGhs += (floorsDest - 1) * 200;
    }

    // 5. Heavy specialty items
    let heavyGhs = 0;
    if (heavyItems.piano) heavyGhs += 950;
    if (heavyItems.safe) heavyGhs += 700;
    if (heavyItems.serverRack) heavyGhs += 1200;
    if (heavyItems.poolTable) heavyGhs += 800;
    if (heavyItems.labEquipment) heavyGhs += 1600; // Shock-mount crating for medical / lab equipment

    const totalGhs = baseGhs + packingGhs + accessGhs + heavyGhs;
    const totalUsd = Math.round(totalGhs / 15.5);

    return {
      totalGhs,
      totalUsd,
      baseGhs,
      packingGhs,
      accessGhs,
      heavyGhs,
    };
  };

  const pricing = calculatePricing();

  const getEffectiveDestination = () => {
    if (moveType === 'local') return destination;
    if (moveType === 'inter-region') return destRegion;
    return destInternational;
  };

  const handleSendWhatsApp = () => {
    const destStr = getEffectiveDestination();
    const sizeLabels: Record<PropertySize, string> = {
      'studio': 'Studio / 1-Bedroom',
      'apartment-2': '2-3 Bedroom Apartment / Townhouse',
      'house-4': '4+ Bedroom Villa / Family House',
      'office-small': 'Small Corporate Office (up to 15 desks)',
      'office-enterprise': 'Enterprise Office / Commercial (15-60+ desks)',
    };

    const text = `*New Relocation Quote Inquiry - Poawk Property Movers*
👤 Name: ${customerName || 'Potential Client'}
📱 Phone: ${customerPhone || 'Not provided yet'}
📅 Preferred Date: ${moveDate || 'Flexible'}
📦 Move Scale: ${sizeLabels[propertySize]}
📍 Origin: ${origin}
🏁 Destination: ${destStr} (${moveType.toUpperCase()})
🛡️ Packing Service: ${packingTier.toUpperCase()}
💰 Estimated Quote: GH₵ ${pricing.totalGhs.toLocaleString()} (~$${pricing.totalUsd.toLocaleString()})
Special Items: ${Object.entries(heavyItems).filter(([, v]) => v).map(([k]) => k).join(', ') || 'None'}

Please confirm availability and arrange a quick survey.`;

    window.open(`https://wa.me/233240977141?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const triggerManifestModal = () => {
    const quote: QuoteRequest = {
      moveType,
      propertySize,
      origin,
      destination: getEffectiveDestination(),
      packingTier,
      hasElevatorOrigin,
      hasElevatorDest,
      floorsOrigin,
      floorsDest,
      heavyItems,
      preferredDate: moveDate,
      customerName,
      customerPhone,
    };
    onGenerateManifest(quote, pricing.totalGhs, pricing.totalUsd);
  };

  return (
    <section id="quote-estimator" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold tracking-wider text-amber-600 mb-2">
            INSTANT LOGISTICS ESTIMATOR
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">
            Accra & Worldwide Moving Cost Estimator
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Configure your moving scale, origin in Accra, destination, and protective packaging requirements. Get an immediate, transparent estimate with direct WhatsApp transmission to our dispatch operations.
          </p>
        </div>

        {/* Main Grid: Form Controls (Left 7 cols) & Live Price Manifest (Right 5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Panel */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            
            {/* Step 1: Move Scope */}
            <div className="mb-8">
              <label className="block text-xs font-bold tracking-wider text-slate-700 mb-3">
                1. SELECT MOVE CLASSIFICATION
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <button
                  type="button"
                  onClick={() => setMoveType('local')}
                  className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                    moveType === 'local'
                      ? 'border-amber-500 bg-amber-50 text-slate-900 font-semibold shadow-xs'
                      : 'border-slate-200 hover:border-slate-300 text-slate-600'
                  }`}
                >
                  <Home className="w-4 h-4 mb-1.5 text-amber-600" />
                  <div className="text-sm font-bold">Local Greater Accra</div>
                  <div className="text-xs text-slate-500 mt-0.5">Ayawaso, Legon, Cantonments, Tema</div>
                </button>

                <button
                  type="button"
                  onClick={() => setMoveType('inter-region')}
                  className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                    moveType === 'inter-region'
                      ? 'border-amber-500 bg-amber-50 text-slate-900 font-semibold shadow-xs'
                      : 'border-slate-200 hover:border-slate-300 text-slate-600'
                  }`}
                >
                  <Building className="w-4 h-4 mb-1.5 text-amber-600" />
                  <div className="text-sm font-bold">Inter-Region Ghana</div>
                  <div className="text-xs text-slate-500 mt-0.5">Kumasi, Takoradi, Tamale & All Regions</div>
                </button>

                <button
                  type="button"
                  onClick={() => setMoveType('international')}
                  className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                    moveType === 'international'
                      ? 'border-amber-500 bg-amber-50 text-slate-900 font-semibold shadow-xs'
                      : 'border-slate-200 hover:border-slate-300 text-slate-600'
                  }`}
                >
                  <Globe2 className="w-4 h-4 mb-1.5 text-amber-600" />
                  <div className="text-sm font-bold">International Move</div>
                  <div className="text-xs text-slate-500 mt-0.5">UK, US, Canada, EU & 50+ Countries</div>
                </button>
              </div>
            </div>

            {/* Step 2: Scale of Move */}
            <div className="mb-8">
              <label className="block text-xs font-bold tracking-wider text-slate-700 mb-3">
                2. SCALE OF MOVE (HOUSEHOLD OR OFFICE)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {[
                  { id: 'studio', label: 'Studio / 1-Bed', desc: 'Single room / Bachelor' },
                  { id: 'apartment-2', label: '2-3 Bed Home', desc: 'Flat or medium house' },
                  { id: 'house-4', label: '4+ Bed Villa', desc: 'Large family residence' },
                  { id: 'office-small', label: 'Office (1-15 desks)', desc: 'Small business' },
                  { id: 'office-enterprise', label: 'Corporate 15-60+', desc: 'Multi-floor facility' },
                ].map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setPropertySize(s.id as PropertySize)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      propertySize === s.id
                        ? 'border-amber-500 bg-amber-50 text-slate-900 font-semibold shadow-xs'
                        : 'border-slate-200 hover:border-slate-300 text-slate-600'
                    }`}
                  >
                    <div className="text-sm font-bold">{s.label}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{s.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Origin & Destination */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  ACCRA PICKUP LOCATION
                </label>
                <select
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium"
                >
                  {ACCRA_NEIGHBORHOODS.map((n) => (
                    <option key={n} value={n}>{n}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  DESTINATION LOCATION
                </label>
                {moveType === 'local' && (
                  <select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium"
                  >
                    {ACCRA_NEIGHBORHOODS.map((n) => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>
                )}

                {moveType === 'inter-region' && (
                  <select
                    value={destRegion}
                    onChange={(e) => setDestRegion(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium"
                  >
                    {GHANA_REGIONS.map((r) => (
                      <option key={r} value={r}>{r}</option>
                    ))}
                  </select>
                )}

                {moveType === 'international' && (
                  <select
                    value={destInternational}
                    onChange={(e) => setDestInternational(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium"
                  >
                    {INTERNATIONAL_DESTINATIONS.map((d) => (
                      <option key={d.country} value={d.country}>
                        {d.country} ({d.hub})
                      </option>
                    ))}
                  </select>
                )}
              </div>
            </div>

            {/* Step 4: Packing & Crating Tier */}
            <div className="mb-8">
              <label className="block text-xs font-bold tracking-wider text-slate-700 mb-3">
                3. PACKING & WRAPPING PROTECTION LEVEL
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  {
                    id: 'transport-only',
                    title: 'Transport Only',
                    desc: 'You pack your cartons; we provide vehicle, driver, and heavy lifting loading crew.'
                  },
                  {
                    id: 'standard-pack',
                    title: 'Standard Protective',
                    desc: 'Our crew provides boxes, tape, stretch film, and furniture blankets.'
                  },
                  {
                    id: 'white-glove',
                    title: 'White-Glove VIP',
                    desc: 'Custom wooden crating, bubble wrap, fragile electronics, uncrating & setup at destination.'
                  }
                ].map((tier) => (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => setPackingTier(tier.id as PackingTier)}
                    className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                      packingTier === tier.id
                        ? 'border-amber-500 bg-amber-50 text-slate-900 font-semibold shadow-xs'
                        : 'border-slate-200 hover:border-slate-300 text-slate-600'
                    }`}
                  >
                    <div className="text-sm font-bold">{tier.title}</div>
                    <div className="text-xs text-slate-500 mt-1 leading-snug">{tier.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 5: Access & Specialty Items */}
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <div className="text-xs font-bold text-slate-700 mb-3">
                SPECIALTY ITEMS & ACCESS
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={heavyItems.piano}
                    onChange={(e) => setHeavyItems({ ...heavyItems, piano: e.target.checked })}
                    className="rounded text-amber-500 focus:ring-amber-400 w-4 h-4"
                  />
                  <span className="font-medium text-slate-700">Acoustic Piano</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={heavyItems.safe}
                    onChange={(e) => setHeavyItems({ ...heavyItems, safe: e.target.checked })}
                    className="rounded text-amber-500 focus:ring-amber-400 w-4 h-4"
                  />
                  <span className="font-medium text-slate-700">Heavy Metal Safe</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={heavyItems.serverRack}
                    onChange={(e) => setHeavyItems({ ...heavyItems, serverRack: e.target.checked })}
                    className="rounded text-amber-500 focus:ring-amber-400 w-4 h-4"
                  />
                  <span className="font-medium text-slate-700">IT Server Rack</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={heavyItems.poolTable}
                    onChange={(e) => setHeavyItems({ ...heavyItems, poolTable: e.target.checked })}
                    className="rounded text-amber-500 focus:ring-amber-400 w-4 h-4"
                  />
                  <span className="font-medium text-slate-700">Pool Table</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer col-span-2 sm:col-span-4 mt-1 pt-2 border-t border-slate-200">
                  <input
                    type="checkbox"
                    checked={heavyItems.labEquipment}
                    onChange={(e) => setHeavyItems({ ...heavyItems, labEquipment: e.target.checked })}
                    className="rounded text-blue-600 focus:ring-blue-500 w-4 h-4"
                  />
                  <span className="font-medium text-slate-900">
                    Hospital Clinical Lab Equipment & Analyzers (As moved for SIC Hospital)
                  </span>
                </label>
              </div>

              {/* Elevator / Stairs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 pt-4 border-t border-slate-200 text-xs text-slate-700">
                <div className="flex items-center justify-between">
                  <span>Origin has service elevator?</span>
                  <button
                    type="button"
                    onClick={() => setHasElevatorOrigin(!hasElevatorOrigin)}
                    className={`px-3 py-1 rounded text-xs font-semibold cursor-pointer ${
                      hasElevatorOrigin ? 'bg-amber-100 text-amber-800' : 'bg-slate-200 text-slate-700'
                    }`}
                  >
                    {hasElevatorOrigin ? 'Yes' : 'No (Stairs)'}
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <span>Destination has elevator?</span>
                  <button
                    type="button"
                    onClick={() => setHasElevatorDest(!hasElevatorDest)}
                    className={`px-3 py-1 rounded text-xs font-semibold cursor-pointer ${
                      hasElevatorDest ? 'bg-amber-100 text-amber-800' : 'bg-slate-200 text-slate-700'
                    }`}
                  >
                    {hasElevatorDest ? 'Yes' : 'No (Stairs)'}
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Pricing Summary Card & Direct Booking Dispatch */}
          <div className="lg:col-span-5 sticky top-24 space-y-6">
            
            <div className="bg-slate-900 text-white rounded-2xl border border-slate-800 p-6 sm:p-7 shadow-xl">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                  <span className="text-xs font-mono text-amber-400 font-semibold tracking-wider">
                    TRANSPARENT QUOTE
                  </span>
                  <h3 className="text-lg font-bold text-white">Estimated Relocation Cost</h3>
                </div>

                {/* Currency Switcher */}
                <div className="flex items-center gap-1 p-1 bg-slate-800 rounded-lg text-xs font-semibold">
                  <button
                    type="button"
                    onClick={() => setCurrency('GHS')}
                    className={`px-2.5 py-1 rounded cursor-pointer ${currency === 'GHS' ? 'bg-amber-400 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'}`}
                  >
                    GH₵ (GHS)
                  </button>
                  <button
                    type="button"
                    onClick={() => setCurrency('USD')}
                    className={`px-2.5 py-1 rounded cursor-pointer ${currency === 'USD' ? 'bg-amber-400 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'}`}
                  >
                    $ (USD)
                  </button>
                </div>
              </div>

              {/* Total Display */}
              <div className="py-6">
                <div className="text-xs text-slate-400 uppercase tracking-wide">
                  Approximate Total Cost
                </div>
                <div className="text-4xl sm:text-5xl font-extrabold text-amber-400 font-mono tabular-nums tracking-tight mt-1">
                  {currency === 'GHS' 
                    ? `GH₵ ${pricing.totalGhs.toLocaleString()}`
                    : `$${pricing.totalUsd.toLocaleString()}`}
                </div>
                <div className="text-xs text-slate-400 mt-2 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Includes weatherproof vehicle, moving crew, fuel, and transit insurance</span>
                </div>
              </div>

              {/* Cost Itemization */}
              <div className="space-y-2.5 py-4 border-y border-slate-800 text-xs text-slate-300">
                <div className="flex justify-between">
                  <span className="text-slate-400">Base Transport & Haulage:</span>
                  <span className="font-mono tabular-nums text-white">
                    {currency === 'GHS' ? `GH₵ ${pricing.baseGhs.toLocaleString()}` : `$${Math.round(pricing.baseGhs / 15.5)}`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Protective Packing & Materials:</span>
                  <span className="font-mono tabular-nums text-white">
                    {pricing.packingGhs > 0 
                      ? (currency === 'GHS' ? `GH₵ ${pricing.packingGhs.toLocaleString()}` : `$${Math.round(pricing.packingGhs / 15.5)}`)
                      : 'Included / Self'}
                  </span>
                </div>
                {pricing.heavyGhs > 0 && (
                  <div className="flex justify-between">
                    <span className="text-slate-400">Specialty Heavy Crating:</span>
                    <span className="font-mono tabular-nums text-white">
                      {currency === 'GHS' ? `GH₵ ${pricing.heavyGhs.toLocaleString()}` : `$${Math.round(pricing.heavyGhs / 15.5)}`}
                    </span>
                  </div>
                )}
                {pricing.accessGhs > 0 && (
                  <div className="flex justify-between">
                    <span className="text-slate-400">Multi-Flight Stairs Handling:</span>
                    <span className="font-mono tabular-nums text-white">
                      {currency === 'GHS' ? `GH₵ ${pricing.accessGhs.toLocaleString()}` : `$${Math.round(pricing.accessGhs / 15.5)}`}
                    </span>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="mt-6 space-y-3">
                <button
                  type="button"
                  onClick={handleSendWhatsApp}
                  className="w-full py-3.5 px-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md text-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Quote to WhatsApp (+233 24 097 7141)</span>
                </button>

                <button
                  type="button"
                  onClick={triggerManifestModal}
                  className="w-full py-3 px-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl border border-slate-700 transition-all flex items-center justify-center gap-2 cursor-pointer text-xs sm:text-sm"
                >
                  <FileText className="w-4 h-4 text-amber-400" />
                  <span>View & Print Official Move Manifest</span>
                </button>
              </div>

              {/* Direct Ayawaso dispatch guarantee */}
              <div className="mt-5 text-center text-xs text-slate-400">
                Ayawaso District Dispatch Desk: <span className="text-white font-semibold">+233 (0) 24 097 7141</span>
              </div>

            </div>

            {/* Quick Contact Callback Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h4 className="text-sm font-bold text-slate-900 mb-2">
                Need an Immediate Physical Survey in Accra?
              </h4>
              <p className="text-xs text-slate-600 mb-4">
                Our survey manager can visit your residence or commercial office in Ayawaso, East Legon, Cantonments, or anywhere in Greater Accra for an exact assessment.
              </p>

              {submitted ? (
                <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 flex items-center gap-2 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Survey requested! We will call your phone shortly.</span>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="space-y-3">
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="tel"
                      required
                      placeholder="Phone (e.g. 024 097 7141)"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                    <input
                      type="date"
                      value={moveDate}
                      onChange={(e) => setMoveDate(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2.5 px-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg text-xs transition-colors cursor-pointer"
                  >
                    Request Free On-Site Survey
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
