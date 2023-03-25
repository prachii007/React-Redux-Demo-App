import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Mybasic from "./basic";
import Mycontact from "./contact";
import Myexperience from "./experience";
function App() {
  return (
    <HashRouter>
      <div className="container mt-5">
        <div className="row">

          <div className="col-lg-12">
            <nav className="navbar bg-primary text-white text-center">
              <div class="container-fluid">
                <Link to="/basic" className="nav-link nav-item ps-5">Basic</Link>
                {/* <Link to="/education" className="nav-link nav-item">Education</Link> */}

                <Link to="/cont" className="nav-link nav-item">Contact</Link>
                <Link to="/experience" className="nav-link nav-item pe-5">Experience</Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <Routes>
        <Route exact path="/basic" element={<Mybasic />} />

        <Route exact path="/cont" element={<Mycontact />} />
        {/* <Route exact path="/education" element={<Myeducation />} /> */}
        <Route exact path="/experience" element={<Myexperience />} />

      </Routes>
    </HashRouter>
  );
}

export default App;
