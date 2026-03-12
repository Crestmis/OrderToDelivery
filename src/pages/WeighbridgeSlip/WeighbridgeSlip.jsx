import { Scale, FileText, Download, Filter } from 'lucide-react'
import { useState } from 'react'


const slips = [
  { id: 'WB-001', indent: 'SN-001', vehicle: 'MH-04-AB-1234', grossWt: '35,200 KG', tareWt: '12,500 KG', netWt: '22,700 KG', date: '2026-03-10 10:30', operator: 'Vijay Kumar' },
  { id: 'WB-002', indent: 'SN-002', vehicle: 'MH-12-CD-5678', grossWt: '28,800 KG', tareWt: '11,200 KG', netWt: '17,600 KG', date: '2026-03-10 11:15', operator: 'Vijay Kumar' },
  { id: 'WB-003', indent: 'SN-007', vehicle: 'GJ-01-EF-9012', grossWt: '42,100 KG', tareWt: '13,800 KG', netWt: '28,300 KG', date: '2026-03-09 14:45', operator: 'Anil Sharma' },
]

export default function WeighbridgeSlip() {
  const [showRemarkPopup, setShowRemarkPopup] = useState(false)
  const [selectedRow, setSelectedRow] = useState(null)
  const [remark, setRemark] = useState("")
  const openRemarkPopup = (row) => {
    setSelectedRow(row)
    setRemark("")
    setShowRemarkPopup(true)
  }
  const [sortColumn, setSortColumn] = useState('')
  const [sortOrder, setSortOrder] = useState('asc')
  const [showSort, setShowSort] = useState(false)
  const sortedData = [...slips].sort((a, b) => {
    if (!sortColumn) return 0

    const valA = a[sortColumn]
    const valB = b[sortColumn]

    return sortOrder === 'asc'
      ? String(valA).localeCompare(String(valB))
      : String(valB).localeCompare(String(valA))
  })

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-800">Weighbridge Slip</h2>
          <p className="text-sm text-slate-400 mt-1">
            View and manage weighbridge records
          </p>
        </div>

        <div className="flex items-center gap-2">

          {/* Sort Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowSort(!showSort)}
              className="flex bg-white items-center justify-center gap-2 px-3 py-2 rounded-xl border border-slate-200 text-slate-500 hover:text-slate-700 hover:bg-slate-50 transition-all text-sm"
            >
              <Filter size={16} /> Filter
            </button>

            {showSort && (
              <div className="absolute right-0 mt-2 w-56 bg-white border border-slate-200 rounded-xl shadow-lg p-3 z-20 space-y-3">

                <div>
                  <label className="text-xs text-slate-400">Sort Column</label>
                  <select
                    value={sortColumn}
                    onChange={(e) => setSortColumn(e.target.value)}
                    className="w-full mt-1 border border-slate-200 rounded-lg text-sm p-2"
                  >
                    <option value="">None</option>
                    <option value="id">Slip ID</option>
                    <option value="indent">Indent</option>
                    <option value="vehicle">Vehicle</option>
                    <option value="grossWt">Gross Weight</option>
                    <option value="tareWt">Tare Weight</option>
                    <option value="netWt">Net Weight</option>
                    <option value="date">Date</option>
                    <option value="operator">Operator</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs text-slate-400">Order</label>
                  <select
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                    className="w-full mt-1 border border-slate-200 rounded-lg text-sm p-2"
                  >
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                  </select>
                </div>

              </div>
            )}
          </div>

          {/* New Slip Button */}
          <button className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 text-white font-semibold text-sm hover:from-sky-400 hover:to-sky-500 transition-all shadow-lg shadow-sky-500/20">
            <FileText size={18} /> New Slip
          </button>

        </div>
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
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Action</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Slip ID</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Indent</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Vehicle</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Gross Wt</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Tare Wt</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Net Wt</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Date/Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {sortedData.map((row) => (
                <tr key={row.id} className="hover:bg-sky-50/30 transition-colors">
                  <td className="px-5 py-3.5">
                    <button
                      onClick={() => openRemarkPopup(row)}
                      className="px-3 py-1 text-xs rounded-lg bg-sky-500 text-white hover:bg-sky-600"
                    >
                      Update
                    </button>
                  </td>
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
        {sortedData.map((row) => (
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

      {showRemarkPopup && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">

          <div className="bg-white rounded-2xl w-[360px] p-5 shadow-xl space-y-4">

            <h3 className="text-lg font-semibold text-slate-800">
              Add Remark ({selectedRow?.id})
            </h3>

            <input
              type="text"
              placeholder="Enter remark"
              value={remark}
              onChange={(e) => setRemark(e.target.value)}
              className="w-full border border-slate-200 rounded-lg p-2 text-sm"
            />

            <div className="flex justify-end gap-3 pt-2">

              <button
                onClick={() => setShowRemarkPopup(false)}
                className="px-4 py-2 text-sm border border-slate-200 rounded-lg hover:bg-slate-50"
              >
                Cancel
              </button>

              <button
                onClick={() => {
                  console.log("Remark:", remark, "Row:", selectedRow)
                  setShowRemarkPopup(false)
                }}
                className="px-4 py-2 text-sm bg-sky-500 text-white rounded-lg hover:bg-sky-600"
              >
                Done
              </button>

            </div>

          </div>

        </div>
      )}
    </div>
  )
}
