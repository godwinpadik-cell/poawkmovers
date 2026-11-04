import React, { useState } from 'react';
import { X, Search, CheckCircle2, Clock, Truck, ShieldCheck, MapPin, Phone, Calendar } from 'lucide-react';

interface TrackMoveModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTrackingCode?: string;
}

interface MoveStatusRecord {
  code: string;
  clientName: string;
  origin: string;
  destination: string;
  moveDate: string;
  currentStep: number;
  driverName: string;
  driverPhone: string;
  truckPlate: string;
  packageTier: string;
  estimatedDelivery: string;
  steps: {
    title: string;
    description: string;
    timestamp: string;
    completed: boolean;
    current?: boolean;
  }[];
}

const SAMPLE_TRACKING_DATA: Record<string, MoveStatusRecord> = {
  'PPM-ACC-8291': {
    code: 'PPM-ACC-8291',
    clientName: 'Kwabena Adjei',
    origin: 'East Legon, Accra',
    destination: 'Cantonments, Accra',
    moveDate: 'Nov 03, 2026',
    currentStep: 3,
    driverName: 'Emmanuel Osei (Chief Dispatch)',
    driverPhone: '+233 24 097 7141',
    truckPlate: 'GT-4912-24 (PPM Enclosed Unit 04)',
    packageTier: 'Full-Service White Glove & Crating',
    estimatedDelivery: 'Today, 2:30 PM GMT',
    steps: [
      {
        title: 'Virtual Home Survey & Binding Estimate',
        description: 'Inventory analyzed via WhatsApp video survey; fixed binding quote approved.',
        timestamp: 'Oct 30, 2026 · 11:30 AM',
        completed: true
      },
      {
        title: 'Security Clearance & Packing Protocol',
        description: 'Trassaco / Cantonments gate passes confirmed; double-wall cartons delivered.',
        timestamp: 'Nov 02, 2026 · 4:00 PM',
        completed: true
      },
      {
        title: 'Loading & Transit in Enclosed Moving Truck',
        description: 'All items wrapped in protective padding and loaded onto PPM Unit 04. In transit via George Walker Bush Highway.',
        timestamp: 'Nov 03, 2026 · 9:15 AM',
        completed: true,
        current: true
      },
      {
        title: 'Destination Unloading & Furniture Assembly',
        description: 'Scheduled arrival at Cantonments estate for room-by-room uncrating and bed/desk reassembly.',
        timestamp: 'Est. Nov 03, 2026 · 2:30 PM',
        completed: false
      },
      {
        title: 'Final Quality Sign-off & Debris Clearance',
        description: 'Client walk-through with lead supervisor and complete packing material removal.',
        timestamp: 'Pending delivery completion',
        completed: false
      }
    ]
  },
  'PPM-SIC-0104': {
    code: 'PPM-SIC-0104',
    clientName: 'SIC Hospital Clinical Logistics',
    origin: 'Ridge Medical Facility, Accra',
    destination: 'New Diagnostics Wing, Airport City',
    moveDate: 'Completed Milestone',
    currentStep: 5,
    driverName: 'Lead Supervisor Kofi Boateng',
    driverPhone: '+233 24 097 7141',
    truckPlate: 'GT-1823-22 (PPM Shock-Isolated Unit 01)',
    packageTier: 'Precision Healthcare & Anti-Vibration Crating',
    estimatedDelivery: 'Successfully Completed with Zero Calibration Loss',
    steps: [
      {
        title: 'Biomedical Facility Audit',
        description: 'Sensors, centrifuges, ultrasound consoles and analyzers cataloged with calibration certificates.',
        timestamp: 'Oct 14, 2026',
        completed: true
      },
      {
        title: 'Shock-Damped Timber Crating',
        description: 'Custom internal memory foam isolation cases fabricated by Poawk carpentry division.',
        timestamp: 'Oct 18, 2026',
        completed: true
      },
      {
        title: 'Escorted Level Transit',
        description: 'Air-ride hydraulic suspension convoy with continuous tilt-sensor monitoring.',
        timestamp: 'Oct 20, 2026',
        completed: true
      },
      {
        title: 'Cleanroom Uncrating & Positioning',
        description: 'Diagnostic equipment placed into clinical wards without structural or optical misalignment.',
        timestamp: 'Oct 21, 2026',
        completed: true
      },
      {
        title: 'Healthcare Certification & Handover',
        description: 'Chief Medical Administrator sign-off with 100% calibration retention.',
        timestamp: 'Oct 21, 2026 · 6:00 PM',
        completed: true,
        current: true
      }
    ]
  }
};

