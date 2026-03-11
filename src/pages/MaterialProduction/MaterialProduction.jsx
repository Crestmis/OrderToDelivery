import { Factory, Clock, CheckCircle, Settings } from 'lucide-react'

const productions = [
  { id: 'SN-001', material: 'Crude Oil', batch: 'B-2026-001', qty: '500 KL', progress: 95, status: 'Completed' },
  { id: 'SN-002', material: 'Diesel', batch: 'B-2026-002', qty: '350 KL', progress: 78, status: 'In Progress' },
  { id: 'SN-003', material: 'Petrol', batch: 'B-2026-003', qty: '300 KL', progress: 45, status: 'In Progress' },
  { id: 'SN-005', material: 'LPG', batch: 'B-2026-005', qty: '150 KL', progress: 0, status: 'Queued' },
]

export default function MaterialProduction() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-slate-800">Material Production</h2>
        <p className="text-sm text-slate-400 mt-1">Track production batches and progress</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { label: 'Completed', count: 1, icon: CheckCircle, color: 'from-emerald-500 to-green-600' },
          { label: 'In Progress', count: 2, icon: Settings, color: 'from-sky-500 to-sky-600' },
          { label: 'Queued', count: 1, icon: Clock, color: 'from-amber-500 to-orange-500' },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-2xl p-5 border border-sky-100 shadow-sm card-hover">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center`}>
                <s.icon size={18} className="text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-800">{s.count}</p>
                <p className="text-sm text-slate-400">{s.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {productions.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl p-5 border border-sky-100 shadow-sm card-hover">
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-sm font-bold text-sky-600">{item.id}</span>
                <p className="text-lg font-semibold text-slate-800 mt-1">{item.material}</p>
              </div>
              <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${
                item.status === 'Completed' ? 'bg-emerald-50 text-emerald-600 border-emerald-200' :
                item.status === 'In Progress' ? 'bg-sky-50 text-sky-600 border-sky-200' :
                'bg-amber-50 text-amber-600 border-amber-200'
              }`}>{item.status}</span>
            </div>
            <div className="space-y-2 text-sm mb-4">
              <div className="flex justify-between"><span className="text-slate-400">Batch</span><span className="text-slate-500">{item.batch}</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Quantity</span><span className="text-slate-700">{item.qty}</span></div>
            </div>
            <div>
              <div className="flex justify-between mb-1.5">
                <span className="text-xs text-slate-400">Progress</span>
                <span className="text-xs font-semibold text-slate-700">{item.progress}%</span>
              </div>
              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className={`h-full rounded-full transition-all duration-1000 ${
                  item.progress >= 90 ? 'bg-emerald-500' : item.progress >= 50 ? 'bg-sky-500' : item.progress > 0 ? 'bg-amber-500' : 'bg-slate-200'
                }`} style={{ width: `${item.progress}%` }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
