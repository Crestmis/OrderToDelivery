import { CheckSquare, Clock, CheckCircle, XCircle, Filter } from 'lucide-react'
import { useState } from 'react'

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
  const [showActionPopup, setShowActionPopup] = useState(false)
  const [selectedRow, setSelectedRow] = useState(null)

  const [sortColumn, setSortColumn] = useState('')
  const [sortOrder, setSortOrder] = useState('asc')
  const [showSort, setShowSort] = useState(false)
  const [actionStatus, setActionStatus] = useState("")
  const [remark, setRemark] = useState("")

  const openActionPopup = (row) => {
    setSelectedRow(row)
    setShowActionPopup(true)
    setActionStatus("")
    setRemark("")
  }


  const sortedData = [...approvals].sort((a, b) => {
    if (!sortColumn) return 0

    const valA = a[sortColumn]
    const valB = b[sortColumn]

    if (sortColumn === 'qty') {
      const numA = parseInt(valA)
      const numB = parseInt(valB)
      return sortOrder === 'asc' ? numA - numB : numB - numA
    }

    return sortOrder === 'asc'
      ? String(valA).localeCompare(String(valB))
      : String(valB).localeCompare(String(valA))
  })


  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-800">Indent Approval</h2>
          <p className="text-sm text-slate-400 mt-1">Review and approve pending indents</p>
        </div>

        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-amber-50 text-amber-600 border border-amber-200">
            <Clock size={12} /> 2 Pending
          </span>

          {/* Filter Button */}
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
                    <option value="party">Party Name</option>
                    <option value="material">Material</option>
                    <option value="qty">Quantity</option>
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
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase">Action</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase">Indent ID</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase">Party Name</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase">Material</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase">Qty</th>
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
                      Update
                    </button>
                  </td>

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
      {showActionPopup && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">

          <div className="bg-white rounded-2xl p-6 w-[340px] shadow-xl">

            <h3 className="text-lg font-semibold text-slate-800 mb-1">
              Indent Action
            </h3>

            <p className="text-sm text-slate-500 mb-4">
              {selectedRow?.id}
            </p>

            {/* Status Dropdown */}
            <div className="mb-4">
              <label className="text-xs text-slate-400">Status</label>
              <select
                value={actionStatus}
                onChange={(e) => setActionStatus(e.target.value)}
                className="w-full mt-1 border border-slate-200 rounded-lg text-sm p-2 focus:outline-none focus:ring-2 focus:ring-sky-200"
              >
                <option value="">Select Status</option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>

            {/* Remark Input */}
            <div className="mb-5">
              <label className="text-xs text-slate-400">Remark</label>
              <input
                type="text"
                placeholder="Enter remark..."
                value={remark}
                onChange={(e) => setRemark(e.target.value)}
                className="w-full mt-1 border border-slate-200 rounded-lg text-sm p-2 focus:outline-none focus:ring-2 focus:ring-sky-200"
              />
            </div>

            {/* Buttons */}
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
                    status: actionStatus,
                    remark: remark
                  })
                  setShowActionPopup(false)
                }}
                className="flex-1 py-2 rounded-lg bg-sky-600 text-white hover:bg-sky-700 text-sm"
              >
                Submit
              </button>

            </div>

          </div>

        </div>
      )}
    </div>
  )
}
