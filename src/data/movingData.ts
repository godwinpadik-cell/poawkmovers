import { InventoryItem, ChecklistItem } from '../types';

export const ACCRA_NEIGHBORHOODS = [
  'Ayawaso Central / West / North / East',
  'East Legon & Adjiringanor',
  'Airport Residential Area',
  'Cantonments & Labone',
  'Osu & Ridge',
  'Dzorwulu & Roman Ridge',
  'Achimota & Dome',
  'Spintex & Baatsona',
  'Tema (Community 1 - 25)',
  'Dansoman & Sakaman',
  'Haatso & Agbogba',
  'Madina & Adenta',
  'Pokuase & Amasaman',
  'Kasoa / Weija Border',
  'Other Greater Accra District'
];

export const GHANA_REGIONS = [
  'Greater Accra Region',
  'Ashanti Region (Kumasi, Obuasi)',
  'Western Region (Sekondi-Takoradi, Tarkwa)',
  'Central Region (Cape Coast, Winneba)',
  'Eastern Region (Koforidua, Akosombo)',
  'Northern Region (Tamale, Yendi)',
  'Volta Region (Ho, Aflao)',
  'Bono Region (Sunyani, Berekum)',
  'Upper East / Upper West Regions',
  'Oti / Bono East / Western North / Ahafo / North East / Savannah'
];

export const INTERNATIONAL_DESTINATIONS = [
  { country: 'United Kingdom', hub: 'London (Heathrow/Felixstowe)', days: '14-21 days sea / 3-5 days air' },
  { country: 'United States', hub: 'New York / Atlanta / Houston', days: '21-30 days sea / 4-6 days air' },
  { country: 'Canada', hub: 'Toronto / Montreal / Vancouver', days: '25-35 days sea / 4-6 days air' },
  { country: 'Germany & Western Europe', hub: 'Hamburg / Frankfurt / Rotterdam', days: '18-25 days sea / 3-5 days air' },
  { country: 'United Arab Emirates', hub: 'Dubai / Abu Dhabi (Jebel Ali)', days: '20-28 days sea / 3-5 days air' },
  { country: 'South Africa', hub: 'Johannesburg / Cape Town / Durban', days: '16-24 days sea / 3-5 days air' },
  { country: 'Nigeria', hub: 'Lagos (Apapa) / Abuja', days: '3-7 days road & express / 2 days air' },
  { country: 'China & East Asia', hub: 'Guangzhou / Shanghai / Hong Kong', days: '30-40 days sea / 4-7 days air' },
  { country: 'Australia & New Zealand', hub: 'Sydney / Melbourne', days: '35-45 days sea / 6-8 days air' },
  { country: 'Other Worldwide Destination (50+ Countries)', hub: 'Worldwide Air / Ocean Hubs', days: 'Custom Schedule' }
];

export const DEFAULT_INVENTORY: InventoryItem[] = [
  { id: 'sofa_3', name: '3-Seater Living Room Sofa', category: 'living', cbm: 1.5, count: 1 },
  { id: 'armchair', name: 'Armchair / Recliner', category: 'living', cbm: 0.6, count: 2 },
  { id: 'coffee_table', name: 'Coffee Table & Side Stools', category: 'living', cbm: 0.4, count: 1 },
  { id: 'tv_stand', name: 'TV Unit & Media Console', category: 'living', cbm: 0.8, count: 1 },
  { id: 'tv_screen', name: 'Large Flat Screen TV (55"-75")', category: 'fragile', cbm: 0.3, count: 2 },
  { id: 'king_bed', name: 'King / Queen Bed & Mattress', category: 'bedroom', cbm: 2.2, count: 2 },
  { id: 'wardrobe', name: '2-3 Door Wardrobe / Armoire', category: 'bedroom', cbm: 1.8, count: 1 },
  { id: 'dressing_table', name: 'Dresser with Mirror', category: 'bedroom', cbm: 0.9, count: 1 },
  { id: 'dining_set', name: '6-Seater Dining Table & Chairs', category: 'dining', cbm: 1.8, count: 1 },
  { id: 'fridge', name: 'Double-Door Refrigerator', category: 'dining', cbm: 1.2, count: 1 },
  { id: 'washing_machine', name: 'Washing Machine / Dryer', category: 'dining', cbm: 0.6, count: 1 },
  { id: 'office_desk', name: 'Executive Desk & Ergonomic Chair', category: 'office', cbm: 0.9, count: 1 },
  { id: 'filing_cabinet', name: 'Filing Cabinet / Bookcase', category: 'office', cbm: 0.7, count: 1 },
  { id: 'pc_monitors', name: 'Desktop Computer & Dual Monitors', category: 'fragile', cbm: 0.3, count: 1 },
  { id: 'cartons_std', name: 'Standard Medium Packing Boxes', category: 'living', cbm: 0.1, count: 12 },
  { id: 'cartons_wardrobe', name: 'Tall Hanging Wardrobe Boxes', category: 'bedroom', cbm: 0.3, count: 4 },
];

