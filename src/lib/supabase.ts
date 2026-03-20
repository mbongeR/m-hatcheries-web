// Supabase placeholder client+
// Replace with real Supabase credentials when ready

export type InventoryItem = {
  id: string;
  breed_name: string;
  category: string;
  stock_available: number;
  unit: string;
  ready_for_sale_date: string;
  hatch_rate?: string;
  price_per_unit?: string;
};

export type HatcheryStatus = {
  currently_incubating: number;
  next_hatch_date: string;
  status: string;
};

// Mock data simulating a Supabase fetch
export async function getHatcheryStatus(): Promise<HatcheryStatus> {
  // TODO: Replace with real Supabase query
  // const { data, error } = await supabase.from('hatchery_status').select('*').single();
  return {
    currently_incubating: 1200,
    next_hatch_date: 'March 23, 2026',
    status: 'Active',
  };
}

export async function getInventory(): Promise<InventoryItem[]> {
  // TODO: Replace with real Supabase query
  // const { data, error } = await supabase.from('inventory').select('*');
  return [
    {
      id: '1',
      breed_name: 'Cross-Breed Road Runner Eggs',
      category: 'Fertilized Eggs',
      stock_available: 480,
      unit: 'eggs',
      ready_for_sale_date: 'Available Now',
      hatch_rate: 'Up to 95%',
      price_per_unit: 'Contact for pricing',
    },
    {
      id: '2',
      breed_name: 'Day-Old Cross-Breed Road Runner Chicks',
      category: 'Day-Old Chicks',
      stock_available: 85,
      unit: 'chicks',
      ready_for_sale_date: 'Available Now',
      hatch_rate: undefined,
      price_per_unit: 'Contact for pricing',
    },
    {
      id: '3',
      breed_name: 'One-Week-Old Cross-Breed Road Runner Chicks',
      category: 'Week-Old Chicks',
      stock_available: 60,
      unit: 'chicks',
      ready_for_sale_date: 'March 25, 2026',
      hatch_rate: undefined,
      price_per_unit: 'Contact for pricing',
    },
    {
      id: '4',
      breed_name: 'Solar & Electric Incubator – 288 Egg Capacity',
      category: 'Incubators',
      stock_available: 3,
      unit: 'units',
      ready_for_sale_date: 'Available Now',
      hatch_rate: undefined,
      price_per_unit: 'Contact for pricing',
    },
    {
      id: '5',
      breed_name: 'Solar & Electric Incubator – 1,056 Egg Capacity',
      category: 'Incubators',
      stock_available: 2,
      unit: 'units',
      ready_for_sale_date: 'Available Now',
      hatch_rate: undefined,
      price_per_unit: 'Contact for pricing',
    },
    {
      id: '6',
      breed_name: 'Solar & Electric Incubator – 5,000 Egg Capacity',
      category: 'Incubators',
      stock_available: 1,
      unit: 'units',
      ready_for_sale_date: 'Available Now',
      hatch_rate: undefined,
      price_per_unit: 'Contact for pricing',
    },
  ];
}
