// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home";
import Footer from "./Components/Footer/Footer";
import AboutUs from "./Components/AboutUs/AboutUs";
import Main from "./Components/Channeling/Main";
// import Login from "./Components/Channeling/Login";
// import Login from "./Components/LoginPage/LoginPage";
import Signup from "./Components/Channeling/Signup";
import Session from "./Components/Channeling/Session";
import Checkout from "./Components/Channeling/Checkout";
import AddAppin from "./Components/User/AddAppin";
import Login from "./Components/Admin/Login";
import RegistrationForm from './Components/Admin/RegistrationForm';
import AddDoctor from './Components/Admin/AddDoctor';
import AllDoctor from './Components/Admin/AllDoctor';
import AllDoctorUser from './Components/User/AllDoctorUser'





function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/main" element={<Main />} />
            {/* <Route path="/login" element={<Login />} /> */}
            <Route path="/signup" element={<Signup />} />
            <Route path="/session" element={<Session />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<RegistrationForm />} />
            <Route path="/add-doctor" element={<AddDoctor />} />
           <Route path="/all-doctor" element={<AllDoctor />} />
            <Route path="/add-appin" element={<AddAppin />} />
            <Route path="/all-doc-user" element={<AllDoctorUser />} />

          </Routes>

        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
