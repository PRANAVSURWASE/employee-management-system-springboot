import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import AddEmployee from './component/AddEmployee.jsx'
import ViewEmployee from './component/viewEmployee.jsx'
import UpdateEmployee from './component/UpdateEmployee.jsx'
import LandingPage from './component/LandingPage.jsx'



function App() {
  return (
    <>
      <BrowserRouter>

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">Navbar</Link>

            <button className="navbar-toggler" type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/addEmployee">Add Employee</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/viewEmployee">View Employee</Link>
                </li>

              </ul>

              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/addEmployee" element={<AddEmployee />} />
          <Route path="/viewEmployee" element={<ViewEmployee />} />
          <Route path="/updateEmployee/:id" element={<UpdateEmployee />} />

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
