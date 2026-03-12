import { useState } from 'react'
import { Plus, Search, Filter, Download, Eye } from 'lucide-react'
import IndentForm from './IndentForm'

const generateDummyData = () => {
  const parties = [
    'Reliance Industries', 'Tata Steel', 'Adani Enterprises', 'Bharti Airtel',
    'Hindustan Unilever', 'ONGC Ltd', 'NTPC Limited', 'Power Grid Corp',
    'Larsen & Toubro', 'Bajaj Finance', 'Maruti Suzuki', 'Axis Bank',
    'Sun Pharma', 'Titan Company', 'Wipro Ltd', 'Tech Mahindra',
    'Asian Paints', 'Nestle India', 'Ultratech Cement', 'JSW Steel',
  ]
  const materials = [
    'Crude Oil', 'Diesel', 'Petrol', 'Kerosene',
    'LPG', 'Naphtha', 'Bitumen', 'Furnace Oil',
    'Aviation Fuel', 'Base Oil', 'Lube Oil', 'Wax',
    'Sulphur', 'Benzene', 'Toluene', 'Xylene',
    'Ethanol', 'Methanol', 'Propane', 'Butane',
  ]
  const locations = [
    'Mumbai', 'Delhi', 'Bangalore', 'Chennai',
    'Kolkata', 'Hyderabad', 'Pune', 'Ahmedabad',
    'Jaipur', 'Lucknow', 'Surat', 'Nagpur',
    'Indore', 'Bhopal', 'Patna', 'Vadodara',
    'Kanpur', 'Coimbatore', 'Rajkot', 'Visakhapatnam',
  ]
  const dispatches = ['Pending', 'Ready', 'In Transit', 'Delivered']

  return Array.from({ length: 20 }, (_, i) => ({
    indentId: `SN-${String(i + 1).padStart(3, '0')}`,
    email: `${parties[i].toLowerCase().replace(/\s+/g, '.')}@company.com`,
    partyName: parties[i],
    materialName: materials[i],
    totalQty: Math.floor(Math.random() * 900 + 100),
    deliveryLocation: locations[i],
    unit: 'KL',
    dispatch: dispatches[Math.floor(Math.random() * dispatches.length)],
  }))
}

