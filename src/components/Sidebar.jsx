import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import {
  LayoutDashboard,
  FileText,
  CheckSquare,
  Send,
  Truck,
  Package,
  Factory,
  ShieldCheck,
  CarFront,
  Receipt,
  Scale,
  ArrowRightLeft,
  ChevronLeft,
  ChevronRight,
  LogOut,
  X,
} from 'lucide-react'

const navItems = [
  { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/indent', label: 'Indent', icon: FileText },
  { path: '/indent-approval', label: 'Indent Approval', icon: CheckSquare },
  { path: '/send-details', label: 'Send Details', icon: Send },
  // { path: '/dispatch-confirmation', label: 'Dispatch Confirmation', icon: Truck },
  { path: '/check-material', label: 'Check Material', icon: Package },
  { path: '/material-production', label: 'Material Production', icon: Factory },
  { path: '/quality-check', label: 'Quality Check', icon: ShieldCheck },
  { path: '/vehicle-placement', label: 'Vehicle Placement', icon: CarFront },
  { path: '/billing', label: 'Billing as per Order', icon: Receipt },
  { path: '/weighbridge-slip', label: 'Weighbridge Slip', icon: Scale },
  { path: '/send-cn-dn', label: 'Send CN/DN', icon: ArrowRightLeft },
]

export default function Sidebar({ isOpen, onClose, collapsed, onToggleCollapse, onLogout }) {
  const location = useLocation()

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full z-50
          bg-white border-r border-sky-100
          shadow-lg shadow-sky-100/50
          transition-all duration-300 ease-in-out
          flex flex-col
          ${collapsed ? 'w-20' : 'w-72'}
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0
        `}
      >
        {/* Logo Section */}
        <div className="flex items-center justify-between px-5 h-16 border-b border-sky-100">
          {!collapsed && (
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-500 to-sky-600 flex items-center justify-center shadow-lg shadow-sky-500/20">
                <Truck size={18} className="text-white" />
              </div>
              <div>
                <h1 className="text-sm font-bold gradient-text tracking-wide">Order to Delivery</h1>
                <p className="text-[10px] text-slate-400 font-medium">Management System</p>
              </div>
            </div>
          )}
          {collapsed && (
            <div className="w-9 h-9 mx-auto rounded-xl bg-gradient-to-br from-sky-500 to-sky-600 flex items-center justify-center shadow-lg shadow-sky-500/20">
              <Truck size={18} className="text-white" />
            </div>
          )}
          <button onClick={onClose} className="lg:hidden text-slate-400 hover:text-slate-700 transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = location.pathname === item.path
            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={`
                  group flex items-center gap-3 px-3 py-2.5 rounded-xl
                  transition-all duration-200 relative
                  ${isActive
                    ? 'bg-sky-50 text-sky-600 shadow-sm'
                    : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'
                  }
                `}
                title={collapsed ? item.label : ''}
              >
                {isActive && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-gradient-to-b from-sky-400 to-sky-600 rounded-r-full" />
                )}
                <Icon size={20} className={`flex-shrink-0 ${isActive ? 'text-sky-600' : 'group-hover:text-sky-500'}`} />
                {!collapsed && (
                  <span className="text-sm font-medium truncate">{item.label}</span>
                )}
              </NavLink>
            )
          })}
        </nav>

        {/* Collapse toggle (desktop only) */}
        <div className="hidden lg:block border-t border-sky-100 p-3">
          <button
            onClick={onToggleCollapse}
            className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-50 transition-all duration-200"
          >
            {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
            {!collapsed && <span className="text-sm font-medium">Collapse</span>}
          </button>
        </div>

        {/* Logout */}
        <div className="border-t border-sky-100 p-3">
          <button
            onClick={onLogout}
            className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-red-400 hover:text-red-600 hover:bg-red-50 transition-all duration-200"
          >
            <LogOut size={18} />
            {!collapsed && <span className="text-sm font-medium">Logout</span>}
          </button>
        </div>
      </aside>
    </>
  )
}
