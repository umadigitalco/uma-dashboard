'use client';

interface Approval {
  id: string;
  brand: string;
  type: string;
  amount?: number;
  reason: string;
  created_at: string;
}

export default function ApprovalQueue({ approvals }: { approvals: Approval[] }) {
  return (
    <div className="card">
      <h3 className="text-xl font-bold text-white mb-4">⏳ Onay Bekleyenler ({approvals.length})</h3>
      
      {approvals.length === 0 ? (
        <p className="text-slate-400 text-center py-4">Bekleyen onay yok</p>
      ) : (
        <div className="space-y-3 max-h-96 overflow-y-auto">
          {approvals.map((approval) => (
            <div key={approval.id} className="bg-slate-800 p-3 rounded border border-slate-700">
              <div className="flex justify-between items-start mb-2">
                <span className="font-medium text-white text-sm">{approval.brand}</span>
                <span className={`text-xs px-2 py-1 rounded ${
                  approval.type === 'spend' ? 'bg-red-900 text-red-200' :
                  approval.type === 'publish' ? 'bg-blue-900 text-blue-200' :
                  'bg-orange-900 text-orange-200'
                }`}>
                  {approval.type === 'spend' ? '💰' : '📤'} {approval.type}
                </span>
              </div>
              
              {approval.amount && (
                <div className="text-emerald-400 font-bold mb-1">{approval.amount} ₺</div>
              )}
              
              <p className="text-slate-300 text-xs mb-3">{approval.reason}</p>
              
              <div className="flex gap-2">
                <button className="btn-primary text-xs flex-1">✅ Onayla</button>
                <button className="btn-danger text-xs flex-1">❌ Reddet</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
