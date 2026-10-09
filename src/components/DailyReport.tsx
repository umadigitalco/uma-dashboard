'use client';

export default function DailyReport({ brands }: { brands: any[] }) {
  const totalRevenue = brands.reduce((sum, b) => sum + (b.revenue_30d || 0), 0);
  const totalOrders = brands.reduce((sum, b) => sum + (b.orders_30d || 0), 0);
  const totalProfit = brands.reduce((sum, b) => sum + (b.net_profit || 0), 0);
  const avgRoas = (brands.reduce((sum, b) => sum + (b.roas || 0), 0) / brands.length).toFixed(2);

  return (
    <div className="card">
      <h3 className="text-xl font-bold text-white mb-6">📈 Günlük Özet</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-slate-800 p-4 rounded border border-slate-700">
          <div className="text-emerald-400 font-bold text-2xl">{totalRevenue.toLocaleString('tr-TR')}</div>
          <div className="text-slate-400 text-sm">Toplam Ciro (30d)</div>
        </div>
        
        <div className="bg-slate-800 p-4 rounded border border-slate-700">
          <div className="text-blue-400 font-bold text-2xl">{totalOrders}</div>
          <div className="text-slate-400 text-sm">Toplam Siparişler</div>
        </div>
        
        <div className="bg-slate-800 p-4 rounded border border-slate-700">
          <div className="text-orange-400 font-bold text-2xl">{avgRoas}</div>
          <div className="text-slate-400 text-sm">Ortalama ROAS</div>
        </div>
        
        <div className="bg-slate-800 p-4 rounded border border-slate-700">
          <div className="text-green-400 font-bold text-2xl">{totalProfit.toLocaleString('tr-TR')} ₺</div>
          <div className="text-slate-400 text-sm">Net Kar</div>
        </div>
      </div>
    </div>
  );
}
