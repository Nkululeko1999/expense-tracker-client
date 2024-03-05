import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from "./pages/About"
import AddExpense from "./pages/AddExpense"
import Home from "./pages/Home"
import Expenses from "./pages/Expenses"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import Profile from "./pages/Profile"
import VerifyUser from "./pages/VerifyUser"
import ForgotPassword from "./pages/ForgotPassword"
import Contact from "./pages/Contact"
import Dashboard from "./pages/Dashboard"
import Settings from "./pages/Settings"
import Header from "./components/Header"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Exports from "./pages/Exports"

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verify-user" element={<VerifyUser />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/add-expense" element={<AddExpense />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/exports" element={<Exports />} />
      </Routes>
      <ToastContainer className="absolute top-4 right-2" />
    </BrowserRouter>
  )
}
