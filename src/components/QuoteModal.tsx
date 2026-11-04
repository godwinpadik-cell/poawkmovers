import React from 'react';
import { X, Printer, Send, ShieldCheck, Truck, MapPin } from 'lucide-react';
import { QuoteRequest } from '../types';

interface QuoteModalProps {
  quote: QuoteRequest | null;
  totalGhs: number;
  totalUsd: number;
  onClose: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  quote,
  totalGhs,
  totalUsd,
  onClose,
}) => {
  if (!quote) return null;

  const quoteRefNumber = `OPM-GH-${Math.floor(100000 + Math.random() * 900000)}`;
  const todayStr = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });

  const handlePrint = () => {
    window.print();
  };

  const handleShareWhatsApp = () => {
    const text = `*Poawk Property Movers - Official Move Manifest & Quote*
Ref: ${quoteRefNumber}
Client: ${quote.customerName || 'Valued Client'}
Date: ${todayStr}
From: ${quote.origin}
To: ${quote.destination}
Scale: ${quote.propertySize}
Tier: ${quote.packingTier}
Amount: GH₵ ${totalGhs.toLocaleString()} (~$${totalUsd.toLocaleString()})
Dispatch Desk: +233 24 097 7141`;

    window.open(`https://wa.me/233240977141?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer no-print"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Printable Manifest Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-200 gap-4">
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/logo.jpg"
                alt="Poawk Property Movers Official Logo"
                className="w-12 h-12 object-contain rounded-lg border border-slate-200 bg-white p-0.5 shadow-xs"
              />
              <div>
                <span className="text-xl font-extrabold text-slate-900 tracking-tight block leading-tight">
                  Poawk Property Movers
                </span>
                <span className="text-[10px] font-mono text-sky-600 font-bold tracking-wider uppercase block">
                  What Can't We Move?
                </span>
              </div>
            </div>
            <div className="text-xs text-slate-500 mt-2 flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-amber-600" />
              <span>Ayawaso District, Greater Accra, Ghana · Tel: +233 (0) 24 097 7141</span>
            </div>
          </div>

          <div className="text-left sm:text-right">
            <span className="text-2xs font-mono font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded">
              OFFICIAL ESTIMATE
            </span>
            <div className="text-xs font-mono text-slate-600 font-bold mt-1">
              Ref: {quoteRefNumber}
            </div>
            <div className="text-2xs text-slate-400">Date: {todayStr}</div>
          </div>
        </div>

        {/* Client & Route Metadata */}
        <div className="grid grid-cols-2 gap-4 py-5 text-xs border-b border-slate-100">
          <div>
            <span className="text-slate-400 block font-medium">Prepared For:</span>
            <span className="font-bold text-slate-900 block text-sm">
              {quote.customerName || 'Valued Client'}
            </span>
            <span className="text-slate-600">{quote.customerPhone || 'Contact pending'}</span>
          </div>
          <div>
            <span className="text-slate-400 block font-medium">Relocation Route:</span>
            <span className="font-bold text-slate-900 block">
              {quote.origin}
            </span>
            <span className="text-amber-700 font-medium">
              ↓ {quote.destination} ({quote.moveType.toUpperCase()})
            </span>
          </div>
        </div>

        {/* Move Specifications Table */}
        <div className="py-4 space-y-2 text-xs">
          <div className="flex justify-between py-1.5 border-b border-slate-100">
            <span className="text-slate-500">Property / Relocation Scale:</span>
            <span className="font-bold text-slate-900">{quote.propertySize}</span>
          </div>
          <div className="flex justify-between py-1.5 border-b border-slate-100">
            <span className="text-slate-500">Packing Protection Service:</span>
            <span className="font-bold text-slate-900">{quote.packingTier}</span>
          </div>
          <div className="flex justify-between py-1.5 border-b border-slate-100">
            <span className="text-slate-500">Vehicle Specification:</span>
            <span className="font-bold text-slate-900">Enclosed Weatherproof Truck with Tail Lift</span>
          </div>
          <div className="flex justify-between py-1.5 border-b border-slate-100">
            <span className="text-slate-500">Transit Cover:</span>
            <span className="font-bold text-emerald-700">Commercial In-Transit Protection Included</span>
          </div>
          {Object.entries(quote.heavyItems).some(([, v]) => v) && (
            <div className="flex justify-between py-1.5 border-b border-slate-100">
              <span className="text-slate-500">Specialty Heavy Handling:</span>
              <span className="font-bold text-slate-900">
                {Object.entries(quote.heavyItems).filter(([, v]) => v).map(([k]) => k).join(', ')}
              </span>
            </div>
          )}
        </div>

        {/* Pricing Total Box */}
        <div className="my-4 p-4 rounded-xl bg-slate-900 text-white flex items-center justify-between">
          <div>
            <div className="text-2xs font-mono text-amber-400 uppercase tracking-wider">
              Estimated Relocation Sum
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold font-mono tabular-nums text-white mt-0.5">
              GH₵ {totalGhs.toLocaleString()}
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xs text-slate-400">Equivalent USD</div>
            <div className="text-lg font-bold font-mono text-amber-400">
              ${totalUsd.toLocaleString()}
            </div>
          </div>
        </div>

        {/* Terms note */}
        <p className="text-2xs text-slate-500 leading-normal mb-6">
          * Note: Estimates are based on standard access and specified volume. Final binding invoice is validated by physical or video survey. Poawk Property Movers / OPM International operates in strict accordance with Ghanaian logistics transport regulations.
        </p>

        {/* Modal Buttons (Hidden in print) */}
        <div className="flex flex-wrap items-center justify-end gap-3 no-print pt-4 border-t border-slate-100">
          <button
            type="button"
            onClick={handlePrint}
            className="px-4 py-2.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors flex items-center gap-2 cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>Print Manifest</span>
          </button>

          <button
            type="button"
            onClick={handleShareWhatsApp}
            className="px-5 py-2.5 text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
          >
            <Send className="w-4 h-4" />
            <span>Send to WhatsApp (+233 24 097 7141)</span>
          </button>
        </div>

      </div>
    </div>
  );
};
