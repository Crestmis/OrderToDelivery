import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useState } from 'react'
import Layout from './components/Layout'
import Login from './pages/Login/Login'
import Dashboard from './pages/Dashboard/Dashboard'
import Indent from './pages/Indent/Indent'
import IndentApproval from './pages/IndentApproval/IndentApproval'
import SendDetails from './pages/SendDetails/SendDetails'
import DispatchConfirmation from './pages/DispatchConfirmation/DispatchConfirmation'
import CheckMaterial from './pages/CheckMaterial/CheckMaterial'
import MaterialProduction from './pages/MaterialProduction/MaterialProduction'
import QualityCheck from './pages/QualityCheck/QualityCheck'
import VehiclePlacement from './pages/VehiclePlacement/VehiclePlacement'
import BillingAsPerOrder from './pages/BillingAsPerOrder/BillingAsPerOrder'
import WeighbridgeSlip from './pages/WeighbridgeSlip/WeighbridgeSlip'
import SendCNDN from './pages/SendCNDN/SendCNDN'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleLogin = () => {
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            isAuthenticated ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />
          }
        />
        <Route
          path="/*"
          element={
            isAuthenticated ? (
              <Layout onLogout={handleLogout}>
                <Routes>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/indent" element={<Indent />} />
                  <Route path="/indent-approval" element={<IndentApproval />} />
                  <Route path="/send-details" element={<SendDetails />} />
                  <Route path="/dispatch-confirmation" element={<DispatchConfirmation />} />
                  <Route path="/check-material" element={<CheckMaterial />} />
                  <Route path="/material-production" element={<MaterialProduction />} />
                  <Route path="/quality-check" element={<QualityCheck />} />
                  <Route path="/vehicle-placement" element={<VehiclePlacement />} />
                  <Route path="/billing" element={<BillingAsPerOrder />} />
                  <Route path="/weighbridge-slip" element={<WeighbridgeSlip />} />
                  <Route path="/send-cn-dn" element={<SendCNDN />} />
                  <Route path="*" element={<Navigate to="/dashboard" />} />
                </Routes>
              </Layout>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </Router>
  )
}

export default App
