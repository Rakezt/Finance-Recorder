import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Income from "./Pages/Income";
import Expenses from "./Pages/Expenses";
import IncomeExpenses from "./Pages/IncomeExpenses";
import Dashboard from "./Pages/Dashboard";
import styles from "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/income">Income</Link>
              </li>
              <li>
                <Link to="/expenses">Expenses</Link>
              </li>

              <li>
                <Link to="/">New Entries</Link>
              </li>
            </ul>
          </nav>
          <div className="element">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/income" element={<Income />} />
              <Route path="/expenses" element={<Expenses />} />
              <Route path="/" element={<IncomeExpenses />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
