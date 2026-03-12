import { CarFront, Clock, CheckCircle, Filter } from 'lucide-react'
import { useState } from 'react'

const vehicles = [
  { id: 'SN-001', party: 'Reliance Industries', vehicle: 'MH-04-AB-1234', type: 'Tanker', driver: 'Rajan Kumar', phone: '9876543210', status: 'Placed', eta: '2 hrs' },
  { id: 'SN-002', party: 'Tata Steel', vehicle: 'MH-12-CD-5678', type: 'Tanker', driver: 'Suresh Patel', phone: '9876543211', status: 'Placed', eta: '4 hrs' },
  { id: 'SN-003', party: 'Adani Enterprises', vehicle: '—', type: '—', driver: '—', phone: '—', status: 'Not Placed', eta: '—' },
  { id: 'SN-007', party: 'NTPC Limited', vehicle: 'GJ-01-EF-9012', type: 'Tanker', driver: 'Manoj Singh', phone: '9876543212', status: 'En Route', eta: '1 hr' },
]

export default function VehiclePlacement() {
  const [remark, setRemark] = useState("")
  const [sortColumn, setSortColumn] = useState('')
  const [sortOrder, setSortOrder] = useState('asc')
  const [showSort, setShowSort] = useState(false)
  const sortedData = [...vehicles].sort((a, b) => {
    if (!sortColumn) return 0

    const valA = a[sortColumn]
    const valB = b[sortColumn]

    return sortOrder === 'asc'
      ? String(valA).localeCompare(String(valB))
      : String(valB).localeCompare(String(valA))
  })

  const [showActionPopup, setShowActionPopup] = useState(false)
  const [selectedRow, setSelectedRow] = useState(null)

  const [vehicleNo, setVehicleNo] = useState("")
  const [driver, setDriver] = useState("")
  const [phone, setPhone] = useState("")
  const [eta, setEta] = useState("")
  const openActionPopup = (row) => {
    setSelectedRow(row)
    setVehicleNo("")
    setDriver("")
    setPhone("")
    setEta("")
    setShowActionPopup(true)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-800">Vehicle Placement</h2>
          <p className="text-sm text-slate-400 mt-1">
            Assign and track vehicles for delivery
          </p>
        </div>

        {/* Sort Dropdown */}
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
                  <option value="type">Type</option>
                  <option value="driver">Driver</option>
                  <option value="eta">ETA</option>
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
          { label: 'Placed', count: 2, icon: CheckCircle, color: 'from-emerald-500 to-green-600' },
          { label: 'En Route', count: 1, icon: CarFront, color: 'from-sky-500 to-sky-600' },
          { label: 'Not Placed', count: 1, icon: Clock, color: 'from-amber-500 to-orange-500' },
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
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase">Type</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase">Driver</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase">ETA</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {sortedData.map((row) => (
                <tr key={row.id} className="hover:bg-sky-50/30 transition-colors">
                  <td className="px-5 py-3.5">
                    <button
                      onClick={() => openActionPopup(row)}
                      className="px-3 py-1.5 text-xs rounded-lg bg-sky-500 text-white hover:bg-sky-600"
                    >
                      Update
                    </button>
                  </td>
                  <td className="px-5 py-3.5 text-sm font-semibold text-sky-600">{row.id}</td>
                  <td className="px-5 py-3.5 text-sm text-slate-700 font-medium">{row.party}</td>
                  <td className="px-5 py-3.5 text-sm text-slate-500">{row.vehicle}</td>
                  <td className="px-5 py-3.5 text-sm text-slate-500">{row.type}</td>
                  <td className="px-5 py-3.5 text-sm text-slate-500">{row.driver}</td>
                  <td className="px-5 py-3.5 text-sm text-slate-700">{row.eta}</td>
                  <td className="px-5 py-3.5">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${row.status === 'Placed' ? 'bg-emerald-50 text-emerald-600 border-emerald-200' :
                      row.status === 'En Route' ? 'bg-sky-50 text-sky-600 border-sky-200' :
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
        {sortedData.map((row) => (
          <div key={row.id} className="bg-white rounded-2xl p-4 border border-sky-100 shadow-sm card-hover">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-bold text-sky-600">{row.id}</span>
              <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${row.status === 'Placed' ? 'bg-emerald-50 text-emerald-600 border-emerald-200' :
                row.status === 'En Route' ? 'bg-sky-50 text-sky-600 border-sky-200' :
                  'bg-amber-50 text-amber-600 border-amber-200'
                }`}>{row.status}</span>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-slate-400">Party</span><span className="text-slate-700">{row.party}</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Vehicle</span><span className="text-slate-500">{row.vehicle}</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Driver</span><span className="text-slate-500">{row.driver}</span></div>
              <div className="flex justify-between"><span className="text-slate-400">ETA</span><span className="text-slate-700">{row.eta}</span></div>
            </div>
          </div>
        ))}
      </div>
      {showActionPopup && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl w-[380px] p-6 space-y-4 shadow-xl">

            <h3 className="text-lg font-semibold text-slate-800">
              Vehicle ({selectedRow?.id})
            </h3>

            <input
              placeholder="Remark"
              value={vehicleNo}
              onChange={(e) => setVehicleNo(e.target.value)}
              className="w-full border border-slate-200 rounded-lg p-2 text-sm"
            />



            <div className="flex justify-end gap-3 pt-2">
              <button
                onClick={() => setShowActionPopup(false)}
                className="px-4 py-2 text-sm rounded-lg border border-slate-200 hover:bg-slate-50"
              >
                Cancel
              </button>

              <button
                onClick={() => {
                  console.log({
                    vehicleNo,
                    driver,
                    phone,
                    eta,
                    row: selectedRow
                  })
                  setShowActionPopup(false)
                }}
                className="px-4 py-2 text-sm rounded-lg bg-sky-500 text-white hover:bg-sky-600"
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
