import { Send, Mail, CheckCircle, Filter } from 'lucide-react'
import { useState } from 'react'

const details = [
  { id: 'SN-001', party: 'Reliance Industries', email: 'reliance@company.com', sentAt: '2026-03-10 09:30', status: 'Sent' },
  { id: 'SN-002', party: 'Tata Steel', email: 'tata.steel@company.com', sentAt: '2026-03-10 10:15', status: 'Sent' },
  { id: 'SN-004', party: 'Bharti Airtel', email: 'bharti@company.com', sentAt: '—', status: 'Pending' },
  { id: 'SN-007', party: 'NTPC Limited', email: 'ntpc@company.com', sentAt: '2026-03-09 14:20', status: 'Sent' },
]

export default function SendDetails() {
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

  const sortedData = [...details].sort((a, b) => {
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
          <h2 className="text-xl font-bold text-slate-800">Send Details</h2>
          <p className="text-sm text-slate-400 mt-1">
            Send indent details to respective parties
          </p>
        </div>

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
                  <option value="email">Email</option>
                  <option value="sentAt">Sent At</option>
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
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase">Action</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase">Indent ID</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase">Party Name</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase">Email</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase">Sent At</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {sortedData.map((row) => (
                <tr key={row.id} className="hover:bg-sky-50/30 transition-colors">

                  <td className="px-5 py-3.5">
                    {row.status === 'Pending' && (
                      <button
                        onClick={() => openActionPopup(row)}
                        className="px-3 py-1.5 rounded-lg text-xs font-medium bg-sky-50 text-sky-600 hover:bg-sky-100"
                      >
                        Update
                      </button>
                    )}
                  </td>

                  <td className="px-5 py-3.5 text-sm font-semibold text-sky-600">{row.id}</td>
                  <td className="px-5 py-3.5 text-sm text-slate-700 font-medium">{row.party}</td>
                  <td className="px-5 py-3.5 text-sm text-slate-500">{row.email}</td>
                  <td className="px-5 py-3.5 text-sm text-slate-400">{row.sentAt}</td>

                  <td className="px-5 py-3.5">
                    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium border ${row.status === 'Sent'
                      ? 'bg-emerald-50 text-emerald-600 border-emerald-200'
                      : 'bg-amber-50 text-amber-600 border-amber-200'
                      }`}>
                      {row.status === 'Sent' ? <CheckCircle size={12} /> : <Send size={12} />}
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
              <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium border ${row.status === 'Sent' ? 'bg-emerald-50 text-emerald-600 border-emerald-200' : 'bg-amber-50 text-amber-600 border-amber-200'
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
      {showActionPopup && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">

          <div className="bg-white rounded-2xl p-6 w-[340px] shadow-xl">

            <h3 className="text-lg font-semibold text-slate-800 mb-1">
              Send Details
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
                className="flex-1 py-2 rounded-lg bg-sky-600 text-white hover:bg-sky-700 text-sm flex items-center justify-center gap-1"
              >
                <Send size={14} /> Send Now
              </button>

            </div>

          </div>

        </div>
      )}
    </div>
  )
}
