import { Package, CheckCircle, AlertTriangle } from 'lucide-react'

const materials = [
  { id: 'SN-001', material: 'Crude Oil', expected: '500 KL', received: '498 KL', status: 'Passed', checkedBy: 'QA Team' },
  { id: 'SN-002', material: 'Diesel', expected: '350 KL', received: '350 KL', status: 'Passed', checkedBy: 'QA Team' },
  { id: 'SN-003', material: 'Petrol', expected: '300 KL', received: '285 KL', status: 'Shortage', checkedBy: 'QA Team' },
  { id: 'SN-007', material: 'Furnace Oil', expected: '700 KL', received: '—', status: 'Pending', checkedBy: '—' },
]

export default function CheckMaterial() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-slate-800">Check Material</h2>
        <p className="text-sm text-slate-400 mt-1">Verify received materials against indent specifications</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { label: 'Passed', count: 2, icon: CheckCircle, color: 'from-emerald-500 to-green-600' },
          { label: 'Shortage', count: 1, icon: AlertTriangle, color: 'from-amber-500 to-orange-500' },
          { label: 'Pending', count: 1, icon: Package, color: 'from-sky-500 to-sky-600' },
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
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Material</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Expected</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Received</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Checked By</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {materials.map((row) => (
                <tr key={row.id} className="hover:bg-sky-50/30 transition-colors">
                  <td className="px-5 py-3.5 text-sm font-semibold text-sky-600">{row.id}</td>
                  <td className="px-5 py-3.5 text-sm text-slate-700 font-medium">{row.material}</td>
                  <td className="px-5 py-3.5 text-sm text-slate-500">{row.expected}</td>
                  <td className="px-5 py-3.5 text-sm text-slate-700">{row.received}</td>
                  <td className="px-5 py-3.5 text-sm text-slate-500">{row.checkedBy}</td>
                  <td className="px-5 py-3.5">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${
                      row.status === 'Passed' ? 'bg-emerald-50 text-emerald-600 border-emerald-200' :
                      row.status === 'Shortage' ? 'bg-amber-50 text-amber-600 border-amber-200' :
                      'bg-sky-50 text-sky-600 border-sky-200'
                    }`}>{row.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="md:hidden space-y-3">
        {materials.map((row) => (
          <div key={row.id} className="bg-white rounded-2xl p-4 border border-sky-100 shadow-sm card-hover">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-bold text-sky-600">{row.id}</span>
              <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${
                row.status === 'Passed' ? 'bg-emerald-50 text-emerald-600 border-emerald-200' :
                row.status === 'Shortage' ? 'bg-amber-50 text-amber-600 border-amber-200' :
                'bg-sky-50 text-sky-600 border-sky-200'
              }`}>{row.status}</span>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-slate-400">Material</span><span className="text-slate-700">{row.material}</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Expected</span><span className="text-slate-500">{row.expected}</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Received</span><span className="text-slate-700">{row.received}</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Checked By</span><span className="text-slate-500">{row.checkedBy}</span></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
