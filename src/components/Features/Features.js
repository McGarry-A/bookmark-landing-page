import "./Features.css";
import { Routes, Route, NavLink } from "react-router-dom";
import Tab1 from "../Tab1/Tab1.js";
import Tab2 from "../Tab2/Tab2.js";
import Tab3 from "../Tab3/Tab3.js";
const Features = () => {
  return (
    <div>
      <div className="features">
        <h2 className="features-title">Features</h2>
        <p className="features-text">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmark sync between your devices so you can access
          them on the go.
        </p>
      </div>
      <nav>
        <ul className="features-nav-list">
          <li className="features-nav-item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "active navLink" : "inactive navLink"
              }
            >
              Simple Bookmarking
            </NavLink>
          </li>
          <li className="features-nav-item">
            <NavLink
              to="/tab2"
              className={({ isActive }) =>
                isActive ? "active navLink" : "inactive navLink"
              }
            >
              Speedy Searching
            </NavLink>
          </li>
          <li className="features-nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "active navLink" : "inactive navLink"
              }
              to="/tab3"
            >
              Easy Sharing
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Tab1 />} />
        <Route path="/tab2" element={<Tab2 />} />
        <Route path="/tab3" element={<Tab3 />} />
      </Routes>
    </div>
  );
};

export default Features;
