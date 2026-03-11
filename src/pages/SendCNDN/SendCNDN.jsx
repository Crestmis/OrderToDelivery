import { ArrowRightLeft, FileUp, FileDown, Clock } from 'lucide-react'

const notes = [
  { id: 'CN-001', indent: 'SN-001', type: 'Credit Note', party: 'Reliance Industries', amount: '₹2,500', reason: 'Quality premium', status: 'Sent', date: '2026-03-10' },
  { id: 'DN-001', indent: 'SN-003', type: 'Debit Note', party: 'Adani Enterprises', amount: '₹4,200', reason: 'Shortage deduction', status: 'Sent', date: '2026-03-11' },
  { id: 'CN-002', indent: 'SN-007', type: 'Credit Note', party: 'NTPC Limited', amount: '₹1,800', reason: 'Early delivery bonus', status: 'Pending', date: '—' },
  { id: 'DN-002', indent: 'SN-002', type: 'Debit Note', party: 'Tata Steel', amount: '₹3,100', reason: 'Damage deduction', status: 'Draft', date: '—' },
]

export default function SendCNDN() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-800">Send CN/DN</h2>
          <p className="text-sm text-slate-400 mt-1">Manage Credit Notes and Debit Notes</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200 hover:bg-emerald-100 text-sm font-medium transition-all">
            <FileUp size={16} /> Credit Note
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-red-50 text-red-600 border border-red-200 hover:bg-red-100 text-sm font-medium transition-all">
            <FileDown size={16} /> Debit Note
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { label: 'Credit Notes', count: 2, icon: FileUp, color: 'from-emerald-500 to-green-600' },
          { label: 'Debit Notes', count: 2, icon: FileDown, color: 'from-red-500 to-rose-600' },
          { label: 'Pending', count: 2, icon: Clock, color: 'from-amber-500 to-orange-500' },
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
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Note ID</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Indent</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Type</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Party</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Amount</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Reason</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Date</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {notes.map((row) => (
                <tr key={row.id} className="hover:bg-sky-50/30 transition-colors">
                  <td className="px-5 py-3.5 text-sm font-semibold text-sky-600">{row.id}</td>
                  <td className="px-5 py-3.5 text-sm text-slate-500">{row.indent}</td>
                  <td className="px-5 py-3.5">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${
                      row.type === 'Credit Note' ? 'bg-emerald-50 text-emerald-600 border-emerald-200' : 'bg-red-50 text-red-600 border-red-200'
                    }`}>{row.type}</span>
                  </td>
                  <td className="px-5 py-3.5 text-sm text-slate-700 font-medium">{row.party}</td>
                  <td className="px-5 py-3.5 text-sm text-slate-800 font-semibold">{row.amount}</td>
                  <td className="px-5 py-3.5 text-sm text-slate-500">{row.reason}</td>
                  <td className="px-5 py-3.5 text-sm text-slate-400">{row.date}</td>
                  <td className="px-5 py-3.5">
                    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium border ${
                      row.status === 'Sent' ? 'bg-emerald-50 text-emerald-600 border-emerald-200' :
                      row.status === 'Draft' ? 'bg-sky-50 text-sky-600 border-sky-200' :
                      'bg-amber-50 text-amber-600 border-amber-200'
                    }`}>{row.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="md:hidden space-y-3">
        {notes.map((row) => (
          <div key={row.id} className="bg-white rounded-2xl p-4 border border-sky-100 shadow-sm card-hover">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-bold text-sky-600">{row.id}</span>
              <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${
                row.type === 'Credit Note' ? 'bg-emerald-50 text-emerald-600 border-emerald-200' : 'bg-red-50 text-red-600 border-red-200'
              }`}>{row.type}</span>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-slate-400">Party</span><span className="text-slate-700">{row.party}</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Amount</span><span className="text-slate-800 font-bold">{row.amount}</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Reason</span><span className="text-slate-500">{row.reason}</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Status</span>
                <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                  row.status === 'Sent' ? 'text-emerald-600' : row.status === 'Draft' ? 'text-sky-600' : 'text-amber-600'
                }`}>{row.status}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
