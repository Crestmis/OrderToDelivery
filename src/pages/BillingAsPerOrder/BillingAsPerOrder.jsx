import { Receipt, IndianRupee, Clock } from 'lucide-react'

const bills = [
  { id: 'SN-001', party: 'Reliance Industries', material: 'Crude Oil', qty: '500 KL', rate: '₹85/KL', amount: '₹42,500', status: 'Billed', invoice: 'INV-2026-001' },
  { id: 'SN-002', party: 'Tata Steel', material: 'Diesel', qty: '350 KL', rate: '₹92/KL', amount: '₹32,200', status: 'Billed', invoice: 'INV-2026-002' },
  { id: 'SN-003', party: 'Adani Enterprises', material: 'Petrol', qty: '300 KL', rate: '₹98/KL', amount: '₹29,400', status: 'Pending', invoice: '—' },
  { id: 'SN-007', party: 'NTPC Limited', material: 'Furnace Oil', qty: '700 KL', rate: '₹75/KL', amount: '₹52,500', status: 'Pending', invoice: '—' },
]

export default function BillingAsPerOrder() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-slate-800">Billing as per Order</h2>
        <p className="text-sm text-slate-400 mt-1">Generate and manage billing for completed orders</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-2xl p-5 border border-sky-100 shadow-sm card-hover">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center"><IndianRupee size={18} className="text-white" /></div>
            <div><p className="text-2xl font-bold text-slate-800">₹74,700</p><p className="text-sm text-slate-400">Billed Amount</p></div>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-5 border border-sky-100 shadow-sm card-hover">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center"><Clock size={18} className="text-white" /></div>
            <div><p className="text-2xl font-bold text-slate-800">₹81,900</p><p className="text-sm text-slate-400">Pending Amount</p></div>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-5 border border-sky-100 shadow-sm card-hover">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-sky-600 flex items-center justify-center"><Receipt size={18} className="text-white" /></div>
            <div><p className="text-2xl font-bold text-slate-800">4</p><p className="text-sm text-slate-400">Total Orders</p></div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-sky-100 shadow-sm overflow-hidden hidden md:block">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-sky-100 bg-sky-50/50">
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Indent ID</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Party</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Material</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Qty</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Rate</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Amount</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Invoice</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {bills.map((row) => (
                <tr key={row.id} className="hover:bg-sky-50/30 transition-colors">
                  <td className="px-5 py-3.5 text-sm font-semibold text-sky-600">{row.id}</td>
                  <td className="px-5 py-3.5 text-sm text-slate-700 font-medium">{row.party}</td>
                  <td className="px-5 py-3.5 text-sm text-slate-500">{row.material}</td>
                  <td className="px-5 py-3.5 text-sm text-slate-700">{row.qty}</td>
                  <td className="px-5 py-3.5 text-sm text-slate-500">{row.rate}</td>
                  <td className="px-5 py-3.5 text-sm text-slate-800 font-semibold">{row.amount}</td>
                  <td className="px-5 py-3.5 text-sm text-slate-500">{row.invoice}</td>
                  <td className="px-5 py-3.5">
                    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium border ${
                      row.status === 'Billed' ? 'bg-emerald-50 text-emerald-600 border-emerald-200' : 'bg-amber-50 text-amber-600 border-amber-200'
                    }`}>{row.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="md:hidden space-y-3">
        {bills.map((row) => (
          <div key={row.id} className="bg-white rounded-2xl p-4 border border-sky-100 shadow-sm card-hover">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-bold text-sky-600">{row.id}</span>
              <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${
                row.status === 'Billed' ? 'bg-emerald-50 text-emerald-600 border-emerald-200' : 'bg-amber-50 text-amber-600 border-amber-200'
              }`}>{row.status}</span>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-slate-400">Party</span><span className="text-slate-700">{row.party}</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Material</span><span className="text-slate-500">{row.material}</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Amount</span><span className="text-slate-800 font-bold">{row.amount}</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Invoice</span><span className="text-slate-500">{row.invoice}</span></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