export default function Indent() {
  const [data, setData] = useState(generateDummyData)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [sortColumn, setSortColumn] = useState('')
  const [sortOrder, setSortOrder] = useState('asc')
  const [showSort, setShowSort] = useState(false)

  const getNextId = () => {
    const num = data.length + 1
    return `SN-${String(num).padStart(3, '0')}`
  }

  const handleSave = (newRow) => {
    setData((prev) => [...prev, newRow])
    setIsFormOpen(false)
  }

  const filteredData = data.filter(
    (row) =>
      row.indentId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.partyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.materialName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.deliveryLocation.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortColumn) return 0

    const valA = a[sortColumn]
    const valB = b[sortColumn]

    if (typeof valA === 'number') {
      return sortOrder === 'asc' ? valA - valB : valB - valA
    }

    return sortOrder === 'asc'
      ? String(valA).localeCompare(String(valB))
      : String(valB).localeCompare(String(valA))
  })

  const getDispatchBadge = (status) => {
    const styles = {
      Pending: 'bg-amber-50 text-amber-600 border-amber-200',
      Ready: 'bg-sky-50 text-sky-600 border-sky-200',
      'In Transit': 'bg-violet-50 text-violet-600 border-violet-200',
      Delivered: 'bg-emerald-50 text-emerald-600 border-emerald-200',
    }
    return styles[status] || 'bg-slate-50 text-slate-500'
  }

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-800">Indent Management</h2>
          <p className="text-sm text-slate-400 mt-1">{data.length} total records</p>
        </div>
        <button
          onClick={() => setIsFormOpen(true)}
          className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 text-white font-semibold text-sm
            hover:from-sky-400 hover:to-sky-500 transition-all duration-300
            shadow-lg shadow-sky-500/20 active:scale-[0.98] transform"
        >
          <Plus size={18} />
          New Indent
        </button>
      </div>

      {/* Filters bar */}
      <div className="bg-white rounded-2xl p-4 border border-sky-100 shadow-sm flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        <div className="flex-1 flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5">
          <Search size={16} className="text-slate-400 flex-shrink-0" />
          <input
            type="text"
            placeholder="Search indents..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-transparent text-sm text-slate-700 placeholder-slate-400 w-full border-none focus:ring-0 focus:shadow-none focus:outline-none"
          />
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <button
              onClick={() => setShowSort(!showSort)}
              className="flex items-center justify-center gap-2 
  px-3 sm:px-4 py-2 sm:py-2.5
  rounded-xl border border-slate-200 
  text-slate-500 hover:text-slate-700 hover:bg-slate-50 
  transition-all text-sm flex-shrink-0"
            >
              <Filter size={16} />
              <span className="hidden sm:inline">Filter</span>
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
                    <option value="indentId">Indent ID</option>
                    <option value="partyName">Party Name</option>
                    <option value="materialName">Material</option>
                    <option value="totalQty">Total Qty</option>
                    <option value="deliveryLocation">Location</option>
                    <option value="dispatch">Dispatch</option>
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
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 text-slate-500 hover:text-slate-700 hover:bg-slate-50 transition-all text-sm">
            <Download size={16} />
            <span className="hidden sm:inline">Export</span>
          </button>
        </div>
      </div>

      {/* Desktop Table */}
      <div className="bg-white rounded-2xl border border-sky-100 shadow-sm overflow-hidden hidden md:block">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-sky-100 bg-sky-50/50">
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Indent ID</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Email Address</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Party Name</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Material Name</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Total Qty</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Delivery Location</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Unit</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Dispatch</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {sortedData.map((row) => (
                <tr
                  key={row.indentId}
                  className="hover:bg-sky-50/30 transition-colors duration-150"
                >
                  <td className="px-5 py-3.5">
                    <span className="text-sm font-semibold text-sky-600">{row.indentId}</span>
                  </td>
                  <td className="px-5 py-3.5 text-sm text-slate-500 truncate max-w-[180px]">{row.email}</td>
                  <td className="px-5 py-3.5 text-sm text-slate-700 font-medium">{row.partyName}</td>
                  <td className="px-5 py-3.5 text-sm text-slate-500">{row.materialName}</td>
                  <td className="px-5 py-3.5 text-sm text-slate-700 font-medium">{row.totalQty}</td>
                  <td className="px-5 py-3.5 text-sm text-slate-500">{row.deliveryLocation}</td>
                  <td className="px-5 py-3.5 text-sm text-slate-400">{row.unit}</td>
                  <td className="px-5 py-3.5">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${getDispatchBadge(row.dispatch)}`}>
                      {row.dispatch}
                    </span>
                  </td>
                  <td className="px-5 py-3.5">
                    <button className="p-1.5 rounded-lg text-slate-400 hover:text-sky-600 hover:bg-sky-50 transition-all">
                      <Eye size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-3">
        {sortedData.map((row) => (
          <div key={row.indentId} className="bg-white rounded-2xl p-4 border border-sky-100 shadow-sm card-hover">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-bold text-sky-600">{row.indentId}</span>
              <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${getDispatchBadge(row.dispatch)}`}>
                {row.dispatch}
              </span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-xs text-slate-400">Party Name</span>
                <span className="text-sm text-slate-700 font-medium">{row.partyName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-slate-400">Material</span>
                <span className="text-sm text-slate-500">{row.materialName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-slate-400">Qty</span>
                <span className="text-sm text-slate-700 font-medium">{row.totalQty} {row.unit}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-slate-400">Location</span>
                <span className="text-sm text-slate-500">{row.deliveryLocation}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-slate-400">Email</span>
                <span className="text-sm text-slate-500 truncate ml-4">{row.email}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Indent Form Modal */}
      <IndentForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSave={handleSave}
        nextId={getNextId()}
      />
    </div>
  )
}