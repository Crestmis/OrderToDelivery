import { useState } from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'

export default function Layout({ children, onLogout }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className="min-h-screen bg-sky-50/50">
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        collapsed={collapsed}
        onToggleCollapse={() => setCollapsed(!collapsed)}
        onLogout={onLogout}
      />

      {/* Main content area */}
      <div className={`transition-all duration-300 ${collapsed ? 'lg:ml-20' : 'lg:ml-72'}`}>
        <Topbar onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
        <main className="p-4 md:p-6 lg:p-8 animate-fade-in">
          {children}
        </main>
      </div>
    </div>
  )
}
