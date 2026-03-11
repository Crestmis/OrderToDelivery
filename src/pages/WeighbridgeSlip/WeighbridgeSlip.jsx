import { Scale, FileText, Download } from 'lucide-react'

const slips = [
  { id: 'WB-001', indent: 'SN-001', vehicle: 'MH-04-AB-1234', grossWt: '35,200 KG', tareWt: '12,500 KG', netWt: '22,700 KG', date: '2026-03-10 10:30', operator: 'Vijay Kumar' },
  { id: 'WB-002', indent: 'SN-002', vehicle: 'MH-12-CD-5678', grossWt: '28,800 KG', tareWt: '11,200 KG', netWt: '17,600 KG', date: '2026-03-10 11:15', operator: 'Vijay Kumar' },
  { id: 'WB-003', indent: 'SN-007', vehicle: 'GJ-01-EF-9012', grossWt: '42,100 KG', tareWt: '13,800 KG', netWt: '28,300 KG', date: '2026-03-09 14:45', operator: 'Anil Sharma' },
]

export default function WeighbridgeSlip() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-800">Weighbridge Slip</h2>
          <p className="text-sm text-slate-400 mt-1">View and manage weighbridge records</p>
        </div>
        <button className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 text-white font-semibold text-sm hover:from-sky-400 hover:to-sky-500 transition-all shadow-lg shadow-sky-500/20">
          <FileText size={18} /> New Slip
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-2xl p-5 border border-sky-100 shadow-sm card-hover">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-sky-600 flex items-center justify-center"><Scale size={18} className="text-white" /></div>
            <div><p className="text-2xl font-bold text-slate-800">3</p><p className="text-sm text-slate-400">Total Slips</p></div>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-5 border border-sky-100 shadow-sm card-hover">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center"><Scale size={18} className="text-white" /></div>
            <div><p className="text-2xl font-bold text-slate-800">68,600 KG</p><p className="text-sm text-slate-400">Total Net Weight</p></div>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-5 border border-sky-100 shadow-sm card-hover">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center"><FileText size={18} className="text-white" /></div>
            <div><p className="text-2xl font-bold text-slate-800">Today</p><p className="text-sm text-slate-400">2 Slips Generated</p></div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-sky-100 shadow-sm overflow-hidden hidden md:block">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-sky-100 bg-sky-50/50">
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Slip ID</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Indent</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Vehicle</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Gross Wt</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Tare Wt</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Net Wt</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Date/Time</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {slips.map((row) => (
                <tr key={row.id} className="hover:bg-sky-50/30 transition-colors">
                  <td className="px-5 py-3.5 text-sm font-semibold text-sky-600">{row.id}</td>
                  <td className="px-5 py-3.5 text-sm text-slate-500">{row.indent}</td>
                  <td className="px-5 py-3.5 text-sm text-slate-700">{row.vehicle}</td>
                  <td className="px-5 py-3.5 text-sm text-slate-500">{row.grossWt}</td>
                  <td className="px-5 py-3.5 text-sm text-slate-500">{row.tareWt}</td>
                  <td className="px-5 py-3.5 text-sm text-slate-800 font-semibold">{row.netWt}</td>
                  <td className="px-5 py-3.5 text-sm text-slate-400">{row.date}</td>
                  <td className="px-5 py-3.5">
                    <button className="p-1.5 rounded-lg text-slate-400 hover:text-sky-600 hover:bg-sky-50 transition-all"><Download size={16} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="md:hidden space-y-3">
        {slips.map((row) => (
          <div key={row.id} className="bg-white rounded-2xl p-4 border border-sky-100 shadow-sm card-hover">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-bold text-sky-600">{row.id}</span>
              <button className="p-1.5 rounded-lg text-slate-400 hover:text-sky-600 hover:bg-sky-50 transition-all"><Download size={16} /></button>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-slate-400">Indent</span><span className="text-slate-500">{row.indent}</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Vehicle</span><span className="text-slate-700">{row.vehicle}</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Net Wt</span><span className="text-slate-800 font-bold">{row.netWt}</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Date</span><span className="text-slate-400">{row.date}</span></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
