import { useState, useMemo } from "react"
import { ArrowRightLeft, FileUp, FileDown, Clock, Filter } from "lucide-react"

const notes = [
  { id: 'CN-001', indent: 'SN-001', type: 'Credit Note', party: 'Reliance Industries', amount: '₹2,500', reason: 'Quality premium', status: 'Sent', date: '2026-03-10' },
  { id: 'DN-001', indent: 'SN-003', type: 'Debit Note', party: 'Adani Enterprises', amount: '₹4,200', reason: 'Shortage deduction', status: 'Sent', date: '2026-03-11' },
  { id: 'CN-002', indent: 'SN-007', type: 'Credit Note', party: 'NTPC Limited', amount: '₹1,800', reason: 'Early delivery bonus', status: 'Pending', date: '—' },
  { id: 'DN-002', indent: 'SN-002', type: 'Debit Note', party: 'Tata Steel', amount: '₹3,100', reason: 'Damage deduction', status: 'Draft', date: '—' },
]

export default function SendCNDN() {
  const [showRemarkPopup, setShowRemarkPopup] = useState(false)
  const [selectedRow, setSelectedRow] = useState(null)
  const [remark, setRemark] = useState("")
  const openRemarkPopup = (row) => {
    setSelectedRow(row)
    setRemark("")
    setShowRemarkPopup(true)
  }
  const [showFilter, setShowFilter] = useState(false)
  const [sortColumn, setSortColumn] = useState("date")
  const [sortOrder, setSortOrder] = useState("desc")
  const sortedNotes = useMemo(() => {
    return [...notes].sort((a, b) => {

      let valA = a[sortColumn]
      let valB = b[sortColumn]

      if (sortColumn === "amount") {
        valA = Number(valA.replace(/[₹,]/g, ""))
        valB = Number(valB.replace(/[₹,]/g, ""))
      }

      if (sortColumn === "date") {
        valA = new Date(valA === "—" ? 0 : valA)
        valB = new Date(valB === "—" ? 0 : valB)
      }

      if (valA < valB) return sortOrder === "asc" ? -1 : 1
      if (valA > valB) return sortOrder === "asc" ? 1 : -1
      return 0
    })
  }, [sortColumn, sortOrder])

  return (
    <div className="space-y-6 ">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-xl font-bold text-slate-800">Send CN/DN</h2>
          <p className="text-sm text-slate-400 mt-1">
            Manage Credit Notes and Debit Notes
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4 flex-wrap">

          {/* Filter */}
          <div className="relative">
            <button
              onClick={() => setShowFilter(!showFilter)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 text-slate-500 hover:text-slate-700 hover:bg-slate-50 transition-all text-sm"
            >
              <Filter size={16} />
              <span className="hidden sm:inline">Filter</span>
            </button>

            {showFilter && (
              <div className="absolute right-0 mt-2 w-56 bg-white border border-slate-200 rounded-xl shadow-lg z-20 p-4 space-y-3">

                {/* Sort Column */}
                <div>
                  <label className="text-xs text-slate-400">Sort Column</label>
                  <select
                    value={sortColumn}
                    onChange={(e) => setSortColumn(e.target.value)}
                    className="mt-1 w-full text-sm border border-slate-200 rounded-lg px-2 py-1.5"
                  >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                    <option value="party">Party</option>
                    <option value="status">Status</option>
                  </select>
                </div>

                {/* Sort Order */}
                <div>
                  <label className="text-xs text-slate-400">Order</label>
                  <select
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                    className="mt-1 w-full text-sm border border-slate-200 rounded-lg px-2 py-1.5"
                  >
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                  </select>
                </div>

              </div>
            )}
          </div>

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
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Action</th>
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
              {sortedNotes.map((row) => (
                <tr key={row.id} className="hover:bg-sky-50/30 transition-colors">

                  <td className="px-5 py-3.5">
                    <button
                      onClick={() => openRemarkPopup(row)}
                      className="px-3 py-1 text-xs rounded-lg bg-sky-500 text-white bg-sky-400 hover:bg-sky-600"
                    >
                      Update
                    </button>
                  </td>

                  <td className="px-5 py-3.5 text-sm font-semibold text-sky-600">{row.id}</td>
                  <td className="px-5 py-3.5 text-sm font-semibold text-sky-600">{row.id}</td>
                  <td className="px-5 py-3.5 text-sm text-slate-500">{row.indent}</td>
                  <td className="px-5 py-3.5">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${row.type === 'Credit Note' ? 'bg-emerald-50 text-emerald-600 border-emerald-200' : 'bg-red-50 text-red-600 border-red-200'
                      }`}>{row.type}</span>
                  </td>
                  <td className="px-5 py-3.5 text-sm text-slate-700 font-medium">{row.party}</td>
                  <td className="px-5 py-3.5 text-sm text-slate-800 font-semibold">{row.amount}</td>
                  <td className="px-5 py-3.5 text-sm text-slate-500">{row.reason}</td>
                  <td className="px-5 py-3.5 text-sm text-slate-400">{row.date}</td>
                  <td className="px-5 py-3.5">
                    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium border ${row.status === 'Sent' ? 'bg-emerald-50 text-emerald-600 border-emerald-200' :
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
        {sortedNotes.map((row) => (
          <div key={row.id} className="bg-white rounded-2xl p-4 border border-sky-100 shadow-sm card-hover">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-bold text-sky-600">{row.id}</span>
              <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${row.type === 'Credit Note' ? 'bg-emerald-50 text-emerald-600 border-emerald-200' : 'bg-red-50 text-red-600 border-red-200'
                }`}>{row.type}</span>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-slate-400">Party</span><span className="text-slate-700">{row.party}</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Amount</span><span className="text-slate-800 font-bold">{row.amount}</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Reason</span><span className="text-slate-500">{row.reason}</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Status</span>
                <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${row.status === 'Sent' ? 'text-emerald-600' : row.status === 'Draft' ? 'text-sky-600' : 'text-amber-600'
                  }`}>{row.status}</span>
              </div>
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
