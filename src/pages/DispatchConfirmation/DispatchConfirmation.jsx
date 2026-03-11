import { Truck, CheckCircle, Clock, AlertTriangle } from 'lucide-react'

const dispatches = [
  { id: 'SN-001', party: 'Reliance Industries', vehicle: 'MH-04-AB-1234', driver: 'Rajan Kumar', status: 'Confirmed', date: '2026-03-10' },
  { id: 'SN-002', party: 'Tata Steel', vehicle: 'MH-12-CD-5678', driver: 'Suresh Patel', status: 'Confirmed', date: '2026-03-10' },
  { id: 'SN-003', party: 'Adani Enterprises', vehicle: '—', driver: '—', status: 'Pending', date: '2026-03-11' },
  { id: 'SN-007', party: 'NTPC Limited', vehicle: 'GJ-01-EF-9012', driver: 'Manoj Singh', status: 'Confirmed', date: '2026-03-09' },
]

export default function DispatchConfirmation() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-slate-800">Dispatch Confirmation</h2>
        <p className="text-sm text-slate-400 mt-1">Confirm dispatch details for approved indents</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { label: 'Confirmed', count: 3, icon: CheckCircle, color: 'from-emerald-500 to-green-600' },
          { label: 'Pending', count: 1, icon: Clock, color: 'from-amber-500 to-orange-500' },
          { label: 'Issues', count: 0, icon: AlertTriangle, color: 'from-red-500 to-rose-600' },
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
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Party</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Vehicle No</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Driver</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Date</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {dispatches.map((row) => (
                <tr key={row.id} className="hover:bg-sky-50/30 transition-colors">
                  <td className="px-5 py-3.5 text-sm font-semibold text-sky-600">{row.id}</td>
                  <td className="px-5 py-3.5 text-sm text-slate-700 font-medium">{row.party}</td>
                  <td className="px-5 py-3.5 text-sm text-slate-500">{row.vehicle}</td>
                  <td className="px-5 py-3.5 text-sm text-slate-500">{row.driver}</td>
                  <td className="px-5 py-3.5 text-sm text-slate-400">{row.date}</td>
                  <td className="px-5 py-3.5">
                    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium border ${
                      row.status === 'Confirmed' ? 'bg-emerald-50 text-emerald-600 border-emerald-200' : 'bg-amber-50 text-amber-600 border-amber-200'
                    }`}>{row.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="md:hidden space-y-3">
        {dispatches.map((row) => (
          <div key={row.id} className="bg-white rounded-2xl p-4 border border-sky-100 shadow-sm card-hover">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-bold text-sky-600">{row.id}</span>
              <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium border ${
                row.status === 'Confirmed' ? 'bg-emerald-50 text-emerald-600 border-emerald-200' : 'bg-amber-50 text-amber-600 border-amber-200'
              }`}>{row.status}</span>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-slate-400">Party</span><span className="text-slate-700">{row.party}</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Vehicle</span><span className="text-slate-500">{row.vehicle}</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Driver</span><span className="text-slate-500">{row.driver}</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Date</span><span className="text-slate-400">{row.date}</span></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
