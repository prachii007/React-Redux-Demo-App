import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Mybasic from "./basic";
function App() {
  return (
    <HashRouter>
      <div className="container mt-5">
        <div className="row">

          <div className="col-lg-8">
            <div className="btn-group">
              <Link to="/basic" className=" btn btn-primary">Basic</Link>
              <Link to="/user" className=" btn btn-secondary">User</Link>
              <Link to="/product" className=" btn btn-info">Manage Product</Link>
              <Link to="/api" className=" btn btn-danger">Manage Api</Link>
            </div>
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