export const MOVING_CHECKLIST: ChecklistItem[] = [
  {
    id: 'chk-1',
    phase: '2-weeks',
    title: 'Pre-Move Survey & Inventory Confirmation',
    description: 'Finalize your item count with Poawk Property Movers and confirm parking access or estate gate permits in Accra.',
    category: 'logistics'
  },
  {
    id: 'chk-2',
    phase: '2-weeks',
    title: 'De-clutter & Sort Belongings',
    description: 'Separate items you wish to donate, sell, or discard before packing begins to optimize truck cubic meter space.',
    category: 'packing'
  },
  {
    id: 'chk-3',
    phase: '1-week',
    title: 'ECG, Ghana Water & Internet Disconnection',
    description: 'Notify your utility providers and arrange router/fiber optic transfers for your new Accra or regional residence.',
    category: 'admin'
  },
  {
    id: 'chk-4',
    phase: '1-week',
    title: 'Secure Essential Valuables & Passports',
    description: 'Pack jewelry, passports, deeds, birth certificates, and medicines into a personal carry bag you will personally manage.',
    category: 'admin'
  },
  {
    id: 'chk-5',
    phase: 'move-day',
    title: 'Defrost Fridge & Prep High-Value Electronics',
    description: 'Empty and wipe dry refrigerators and deep freezers 12 hours prior so water doesn’t damage cartons during transit.',
    category: 'packing'
  },
  {
    id: 'chk-6',
    phase: 'move-day',
    title: 'Accra Estate Security Clearance',
    description: 'Inform estate security guards at origin and destination to authorize entry for our commercial moving truck.',
    category: 'logistics'
  },
  {
    id: 'chk-7',
    phase: 'post-move',
    title: 'Room-by-Room Inventory Inspection',
    description: 'Review the numbered checklist as our team unloads and uncrates your furniture and sets up designated rooms.',
    category: 'logistics'
  }
];

export const TESTIMONIALS = [
  {
    name: 'Dr. Andrews Baah-Wiredu',
    role: 'Chief Medical Administrator & Clinical Lead',
    org: 'SIC Hospital, Accra',
    quote: 'Relocating SIC Hospital\'s entire clinical laboratory facility—including our sensitive automated biochemistry analyzers, centrifuges, refrigerated specimen storage, and diagnostic ultrasound equipment—demanded zero errors. Poawk Property Movers deployed anti-vibration shock mounts, custom timber crates, and uniformed handlers who treated every piece of high-precision medical machinery with utmost care. The entire facility was transferred and recalibrated without a single hour of clinic delay.',
    route: 'SIC Hospital Medical Relocation, Accra',
    service: 'Hospital & Laboratory Equipment Move'
  },
  {
    name: 'Kojo Mensah-Bonsu',
    role: 'Managing Partner',
    org: 'Apex Consult Ltd, Airport City Accra',
    quote: 'Moving our entire 40-workstation corporate headquarters from Ridge to Airport City in a single weekend without losing an hour of Monday trading seemed impossible. Poawk Property Movers tagged every server, disassembled our workstations, and set up our conference rooms flawlessly.',
    route: 'Ridge → Airport City, Accra',
    service: 'Corporate Office Transfer'
  },
  {
    name: 'Dr. Evelyn & Kwabena Adjei',
    role: 'Homeowners',
    org: 'Relocated from East Legon to Cantonments',
    quote: 'We have delicate Italian marble furniture and several oversized art canvases. The Poawk Property Movers team arrived on time from Ayawaso in branded uniforms, shrink-wrapped and padded every single piece into their branded heavy-duty boxes. Not a scratch on anything. Courteous, uniformed, and extremely hardworking.',
    route: 'East Legon → Cantonments',
    service: 'VIP Residential Move'
  },
  {
    name: 'Sarah & Michael Thornton',
    role: 'Diplomatic Staff',
    org: 'Repatriation to London, United Kingdom',
    quote: 'Organizing sea freight and household customs clearance out of Ghana can be stressful. Poawk Property Movers handled our export documentation, container loading, and fragile packing. Everything arrived safely at our London address within the estimated timeframe.',
    route: 'Accra, Ghana → London, UK',
    service: 'International Sea Freight'
  }
];

export const FAQ_DATA = [
  {
    q: 'How far in advance should I book my move in Accra?',
    a: 'We recommend booking 3 to 7 days in advance for local Accra residential moves, and 1 to 2 weeks for large corporate office moves or inter-region relocations. For international ocean or air freight, 3 to 4 weeks allows seamless customs and container booking.'
  },
  {
    q: 'What distinguishes Poawk Property Movers from roadside hiring?',
    a: 'Unlike unverified roadside truck drivers who lack padding, insurance, and handling training, Poawk Property Movers operates dedicated, enclosed weatherproof moving trucks, trained uniformed staff, commercial transit protection, heavy-duty packing materials, and a binding written quote with zero hidden price surprises.'
  },
  {
    q: 'Do you provide the packing materials, boxes, and tape?',
    a: 'Yes. Our standard and white-glove tiers include double-wall corrugated cartons, high-tensile stretch film, bubble protection, mattress bags, wardrobe boxes for hanging garments, and custom wooden crating for chandeliers, marble tops, and fragile artwork.'
  },
  {
    q: 'Can you move heavy specialty items like fireproof safes or upright pianos?',
    a: 'Absolutely. We deploy specialized heavy-load dollies, industrial rigging straps, and reinforced ramp vehicles equipped to safely transport heavy safes, commercial server racks, and acoustic pianos.'
  },
  {
    q: 'How are inter-region and international moves coordinated?',
    a: 'For inter-region moves across Ghana (Kumasi, Takoradi, Tamale, etc.), our GPS-monitored trucks travel directly with dedicated lead supervisors. For international relocations, Poawk Property Movers handles crating, export documentation with Ghana Revenue Authority (GRA Customs), and partners with trusted forwarders in over 50 countries for seamless port-to-door delivery.'
  }
];
