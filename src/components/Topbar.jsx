import { Menu, Bell, User, Search } from 'lucide-react'
import { useLocation } from 'react-router-dom'

const pageTitles = {
  '/dashboard': 'Dashboard',
  '/indent': 'Indent',
  '/indent-approval': 'Indent Approval',
  '/send-details': 'Send Details',
  '/dispatch-confirmation': 'Dispatch Confirmation',
  '/check-material': 'Check Material',
  '/material-production': 'Material Production',
  '/quality-check': 'Quality Check',
  '/vehicle-placement': 'Vehicle Placement',
  '/billing': 'Billing as per Order',
  '/weighbridge-slip': 'Weighbridge Slip',
  '/send-cn-dn': 'Send CN/DN',
}

export default function Topbar({ onMenuToggle }) {
  const location = useLocation()
  const pageTitle = pageTitles[location.pathname] || 'Dashboard'

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-sky-100 shadow-sm">
      <div className="flex items-center justify-between h-16 px-4 md:px-6">
        {/* Left section */}
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuToggle}
            className="lg:hidden p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-50 transition-all duration-200"
          >
            <Menu size={22} />
          </button>
          <div>
            <h2 className="text-lg font-semibold text-slate-800">{pageTitle}</h2>
            <p className="text-xs text-slate-400 hidden sm:block">Order to Delivery System</p>
          </div>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* Search - desktop only */}
          <div className="hidden md:flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2">
            <Search size={16} className="text-slate-400" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent text-sm text-slate-700 placeholder-slate-400 w-40 lg:w-56 border-none focus:ring-0 focus:shadow-none focus:outline-none"
            />
          </div>

          {/* Notification */}
          <button className="relative p-2.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-50 transition-all duration-200">
            <Bell size={20} />
            <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-sky-500 rounded-full border-2 border-white animate-pulse" />
          </button>

          {/* User avatar */}
          <button className="flex items-center gap-2 p-1.5 rounded-xl hover:bg-slate-50 transition-all duration-200">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-sky-600 flex items-center justify-center">
              <User size={16} className="text-white" />
            </div>
            <span className="hidden md:block text-sm font-medium text-slate-600">Admin</span>
          </button>
        </div>
      </div>
    </header>
  )
}
