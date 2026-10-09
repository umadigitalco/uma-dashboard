import { NextResponse } from 'next/server';

// Mock data — Supabase integrate edilecek
const mockBrands = [
  {
    id: 'renkatlas',
    name: 'RenkAtlas',
    phase: 4,
    gate: 1,
    revenue_30d: 45200,
    orders_30d: 72,
    roas: 2.8,
    net_profit: 15200,
    status: 'active'
  },
  {
    id: 'bebece',
    name: 'Bebece',
    phase: 1,
    gate: 0,
    revenue_30d: 8950,
    orders_30d: 2,
    roas: 0,
    net_profit: -1200,
    status: 'setup'
  },
  {
    id: 'temizvision',
    name: 'TemizVision',
    phase: 3,
    gate: 1,
    revenue_30d: 32100,
    orders_30d: 58,
    roas: 1.9,
    net_profit: 8900,
    status: 'active'
  }
];

export async function GET() {
  try {
    // TODO: Supabase'den veri çek
    // const { data } = await supabase.from('brands').select('*');
    
    return NextResponse.json(mockBrands);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch brands' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // TODO: Supabase'ye insert
    // const { data } = await supabase.from('brands').insert([body]);
    
    return NextResponse.json({ success: true, id: 'new_brand_id' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create brand' }, { status: 500 });
  }
}
