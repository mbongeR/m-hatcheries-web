import { getInventory } from '@/lib/supabase';
import { Egg, CheckCircle, RefreshCw, Package } from 'lucide-react';
import Image from 'next/image';

export const metadata = {
  title: 'Live Inventory | M-Hatcheries Services',
  description: 'View real-time stock availability for poultry chicks, fertilized eggs, and incubators at M-Hatcheries Services.',
};

const categoryColors: Record<string, string> = {
  'Fertilized Eggs': 'bg-amber-100 text-amber-800',
  'Day-Old Chicks': 'bg-green-100 text-green-800',
  'Week-Old Chicks': 'bg-teal-100 text-teal-800',
  'Incubators': 'bg-blue-100 text-blue-800',
};

const categoryIcon: Record<string, React.ReactNode> = {
  'Fertilized Eggs': <Egg className="w-4 h-4" />,
  'Day-Old Chicks': <CheckCircle className="w-4 h-4" />,
  'Week-Old Chicks': <CheckCircle className="w-4 h-4" />,
  'Incubators': <Package className="w-4 h-4" />,
};

export default async function ProductsPage() {
  const inventory = await getInventory();

  // Group by category
  const categories = Array.from(new Set(inventory.map((i) => i.category)));

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/eggs_on_trays.png" alt="Eggs on trays" fill className="object-cover" priority />
        </div>
        <div className="section-container relative z-10">
          <span className="gold-badge mb-4 inline-block">Real-Time Data</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold max-w-2xl leading-tight">
            Live <span className="text-yellow-400">Inventory Dashboard</span>
          </h1>
          <p className="mt-4 text-gray-300 max-w-xl">
            Current stock levels, breed availability, and product details — updated directly from our
            hatchery management system.
          </p>
        </div>
      </section>

      {/* Inventory Table */}
      <section className="py-16">
        <div className="section-container">
          {/* Refresh note */}
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <RefreshCw className="w-4 h-4 animate-spin" />
            <span>Data synced from hatchery management system</span>
          </div>

          {/* Desktop table */}
          <div className="hidden md:block rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left px-6 py-4 font-semibold text-gray-600 uppercase tracking-wider text-xs">Breed / Product</th>
                  <th className="text-left px-6 py-4 font-semibold text-gray-600 uppercase tracking-wider text-xs">Category</th>
                  <th className="text-center px-6 py-4 font-semibold text-gray-600 uppercase tracking-wider text-xs">Stock Available</th>
                  <th className="text-left px-6 py-4 font-semibold text-gray-600 uppercase tracking-wider text-xs">Ready for Sale</th>
                  <th className="text-left px-6 py-4 font-semibold text-gray-600 uppercase tracking-wider text-xs">Hatch Rate</th>
                  <th className="text-left px-6 py-4 font-semibold text-gray-600 uppercase tracking-wider text-xs">Pricing</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {inventory.map((item) => (
                  <tr key={item.id} className="hover:bg-yellow-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">{item.breed_name}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${categoryColors[item.category] ?? 'bg-gray-100 text-gray-700'}`}>
                        {categoryIcon[item.category]}
                        {item.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className={`font-bold text-lg ${item.stock_available > 0 ? 'text-green-600' : 'text-red-500'}`}>
                        {item.stock_available.toLocaleString()}
                      </span>
                      <span className="text-gray-400 text-xs ml-1">{item.unit}</span>
                    </td>
                    <td className="px-6 py-4 text-gray-600">{item.ready_for_sale_date}</td>
                    <td className="px-6 py-4 text-gray-600">{item.hatch_rate ?? '—'}</td>
                    <td className="px-6 py-4 text-gray-500 italic">{item.price_per_unit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-4">
            {inventory.map((item) => (
              <div key={item.id} className="card border border-gray-200">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-gray-900 text-sm leading-snug flex-1 pr-3">{item.breed_name}</h3>
                  <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium flex-shrink-0 ${categoryColors[item.category] ?? 'bg-gray-100 text-gray-700'}`}>
                    {item.category}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-gray-400 text-xs mb-0.5">Stock</p>
                    <p className={`font-bold ${item.stock_available > 0 ? 'text-green-600' : 'text-red-500'}`}>
                      {item.stock_available.toLocaleString()} {item.unit}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs mb-0.5">Ready</p>
                    <p className="text-gray-700 font-medium">{item.ready_for_sale_date}</p>
                  </div>
                  {item.hatch_rate && (
                    <div>
                      <p className="text-gray-400 text-xs mb-0.5">Hatch Rate</p>
                      <p className="text-yellow-600 font-semibold">{item.hatch_rate}</p>
                    </div>
                  )}
                  <div>
                    <p className="text-gray-400 text-xs mb-0.5">Pricing</p>
                    <p className="text-gray-500 italic text-xs">{item.price_per_unit}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Incubator Specs */}
      <section className="bg-gray-50 py-16 border-t border-gray-100">
        <div className="section-container">
          <div className="text-center mb-12">
            <span className="gold-badge mb-3">Incubator Range</span>
            <h2 className="section-title">Industrial-Grade Incubators</h2>
            <p className="mt-3 text-gray-500 max-w-xl mx-auto">
              Available in both Solar and Electric models with metal body construction.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { capacity: '288 Eggs', type: 'Solar & Electric', feature: 'Perfect for small farms and hobbyists' },
              { capacity: '1,056 Eggs', type: 'Solar & Electric', feature: 'Mid-range capacity for growing operations' },
              { capacity: '5,000 Eggs', type: 'Solar & Electric', feature: 'Commercial-scale production powerhouse' },
            ].map((item) => (
              <div key={item.capacity} className="card text-center border-2 border-transparent hover:border-yellow-300">
                <div className="text-4xl mb-3">🏭</div>
                <h3 className="text-2xl font-extrabold text-yellow-500 mb-1">{item.capacity}</h3>
                <p className="text-sm font-semibold text-gray-700 mb-2">{item.type}</p>
                <p className="text-xs text-gray-500 mb-4">{item.feature}</p>
                <ul className="text-xs text-gray-600 space-y-1.5 text-left">
                  {[
                    '10-hour temperature insulation during power faults',
                    'Metal body construction',
                    'Automatic egg turning',
                    'Solar + electric dual power',
                    'LED digital display',
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-yellow-500 flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
