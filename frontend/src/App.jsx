import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from "./pages/login/Login"
import Dashboard from "./pages/dashboard/Dashboard"
import Referrals from './pages/Referrels/Referrals'
import Notfound from "./pages/notfound/Notfound"
import ProtectedRoute from "./components/ProtectedRoute"
import ReferralDetails from "./components/ReferralDetails/ReferralDetails";
import './App.css'

const App = ()=>{
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/" element={<ProtectedRoute><Dashboard/></ProtectedRoute>}></Route>
      <Route path="/referrals/:id" element={<ProtectedRoute><Referrals/></ProtectedRoute>}></Route>
      <Route path="*" element={<Notfound/>}></Route>
      <Route
  path="/referral/:id"
  element={
    <ProtectedRoute>
      <ReferralDetails />
    </ProtectedRoute>
  }
/>
    </Routes>
    </BrowserRouter>
  )
}
export default App
