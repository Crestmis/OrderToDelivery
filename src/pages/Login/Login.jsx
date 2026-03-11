import { useState } from 'react'
import { Truck, Mail, Lock, Eye, EyeOff } from 'lucide-react'

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      onLogin()
    }, 800)
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-sky-100" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-sky-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-100/40 rounded-full blur-3xl" />

      {/* Login Card */}
      <div className="relative w-full max-w-md animate-scale-in">
        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-sky-200/30 border border-sky-100">
          {/* Logo */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-500 to-sky-600 flex items-center justify-center shadow-xl shadow-sky-500/20 mb-4">
              <Truck size={28} className="text-white" />
            </div>
            <h1 className="text-2xl font-bold gradient-text">Order to Delivery</h1>
            <p className="text-slate-400 text-sm mt-1">Sign in to your account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-2">Email Address</label>
              <div className="relative">
                <Mail size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@company.com"
                  className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 placeholder-slate-400 text-sm transition-all duration-200"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-2">Password</label>
              <div className="relative">
                <Lock size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-11 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 placeholder-slate-400 text-sm transition-all duration-200"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-slate-300 bg-white text-sky-500 focus:ring-sky-500/20" />
                <span className="text-sm text-slate-500">Remember me</span>
              </label>
              <button type="button" className="text-sm text-sky-500 hover:text-sky-600 transition-colors">
                Forgot password?
              </button>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 text-white font-semibold text-sm
                hover:from-sky-400 hover:to-sky-500 transition-all duration-300
                shadow-lg shadow-sky-500/25 hover:shadow-sky-500/35
                disabled:opacity-60 disabled:cursor-not-allowed
                active:scale-[0.98] transform"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Signing in...
                </span>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-xs text-slate-400 mt-6">
            © 2026 Order to Delivery. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}
