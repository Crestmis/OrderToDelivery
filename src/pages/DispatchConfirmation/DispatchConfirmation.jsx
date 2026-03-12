import { Truck, CheckCircle, Clock, AlertTriangle, Filter } from 'lucide-react'
import { useState } from 'react'

const dispatches = [
  { id: 'SN-001', party: 'Reliance Industries', vehicle: 'MH-04-AB-1234', driver: 'Rajan Kumar', status: 'Confirmed', date: '2026-03-10' },
  { id: 'SN-002', party: 'Tata Steel', vehicle: 'MH-12-CD-5678', driver: 'Suresh Patel', status: 'Confirmed', date: '2026-03-10' },
  { id: 'SN-003', party: 'Adani Enterprises', vehicle: '—', driver: '—', status: 'Pending', date: '2026-03-11' },
  { id: 'SN-007', party: 'NTPC Limited', vehicle: 'GJ-01-EF-9012', driver: 'Manoj Singh', status: 'Confirmed', date: '2026-03-09' },
]

export default function DispatchConfirmation() {
  const [sortColumn, setSortColumn] = useState('')
  const [sortOrder, setSortOrder] = useState('asc')
  const [showSort, setShowSort] = useState(false)
  const [showActionPopup, setShowActionPopup] = useState(false)
  const [selectedRow, setSelectedRow] = useState(null)
  const [remark, setRemark] = useState("")

  const openActionPopup = (row) => {
    setSelectedRow(row)
    setRemark("")
    setShowActionPopup(true)
  }

  const sortedData = [...dispatches].sort((a, b) => {
    if (!sortColumn) return 0

    const valA = a[sortColumn]
    const valB = b[sortColumn]

    return sortOrder === 'asc'
      ? String(valA).localeCompare(String(valB))
      : String(valB).localeCompare(String(valA))
  })
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-800">Dispatch Confirmation</h2>
          <p className="text-sm text-slate-400 mt-1">
            Confirm dispatch details for approved indents
          </p>
        </div>

        {/* Filter Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowSort(!showSort)}
            className="flex bg-white items-center gap-2 px-3 py-2 rounded-xl border border-slate-200 text-slate-500 hover:text-slate-700 hover:bg-slate-50 transition-all text-sm"
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
                  <option value="id">Indent ID</option>
                  <option value="party">Party</option>
                  <option value="vehicle">Vehicle</option>
                  <option value="driver">Driver</option>
                  <option value="date">Date</option>
                  <option value="status">Status</option>
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
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase">Action</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase">Indent ID</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase">Party</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase">Vehicle No</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase">Driver</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase">Date</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {sortedData.map((row) => (
                <tr key={row.id} className="hover:bg-sky-50/30 transition-colors">

                  <td className="px-5 py-3.5">
                    <button
                      onClick={() => openActionPopup(row)}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-sky-50 text-sky-600 hover:bg-sky-100"
                    >
                      Action
                    </button>
                  </td>

                  <td className="px-5 py-3.5 text-sm font-semibold text-sky-600">{row.id}</td>
                  <td className="px-5 py-3.5 text-sm text-slate-700 font-medium">{row.party}</td>
                  <td className="px-5 py-3.5 text-sm text-slate-500">{row.vehicle}</td>
                  <td className="px-5 py-3.5 text-sm text-slate-500">{row.driver}</td>
                  <td className="px-5 py-3.5 text-sm text-slate-400">{row.date}</td>

                  <td className="px-5 py-3.5">
                    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium border ${row.status === 'Confirmed'
                      ? 'bg-emerald-50 text-emerald-600 border-emerald-200'
                      : 'bg-amber-50 text-amber-600 border-amber-200'
                      }`}>
                      {row.status}
                    </span>
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
              <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium border ${row.status === 'Confirmed' ? 'bg-emerald-50 text-emerald-600 border-emerald-200' : 'bg-amber-50 text-amber-600 border-amber-200'
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
      {showActionPopup && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">

          <div className="bg-white rounded-2xl p-6 w-[340px] shadow-xl">

            <h3 className="text-lg font-semibold text-slate-800 mb-2">
              Dispatch Remark
            </h3>

            <p className="text-sm text-slate-500 mb-4">
              {selectedRow?.id} - {selectedRow?.party}
            </p>

            <div className="mb-5">
              <label className="text-xs text-slate-400">Remark</label>

              <input
                type="text"
                placeholder="Enter remark..."
                value={remark}
                onChange={(e) => setRemark(e.target.value)}
                className="w-full mt-1 border border-slate-200 rounded-lg text-sm p-2 focus:ring-2 focus:ring-sky-200"
              />
            </div>

            <div className="flex gap-3">

              <button
                onClick={() => setShowActionPopup(false)}
                className="flex-1 py-2 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 text-sm"
              >
                Cancel
              </button>

              <button
                onClick={() => {
                  console.log({
                    id: selectedRow?.id,
                    remark: remark
                  })
                  setShowActionPopup(false)
                }}
                className="flex-1 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 text-sm"
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
