export type MoveType = 'local' | 'inter-region' | 'international';

export type PropertySize = 'studio' | 'apartment-2' | 'house-4' | 'office-small' | 'office-enterprise';

export type PackingTier = 'transport-only' | 'standard-pack' | 'white-glove';

export interface QuoteRequest {
  moveType: MoveType;
  propertySize: PropertySize;
  origin: string;
  destination: string;
  packingTier: PackingTier;
  hasElevatorOrigin: boolean;
  hasElevatorDest: boolean;
  floorsOrigin: number;
  floorsDest: number;
  heavyItems: {
    piano: boolean;
    safe: boolean;
    serverRack: boolean;
    poolTable: boolean;
    labEquipment?: boolean;
  };
  preferredDate?: string;
  customerName?: string;
  customerPhone?: string;
  customerEmail?: string;
  specialInstructions?: string;
}

export interface InventoryItem {
  id: string;
  name: string;
  category: 'living' | 'bedroom' | 'dining' | 'office' | 'fragile';
  cbm: number; // Cubic meters
  count: number;
}

export interface ChecklistItem {
  id: string;
  phase: '2-weeks' | '1-week' | 'move-day' | 'post-move';
  title: string;
  description: string;
  category: 'logistics' | 'packing' | 'admin';
}
