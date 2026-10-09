'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const mockData = [
  { day: '1', revenue: 500, orders: 1 },
  { day: '2', revenue: 800, orders: 2 },
  { day: '3', revenue: 1200, orders: 3 },
  { day: '4', revenue: 1500, orders: 4 },
  { day: '5', revenue: 1800, orders: 5 },
  { day: '6', revenue: 2100, orders: 6 },
  { day: '7', revenue: 2500, orders: 7 },
];

export function TrendChart({ brandId }: { brandId: string }) {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={mockData}>
        <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
        <XAxis dataKey="day" stroke="#94a3b8" />
        <YAxis stroke="#94a3b8" />
        <Tooltip 
          contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569' }}
          labelStyle={{ color: '#e2e8f0' }}
        />
        <Line 
          type="monotone" 
          dataKey="revenue" 
          stroke="#10b981" 
          dot={false}
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
