import React, { useState } from 'react';
import { DEFAULT_INVENTORY } from '../data/movingData';
import { InventoryItem } from '../types';
import { Package, Truck, Plus, Minus, RotateCcw, Check, Sparkles } from 'lucide-react';

interface InventoryCalculatorProps {
  onApplyInventory: (cbm: number, count: number) => void;
}

export const InventoryCalculator: React.FC<InventoryCalculatorProps> = ({ onApplyInventory }) => {
  const [items, setItems] = useState<InventoryItem[]>(DEFAULT_INVENTORY);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const updateCount = (id: string, delta: number) => {
    setItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newCount = Math.max(0, item.count + delta);
          return { ...item, count: newCount };
        }
        return item;
      })
    );
  };

  const resetInventory = () => {
    setItems(DEFAULT_INVENTORY);
  };

  // Calculations
  const totalCbm = Number(
    items.reduce((sum, item) => sum + item.cbm * item.count, 0).toFixed(1)
  );
  const totalItemCount = items.reduce((sum, item) => sum + item.count, 0);

  // Recommended logistics asset based on volume
  const getRecommendedTruck = () => {
    if (totalCbm <= 10) {
      return {
        type: '1.5-Ton Sprinter / Cargo Van',
        capacity: 'Up to 12 CBM',
        crew: '2 Logistics Handlers + Driver',
        bestFor: 'Studio apartment or light office equipment',
      };
    } else if (totalCbm <= 22) {
      return {
        type: '3.5-Ton Box Truck with Tail Lift',
        capacity: 'Up to 24 CBM',
        crew: '3-4 Logistics Handlers + Supervisor',
        bestFor: '2-3 Bedroom Apartment or Townhouse',
      };
    } else if (totalCbm <= 38) {
      return {
        type: '7.5-Ton Enclosed Heavy Moving Truck',
        capacity: 'Up to 40 CBM',
        crew: '5-6 Handlers + Packing Specialist',
        bestFor: '4+ Bedroom Executive Residence or Corporate Office',
      };
    } else {
      return {
        type: '20ft / 40ft High-Cube Shipping Container',
        capacity: '33 - 76 CBM',
        crew: 'Full Export Logistics Team',
        bestFor: 'International relocation or multi-office enterprise move',
      };
    }
  };

  const truckInfo = getRecommendedTruck();

  const filteredItems = activeCategory === 'all'
    ? items
    : items.filter((i) => i.category === activeCategory);

  return (
    <section id="inventory-calculator" className="py-16 sm:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-bold tracking-wider text-amber-600 mb-2">
              VOLUME & TRUCK SIZE PLANNER
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">
              Room-by-Room CBM Volume Estimator
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Logistics moving costs depend on cubic volume ($m^3$). Adjust your furniture and boxes below to see your total volume and our recommended vehicle configuration.
            </p>
          </div>

          <button
            type="button"
            onClick={resetInventory}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 px-3 py-2 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors self-start md:self-auto cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset to Standard 3-Bed Count</span>
          </button>
        </div>

        {/* Top Summary Bar - 3 Metric Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          
          <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-between">
            <div>
              <div className="text-xs font-bold text-amber-800 uppercase tracking-wide">
                Total Estimated Volume
              </div>
              <div className="text-3xl font-extrabold text-amber-900 font-mono tabular-nums mt-1">
                {totalCbm} <span className="text-xl font-normal text-amber-800">CBM (m³)</span>
              </div>
            </div>
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-900 flex items-center justify-center">
              <Package className="w-6 h-6" />
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900 text-white border border-slate-800 flex items-center justify-between">
            <div>
              <div className="text-xs font-mono text-amber-400 uppercase tracking-wide">
                Recommended Vehicle
              </div>
              <div className="text-base font-extrabold text-white mt-1 leading-snug">
                {truckInfo.type}
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                {truckInfo.crew}
              </div>
            </div>
            <div className="w-12 h-12 rounded-xl bg-slate-800 text-amber-400 flex items-center justify-center shrink-0">
              <Truck className="w-6 h-6" />
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
            <div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                Tracked Inventory Units
              </div>
              <div className="text-3xl font-extrabold text-slate-900 font-mono tabular-nums mt-1">
                {totalItemCount} <span className="text-xl font-normal text-slate-500">Items</span>
              </div>
              <div className="text-xs text-slate-500 mt-0.5">
                Estimated ~{Math.ceil(totalCbm * 1.8)} standard moving cartons needed
              </div>
            </div>
            <button
              onClick={() => onApplyInventory(totalCbm, totalItemCount)}
              className="px-3.5 py-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer"
            >
              Sync to Quote
            </button>
          </div>

        </div>

        {/* Category Filters (Clean Segmented Control Buttons) */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-100 rounded-xl mb-6 max-w-2xl">
          {[
            { id: 'all', label: 'All Items' },
            { id: 'living', label: 'Living Room' },
            { id: 'bedroom', label: 'Bedrooms' },
            { id: 'dining', label: 'Kitchen & Dining' },
            { id: 'office', label: 'Office' },
            { id: 'fragile', label: 'Fragile Electronics' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-2 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Inventory Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`p-4 rounded-xl border transition-all ${
                item.count > 0
                  ? 'border-slate-300 bg-white shadow-xs'
                  : 'border-slate-200 bg-slate-50/60 opacity-70'
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-semibold text-slate-900 leading-tight">
                  {item.name}
                </span>
                <span className="text-2xs font-mono text-slate-500 tabular-nums ml-2 shrink-0">
                  {item.cbm} m³
                </span>
              </div>

              <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-100">
                <span className="text-xs text-slate-500 font-mono">
                  Qty: <span className="font-bold text-slate-900 font-mono tabular-nums">{item.count}</span>
                </span>

                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => updateCount(item.id, -1)}
                    disabled={item.count === 0}
                    className="w-7 h-7 rounded-md bg-slate-100 hover:bg-slate-200 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center text-slate-700 transition-colors cursor-pointer"
                    aria-label={`Decrease ${item.name}`}
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => updateCount(item.id, 1)}
                    className="w-7 h-7 rounded-md bg-amber-400 hover:bg-amber-300 flex items-center justify-center text-slate-950 font-bold transition-colors cursor-pointer"
                    aria-label={`Increase ${item.name}`}
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Advice Banner */}
        <div className="mt-8 p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
            <span>
              <strong>Professional Survey Guarantee:</strong> If you are unsure about exact dimensions in your Accra home or office, our surveyor can take laser measurements at no cost.
            </span>
          </div>
          <a
            href="tel:+233240977141"
            className="font-bold text-slate-900 hover:text-amber-600 whitespace-nowrap shrink-0 transition-colors"
          >
            Call Dispatch: +233 24 097 7141 →
          </a>
        </div>

      </div>
    </section>
  );
};
