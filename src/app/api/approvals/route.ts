import { NextResponse } from 'next/server';

const mockApprovals = [
  {
    id: 'appr_001',
    brand: 'RenkAtlas',
    type: 'spend',
    amount: 5000,
    reason: 'ABO Test Kampanyası — ROAS 2.0+ hedefi',
    created_at: new Date().toISOString()
  },
  {
    id: 'appr_002',
    brand: 'Bebece',
    type: 'publish',
    amount: null,
    reason: 'Website yayına alma — 3 ürün hazır',
    created_at: new Date().toISOString()
  }
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const status = searchParams.get('status');

  try {
    // TODO: Supabase'den veri çek
    // const query = supabase.from('approvals').select('*');
    // if (status) query = query.eq('status', 'pending');
    // const { data } = await query;

    const filtered = status === 'pending' 
      ? mockApprovals 
      : mockApprovals;

    return NextResponse.json(filtered);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch approvals' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // TODO: Supabase'ye insert
    // const { data } = await supabase.from('approvals').insert([body]);

    return NextResponse.json({ success: true, id: 'new_approval_id' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create approval' }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { id, status } = body;

    // TODO: Supabase'de güncelle
    // const { data } = await supabase
    //   .from('approvals')
    //   .update({ status })
    //   .eq('id', id);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update approval' }, { status: 500 });
  }
}
