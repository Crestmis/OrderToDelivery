import { CheckSquare, Clock, CheckCircle, XCircle } from 'lucide-react'

const approvals = [
  { id: 'SN-001', party: 'Reliance Industries', material: 'Crude Oil', qty: '500 KL', status: 'Approved', date: '2026-03-10' },
  { id: 'SN-003', party: 'Adani Enterprises', material: 'Petrol', qty: '300 KL', status: 'Pending', date: '2026-03-11' },
  { id: 'SN-005', party: 'Hindustan Unilever', material: 'LPG', qty: '150 KL', status: 'Rejected', date: '2026-03-09' },
  { id: 'SN-007', party: 'NTPC Limited', material: 'Furnace Oil', qty: '700 KL', status: 'Approved', date: '2026-03-08' },
  { id: 'SN-009', party: 'Larsen & Toubro', material: 'Base Oil', qty: '450 KL', status: 'Pending', date: '2026-03-11' },
]

const getStatusStyle = (status) => {
  switch (status) {
    case 'Approved': return 'bg-emerald-50 text-emerald-600 border-emerald-200'
    case 'Pending': return 'bg-amber-50 text-amber-600 border-amber-200'
    case 'Rejected': return 'bg-red-50 text-red-600 border-red-200'
    default: return 'bg-slate-50 text-slate-500'
  }
}

const getStatusIcon = (status) => {
  switch (status) {
    case 'Approved': return <CheckCircle size={14} />
    case 'Pending': return <Clock size={14} />
    case 'Rejected': return <XCircle size={14} />
    default: return null
  }
}

export default function IndentApproval() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-800">Indent Approval</h2>
          <p className="text-sm text-slate-400 mt-1">Review and approve pending indents</p>
        </div>
        <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-amber-50 text-amber-600 border border-amber-200">
          <Clock size={12} /> 2 Pending
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { label: 'Approved', count: 2, icon: CheckCircle, color: 'from-emerald-500 to-green-600' },
          { label: 'Pending', count: 2, icon: Clock, color: 'from-amber-500 to-orange-500' },
          { label: 'Rejected', count: 1, icon: XCircle, color: 'from-red-500 to-rose-600' },
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

      <div className="bg-white rounded-2xl border border-sky-100 shadow-sm overflow-hidden hidden md:block">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-sky-100 bg-sky-50/50">
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Indent ID</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Party Name</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Material</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Qty</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Date</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {approvals.map((row) => (
                <tr key={row.id} className="hover:bg-sky-50/30 transition-colors">
                  <td className="px-5 py-3.5 text-sm font-semibold text-sky-600">{row.id}</td>
                  <td className="px-5 py-3.5 text-sm text-slate-700 font-medium">{row.party}</td>
                  <td className="px-5 py-3.5 text-sm text-slate-500">{row.material}</td>
                  <td className="px-5 py-3.5 text-sm text-slate-700">{row.qty}</td>
                  <td className="px-5 py-3.5 text-sm text-slate-400">{row.date}</td>
                  <td className="px-5 py-3.5">
                    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium border ${getStatusStyle(row.status)}`}>
                      {getStatusIcon(row.status)} {row.status}
                    </span>
                  </td>
                  <td className="px-5 py-3.5">
                    {row.status === 'Pending' && (
                      <div className="flex items-center gap-2">
                        <button className="px-3 py-1.5 rounded-lg text-xs font-medium bg-emerald-50 text-emerald-600 hover:bg-emerald-100 transition-all">Approve</button>
                        <button className="px-3 py-1.5 rounded-lg text-xs font-medium bg-red-50 text-red-600 hover:bg-red-100 transition-all">Reject</button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="md:hidden space-y-3">
        {approvals.map((row) => (
          <div key={row.id} className="bg-white rounded-2xl p-4 border border-sky-100 shadow-sm card-hover">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-bold text-sky-600">{row.id}</span>
              <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium border ${getStatusStyle(row.status)}`}>
                {getStatusIcon(row.status)} {row.status}
              </span>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-slate-400">Party</span><span className="text-slate-700">{row.party}</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Material</span><span className="text-slate-500">{row.material}</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Qty</span><span className="text-slate-700">{row.qty}</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Date</span><span className="text-slate-400">{row.date}</span></div>
            </div>
            {row.status === 'Pending' && (
              <div className="flex gap-2 mt-3">
                <button className="flex-1 py-2 rounded-lg text-xs font-medium bg-emerald-50 text-emerald-600 hover:bg-emerald-100 transition-all">Approve</button>
                <button className="flex-1 py-2 rounded-lg text-xs font-medium bg-red-50 text-red-600 hover:bg-red-100 transition-all">Reject</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
