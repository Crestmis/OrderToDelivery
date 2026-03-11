import { Send, Mail, CheckCircle } from 'lucide-react'

const details = [
  { id: 'SN-001', party: 'Reliance Industries', email: 'reliance@company.com', sentAt: '2026-03-10 09:30', status: 'Sent' },
  { id: 'SN-002', party: 'Tata Steel', email: 'tata.steel@company.com', sentAt: '2026-03-10 10:15', status: 'Sent' },
  { id: 'SN-004', party: 'Bharti Airtel', email: 'bharti@company.com', sentAt: '—', status: 'Pending' },
  { id: 'SN-007', party: 'NTPC Limited', email: 'ntpc@company.com', sentAt: '2026-03-09 14:20', status: 'Sent' },
]

export default function SendDetails() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-slate-800">Send Details</h2>
        <p className="text-sm text-slate-400 mt-1">Send indent details to respective parties</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white rounded-2xl p-5 border border-sky-100 shadow-sm card-hover">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-sky-600 flex items-center justify-center"><Mail size={18} className="text-white" /></div>
            <div><p className="text-2xl font-bold text-slate-800">3</p><p className="text-sm text-slate-400">Details Sent</p></div>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-5 border border-sky-100 shadow-sm card-hover">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center"><Send size={18} className="text-white" /></div>
            <div><p className="text-2xl font-bold text-slate-800">1</p><p className="text-sm text-slate-400">Pending to Send</p></div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-sky-100 shadow-sm overflow-hidden hidden md:block">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-sky-100 bg-sky-50/50">
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Indent ID</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Party Name</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Email</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Sent At</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {details.map((row) => (
                <tr key={row.id} className="hover:bg-sky-50/30 transition-colors">
                  <td className="px-5 py-3.5 text-sm font-semibold text-sky-600">{row.id}</td>
                  <td className="px-5 py-3.5 text-sm text-slate-700 font-medium">{row.party}</td>
                  <td className="px-5 py-3.5 text-sm text-slate-500">{row.email}</td>
                  <td className="px-5 py-3.5 text-sm text-slate-400">{row.sentAt}</td>
                  <td className="px-5 py-3.5">
                    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium border ${
                      row.status === 'Sent' ? 'bg-emerald-50 text-emerald-600 border-emerald-200' : 'bg-amber-50 text-amber-600 border-amber-200'
                    }`}>{row.status === 'Sent' ? <CheckCircle size={12} /> : <Send size={12} />} {row.status}</span>
                  </td>
                  <td className="px-5 py-3.5">
                    {row.status === 'Pending' && (
                      <button className="px-4 py-1.5 rounded-lg text-xs font-medium bg-sky-50 text-sky-600 hover:bg-sky-100 transition-all">Send Now</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="md:hidden space-y-3">
        {details.map((row) => (
          <div key={row.id} className="bg-white rounded-2xl p-4 border border-sky-100 shadow-sm card-hover">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-bold text-sky-600">{row.id}</span>
              <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium border ${
                row.status === 'Sent' ? 'bg-emerald-50 text-emerald-600 border-emerald-200' : 'bg-amber-50 text-amber-600 border-amber-200'
              }`}>{row.status}</span>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-slate-400">Party</span><span className="text-slate-700">{row.party}</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Email</span><span className="text-slate-500 truncate ml-4">{row.email}</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Sent At</span><span className="text-slate-400">{row.sentAt}</span></div>
            </div>
            {row.status === 'Pending' && (
              <button className="w-full mt-3 py-2 rounded-lg text-xs font-medium bg-sky-50 text-sky-600 hover:bg-sky-100 transition-all">Send Now</button>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
