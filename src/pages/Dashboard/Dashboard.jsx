import {
  FileText,
  CheckSquare,
  Truck,
  Package,
  Factory,
  ShieldCheck,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
} from 'lucide-react'

const stats = [
  { label: 'Total Indents', value: '247', change: '+12%', up: true, icon: FileText, color: 'from-sky-500 to-sky-600' },
  { label: 'Pending Approvals', value: '18', change: '-5%', up: false, icon: CheckSquare, color: 'from-amber-500 to-orange-500' },
  { label: 'Dispatched Today', value: '34', change: '+8%', up: true, icon: Truck, color: 'from-emerald-500 to-green-600' },
  { label: 'In Production', value: '12', change: '+3%', up: true, icon: Factory, color: 'from-violet-500 to-purple-600' },
  { label: 'Quality Checks', value: '56', change: '+15%', up: true, icon: ShieldCheck, color: 'from-cyan-500 to-teal-600' },
  { label: 'Materials Ready', value: '89', change: '+2%', up: true, icon: Package, color: 'from-pink-500 to-rose-600' },
]

const recentActivities = [
  { id: 1, action: 'New indent SN-247 created', user: 'Admin', time: '2 min ago', type: 'indent' },
  { id: 2, action: 'Indent SN-240 approved', user: 'Manager', time: '15 min ago', type: 'approval' },
  { id: 3, action: 'Dispatch confirmed for SN-235', user: 'Dispatch Team', time: '1 hr ago', type: 'dispatch' },
  { id: 4, action: 'Quality check passed for SN-230', user: 'QA Team', time: '2 hr ago', type: 'quality' },
  { id: 5, action: 'Vehicle placed for SN-228', user: 'Transport', time: '3 hr ago', type: 'vehicle' },
  { id: 6, action: 'Billing completed for SN-225', user: 'Accounts', time: '4 hr ago', type: 'billing' },
]

export default function Dashboard() {
  return (
    <div className="space-y-6 md:space-y-8">
      {/* Welcome banner */}
      <div className="bg-white rounded-2xl p-6 md:p-8 border border-sky-100 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-sky-100/50 to-sky-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="relative">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-800">
            Welcome back, <span className="gradient-text">Admin</span> 👋
          </h1>
          <p className="text-slate-400 mt-2 text-sm md:text-base">
            Here's an overview of your order-to-delivery pipeline today.
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div
              key={stat.label}
              className="bg-white rounded-2xl p-5 border border-sky-100 shadow-sm card-hover animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}>
                  <Icon size={20} className="text-white" />
                </div>
                <div className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full ${
                  stat.up
                    ? 'text-emerald-600 bg-emerald-50'
                    : 'text-red-600 bg-red-50'
                }`}>
                  {stat.up ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                  {stat.change}
                </div>
              </div>
              <div className="mt-4">
                <p className="text-2xl font-bold text-slate-800">{stat.value}</p>
                <p className="text-sm text-slate-400 mt-0.5">{stat.label}</p>
              </div>
            </div>
          )
        })}
      </div>

      {/* Recent Activity & Quick Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 md:gap-5">
        {/* Recent Activity */}
        <div className="lg:col-span-3 bg-white rounded-2xl p-5 md:p-6 border border-sky-100 shadow-sm">
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-lg font-semibold text-slate-800">Recent Activity</h3>
            <button className="text-sm text-sky-500 hover:text-sky-600 transition-colors">View all</button>
          </div>
          <div className="space-y-3">
            {recentActivities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-center gap-4 p-3 rounded-xl hover:bg-sky-50/50 transition-all duration-200"
              >
                <div className="w-9 h-9 rounded-lg bg-sky-50 flex items-center justify-center flex-shrink-0">
                  <TrendingUp size={16} className="text-sky-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-slate-700 truncate">{activity.action}</p>
                  <p className="text-xs text-slate-400">{activity.user}</p>
                </div>
                <div className="flex items-center gap-1 text-xs text-slate-400 flex-shrink-0">
                  <Clock size={12} />
                  {activity.time}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pipeline Progress */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-5 md:p-6 border border-sky-100 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-800 mb-5">Pipeline Progress</h3>
          <div className="space-y-4">
            {[
              { label: 'Indent Created', value: 92, color: 'bg-sky-500' },
              { label: 'Approved', value: 78, color: 'bg-amber-500' },
              { label: 'In Production', value: 55, color: 'bg-violet-500' },
              { label: 'Quality Passed', value: 45, color: 'bg-emerald-500' },
              { label: 'Dispatched', value: 38, color: 'bg-cyan-500' },
              { label: 'Delivered', value: 30, color: 'bg-pink-500' },
            ].map((item) => (
              <div key={item.label}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm text-slate-500">{item.label}</span>
                  <span className="text-sm font-semibold text-slate-700">{item.value}%</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${item.color} transition-all duration-1000 ease-out`}
                    style={{ width: `${item.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