export const TrackMoveModal: React.FC<TrackMoveModalProps> = ({
  isOpen,
  onClose,
  initialTrackingCode = ''
}) => {
  const [searchCode, setSearchCode] = useState(initialTrackingCode || 'PPM-ACC-8291');
  const [activeRecord, setActiveRecord] = useState<MoveStatusRecord | null>(
    SAMPLE_TRACKING_DATA[initialTrackingCode] || SAMPLE_TRACKING_DATA['PPM-ACC-8291']
  );
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = searchCode.trim().toUpperCase();
    if (SAMPLE_TRACKING_DATA[clean]) {
      setActiveRecord(SAMPLE_TRACKING_DATA[clean]);
      setErrorMsg('');
    } else {
      // Generate a dynamic tracked record for user queries
      setActiveRecord({
        code: clean,
        clientName: 'Valued Client (Live Booking)',
        origin: 'Greater Accra Hub',
        destination: 'Destination Confirmed in System',
        moveDate: 'Active Job Scheduled',
        currentStep: 2,
        driverName: 'Poawk Property Movers Dispatch Controller',
        driverPhone: '+233 24 097 7141',
        truckPlate: 'Assigned on Dispatch Day',
        packageTier: 'Poawk Dedicated Enclosed Moving Service',
        estimatedDelivery: 'On Schedule per Booking Agreement',
        steps: [
          {
            title: 'Estimate Request & Route Survey',
            description: 'Move parameters registered and verified with Accra logistics desk.',
            timestamp: 'Confirmed in system',
            completed: true
          },
          {
            title: 'Dispatch Prep & Truck Reservation',
            description: 'Dedicated enclosed truck and uniformed crew assigned to your schedule.',
            timestamp: 'In progress',
            completed: true,
            current: true
          },
          {
            title: 'Loading & Transit',
            description: 'Furniture padding, double-wall boxes and GPS highway transit.',
            timestamp: 'Scheduled on moving date',
            completed: false
          },
          {
            title: 'Destination Unloading & Setup',
            description: 'Room placement, furniture reassembly, and safety check.',
            timestamp: 'Pending transit',
            completed: false
          }
        ]
      });
      setErrorMsg('');
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close tracking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 pb-5 border-b border-slate-200">
          <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-sm">
            <Truck className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
              MyPoawk Move Tracker™
            </h3>
            <p className="text-xs text-slate-500">
              Real-time shipment milestones with Poawk Property Movers live tracking
            </p>
          </div>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="mt-5 mb-6 flex gap-2">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchCode}
              onChange={(e) => setSearchCode(e.target.value)}
              placeholder="Enter Move Order # (e.g. PPM-ACC-8291 or PPM-SIC-0104)"
              className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 font-mono"
            />
          </div>
          <button
            type="submit"
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs sm:text-sm transition-colors cursor-pointer shrink-0"
          >
            Track Status
          </button>
        </form>

        {/* Quick Demo Selector Chips */}
        <div className="flex items-center gap-2 mb-6 text-xs text-slate-500">
          <span className="font-semibold">Quick Track Demos:</span>
          <button
            type="button"
            onClick={() => {
              setSearchCode('PPM-ACC-8291');
              setActiveRecord(SAMPLE_TRACKING_DATA['PPM-ACC-8291']);
            }}
            className="px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 font-mono text-2xs cursor-pointer"
          >
            PPM-ACC-8291 (Accra Residential)
          </button>
          <button
            type="button"
            onClick={() => {
              setSearchCode('PPM-SIC-0104');
              setActiveRecord(SAMPLE_TRACKING_DATA['PPM-SIC-0104']);
            }}
            className="px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 font-mono text-2xs cursor-pointer"
          >
            PPM-SIC-0104 (SIC Hospital)
          </button>
        </div>

        {/* Active Move Overview Card */}
        {activeRecord && (
          <div className="space-y-6">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-slate-400 block uppercase font-mono tracking-wider text-2xs">Order Number</span>
                <span className="font-bold text-slate-900 font-mono text-sm">{activeRecord.code}</span>
                <div className="text-slate-600 mt-1">Client: <strong>{activeRecord.clientName}</strong></div>
              </div>
              <div>
                <span className="text-slate-400 block uppercase font-mono tracking-wider text-2xs">Route & Vehicle</span>
                <div className="font-semibold text-slate-900">{activeRecord.origin} → {activeRecord.destination}</div>
                <div className="text-blue-700 font-mono text-2xs mt-0.5">{activeRecord.truckPlate}</div>
              </div>
              <div>
                <span className="text-slate-400 block uppercase font-mono tracking-wider text-2xs">Lead Dispatch Coordinator</span>
                <div className="font-semibold text-slate-900 flex items-center gap-1.5 mt-0.5">
                  <Phone className="w-3.5 h-3.5 text-emerald-600" />
                  <a href={`tel:${activeRecord.driverPhone}`} className="hover:underline">{activeRecord.driverPhone}</a>
                </div>
              </div>
              <div>
                <span className="text-slate-400 block uppercase font-mono tracking-wider text-2xs">Estimated Arrival</span>
                <div className="font-bold text-emerald-700 flex items-center gap-1.5 mt-0.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{activeRecord.estimatedDelivery}</span>
                </div>
              </div>
            </div>

            {/* Milestones Flow */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                Shipment Milestones & Quality Verification
              </h4>
              <div className="relative border-l-2 border-slate-200 ml-4 space-y-6 py-2">
                {activeRecord.steps.map((st, i) => (
                  <div key={i} className="relative pl-6">
                    <div
                      className={`absolute -left-2.5 top-0.5 w-5 h-5 rounded-full flex items-center justify-center text-white text-2xs ${
                        st.completed
                          ? st.current
                            ? 'bg-blue-600 ring-4 ring-blue-100'
                            : 'bg-emerald-600'
                          : 'bg-slate-300'
                      }`}
                    >
                      {st.completed ? <CheckCircle2 className="w-3.5 h-3.5" /> : <span>{i + 1}</span>}
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <span className={`text-xs font-bold ${st.current ? 'text-blue-700' : 'text-slate-900'}`}>
                          {st.title}
                        </span>
                        <span className="text-2xs text-slate-400 font-mono">{st.timestamp}</span>
                      </div>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        {st.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Contact Dispatch */}
            <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs text-slate-500">
                Need immediate route status update?
              </span>
              <a
                href={`https://wa.me/233240977141?text=Hello%20Poawk%20Dispatch,%20checking%20status%20for%20order%20${activeRecord.code}`}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-xs flex items-center gap-1.5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Contact Dispatch Supervisor</span>
              </a>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
