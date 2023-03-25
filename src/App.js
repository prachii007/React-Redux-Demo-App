import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Mybasic from "./basic";
function App() {
  return (
    <HashRouter>
      <div className="container mt-5">
        <div className="row">

          <div className="col-lg-8">
            <nav className="navbar bg-primary text-white text-center">
              <div class="container-fluid">
                <Link to="/basic" className="nav-link nav-item ps-5">Basic</Link>
                <Link to="/user" className="nav-link nav-item">User</Link>
                <Link to="/product" className="nav-link nav-item">Manage Product</Link>
                <Link to="/api" className="nav-link nav-item pe-5">Manage Api</Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <Routes>
        <Route exact path="/basic" element={<Mybasic />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
