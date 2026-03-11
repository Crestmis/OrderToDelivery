import { ShieldCheck, CheckCircle, XCircle, Clock } from 'lucide-react'

const checks = [
  { id: 'SN-001', material: 'Crude Oil', batch: 'B-2026-001', inspector: 'Dr. Sharma', result: 'Passed', grade: 'A+', date: '2026-03-10' },
  { id: 'SN-002', material: 'Diesel', batch: 'B-2026-002', inspector: 'Dr. Patel', result: 'Passed', grade: 'A', date: '2026-03-10' },
  { id: 'SN-003', material: 'Petrol', batch: 'B-2026-003', inspector: 'Dr. Sharma', result: 'Failed', grade: 'C', date: '2026-03-11' },
  { id: 'SN-007', material: 'Furnace Oil', batch: 'B-2026-007', inspector: '—', result: 'Pending', grade: '—', date: '—' },
]

export default function QualityCheck() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-slate-800">Quality Check</h2>
        <p className="text-sm text-slate-400 mt-1">Material quality inspection and grading</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { label: 'Passed', count: 2, icon: CheckCircle, color: 'from-emerald-500 to-green-600' },
          { label: 'Failed', count: 1, icon: XCircle, color: 'from-red-500 to-rose-600' },
          { label: 'Pending', count: 1, icon: Clock, color: 'from-amber-500 to-orange-500' },
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
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Batch</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Inspector</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Grade</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Date</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Result</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {checks.map((row) => (
                <tr key={row.id} className="hover:bg-sky-50/30 transition-colors">
                  <td className="px-5 py-3.5 text-sm font-semibold text-sky-600">{row.id}</td>
                  <td className="px-5 py-3.5 text-sm text-slate-700 font-medium">{row.material}</td>
                  <td className="px-5 py-3.5 text-sm text-slate-500">{row.batch}</td>
                  <td className="px-5 py-3.5 text-sm text-slate-500">{row.inspector}</td>
                  <td className="px-5 py-3.5">
                    <span className={`inline-flex items-center justify-center w-8 h-8 rounded-lg text-xs font-bold ${
                      row.grade === 'A+' || row.grade === 'A' ? 'bg-emerald-50 text-emerald-600' :
                      row.grade === 'C' ? 'bg-red-50 text-red-600' :
                      'bg-slate-50 text-slate-400'
                    }`}>{row.grade}</span>
                  </td>
                  <td className="px-5 py-3.5 text-sm text-slate-400">{row.date}</td>
                  <td className="px-5 py-3.5">
                    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium border ${
                      row.result === 'Passed' ? 'bg-emerald-50 text-emerald-600 border-emerald-200' :
                      row.result === 'Failed' ? 'bg-red-50 text-red-600 border-red-200' :
                      'bg-amber-50 text-amber-600 border-amber-200'
                    }`}>{row.result}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="md:hidden space-y-3">
        {checks.map((row) => (
          <div key={row.id} className="bg-white rounded-2xl p-4 border border-sky-100 shadow-sm card-hover">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-bold text-sky-600">{row.id}</span>
              <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium border ${
                row.result === 'Passed' ? 'bg-emerald-50 text-emerald-600 border-emerald-200' :
                row.result === 'Failed' ? 'bg-red-50 text-red-600 border-red-200' :
                'bg-amber-50 text-amber-600 border-amber-200'
              }`}>{row.result}</span>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-slate-400">Material</span><span className="text-slate-700">{row.material}</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Batch</span><span className="text-slate-500">{row.batch}</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Inspector</span><span className="text-slate-500">{row.inspector}</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Grade</span><span className="text-slate-700 font-bold">{row.grade}</span></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
