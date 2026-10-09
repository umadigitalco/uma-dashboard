'use client';

import { useState, useEffect } from 'react';
import BrandGrid from '@/components/BrandGrid';
import ApprovalQueue from '@/components/ApprovalQueue';
import DailyReport from '@/components/DailyReport';

export default function Home() {
  const [brands, setBrands] = useState([]);
  const [approvals, setApprovals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const brandsRes = await fetch('/api/brands');
        const approvalsRes = await fetch('/api/approvals/pending');
        
        setBrands(await brandsRes.json());
        setApprovals(await approvalsRes.json());
      } catch (error) {
        console.error('Data fetch error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">🎨 UMA Creative OS</h1>
          <p className="text-slate-400">Multi-brand e-commerce at scale</p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Brand Portfolio */}
          <div className="lg:col-span-2">
            <BrandGrid brands={brands} loading={loading} />
          </div>

          {/* Approval Queue */}
          <div>
            <ApprovalQueue approvals={approvals} />
          </div>
        </div>

        {/* Daily Summary */}
        <DailyReport brands={brands} />
      </div>
    </main>
  );
}
