import { useState } from 'react'
import { X } from 'lucide-react'

export default function IndentForm({ isOpen, onClose, onSave, nextId }) {
  const [formData, setFormData] = useState({
    email: '',
    partyName: '',
    materialName: '',
    totalQty: '',
    deliveryLocation: '',
    unit: 'KL',
    dispatch: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave({
      ...formData,
      indentId: nextId,
    })
    setFormData({
      email: '',
      partyName: '',
      materialName: '',
      totalQty: '',
      deliveryLocation: '',
      unit: 'KL',
      dispatch: '',
    })
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl shadow-sky-200/30 border border-sky-100 animate-scale-in max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-sky-100">
          <div>
            <h3 className="text-lg font-semibold text-slate-800">New Indent</h3>
            <p className="text-xs text-slate-400 mt-0.5">ID: {nextId}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-50 transition-all duration-200"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-5 space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-1.5">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email address"
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 placeholder-slate-400 text-sm transition-all duration-200"
              required
            />
          </div>

          {/* Party Name */}
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-1.5">Party Name</label>
            <input
              type="text"
              name="partyName"
              value={formData.partyName}
              onChange={handleChange}
              placeholder="Enter party name"
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 placeholder-slate-400 text-sm transition-all duration-200"
              required
            />
          </div>

          {/* Material Name */}
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-1.5">Material Name</label>
            <input
              type="text"
              name="materialName"
              value={formData.materialName}
              onChange={handleChange}
              placeholder="Enter material name"
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 placeholder-slate-400 text-sm transition-all duration-200"
              required
            />
          </div>

          {/* Total Qty + Unit */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-1.5">Total Qty</label>
              <input
                type="number"
                name="totalQty"
                value={formData.totalQty}
                onChange={handleChange}
                placeholder="0"
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 placeholder-slate-400 text-sm transition-all duration-200"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-1.5">Unit</label>
              <input
                type="text"
                name="unit"
                value={formData.unit}
                readOnly
                className="w-full px-4 py-2.5 bg-slate-100 border border-slate-200 rounded-xl text-slate-400 text-sm cursor-not-allowed"
              />
            </div>
          </div>

          {/* Delivery Location */}
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-1.5">Delivery Location</label>
            <input
              type="text"
              name="deliveryLocation"
              value={formData.deliveryLocation}
              onChange={handleChange}
              placeholder="Enter delivery location"
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 placeholder-slate-400 text-sm transition-all duration-200"
              required
            />
          </div>

          {/* Dispatch */}
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-1.5">Dispatch</label>
            <select
              name="dispatch"
              value={formData.dispatch}
              onChange={handleChange}
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 text-sm transition-all duration-200 appearance-none"
              required
            >
              <option value="">Select status</option>
              <option value="Pending">Pending</option>
              <option value="Ready">Ready</option>
              <option value="In Transit">In Transit</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3 pt-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2.5 px-4 rounded-xl border border-slate-200 text-slate-500 font-medium text-sm
                hover:bg-slate-50 hover:text-slate-700 transition-all duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 text-white font-semibold text-sm
                hover:from-sky-400 hover:to-sky-500 transition-all duration-300
                shadow-lg shadow-sky-500/20 active:scale-[0.98] transform"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
