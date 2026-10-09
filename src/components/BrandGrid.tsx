'use client';

import { Card } from './ui/Card';
import { TrendChart } from './TrendChart';
import { Link as LinkIcon } from 'lucide-react';

interface Brand {
  id: string;
  name: string;
  phase: number;
  gate: number;
  revenue_30d: number;
  orders_30d: number;
  roas: number;
  net_profit: number;
  status: string;
}

export default function BrandGrid({ brands, loading }: { brands: Brand[]; loading: boolean }) {
  if (loading) {
    return <div className="card animate-pulse h-40">Markalar yükleniyor...</div>;
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">📊 Marka Porföyü</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {brands.map((brand) => (
          <Card key={brand.id} className="hover:shadow-lg transition-shadow">
            {/* Header */}
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-white">{brand.name}</h3>
                <div className="flex gap-2 mt-2">
                  <span className="status-badge status-phase">Faz {brand.phase}</span>
                  <span className={`status-badge ${brand.gate === 0 ? 'status-gate-closed' : 'status-gate-open'}`}>
                    K{brand.gate}
                  </span>
                </div>
              </div>
            </div>

            {/* KPI Row */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <div className="kpi-value text-emerald-400">{brand.revenue_30d.toLocaleString('tr-TR')} ₺</div>
                <div className="kpi-label">Ciro (30 gün)</div>
              </div>
              <div>
                <div className="kpi-value text-blue-400">{brand.orders_30d}</div>
                <div className="kpi-label">Siparişler</div>
              </div>
              <div>
                <div className="kpi-value text-orange-400">{brand.roas.toFixed(2)}</div>
                <div className="kpi-label">ROAS</div>
              </div>
              <div>
                <div className="kpi-value text-green-400">{brand.net_profit.toLocaleString('tr-TR')} ₺</div>
                <div className="kpi-label">Net Kar</div>
              </div>
            </div>

            {/* 30-Day Trend */}
            <div className="mb-6">
              <TrendChart brandId={brand.id} />
            </div>

            {/* Quick Actions */}
            <div className="flex gap-2">
              <button className="btn-primary flex-1 text-sm">📊 Detay</button>
              <button className="btn-secondary flex-1 text-sm">🎬 İçerik</button>
            </div>
          </Card>
        ))}
      </div>

      {/* New Brand Button */}
      <button className="w-full py-3 border-2 border-dashed border-slate-700 rounded-lg text-slate-400 hover:border-emerald-600 hover:text-emerald-400 transition-colors">
        + Yeni Marka Başlat
      </button>
    </div>
  );
}
