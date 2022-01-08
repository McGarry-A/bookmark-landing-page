import "./Features.css";
import { Routes, Route, NavLink } from "react-router-dom";
import Tab1 from "../Tab1/Tab1.js";
import BackgroundImage from "../../images/illustration-features-tab-1.svg";
import Tab2Image from "../../images/illustration-features-tab-2.svg";
import Tab3Image from "../../images/illustration-features-tab-3.svg";
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
        {tabs.map((el, index) => {
          return (
            <Route
              path={el.path}
              element={
                <Tab1
                  image={el.image}
                  title={el.title}
                  text={el.text}
                  key={index}
                />
              }
            />
          );
        })}
      </Routes>
    </div>
  );
};

export default Features;

const tabs = [
  {
    title: "Bookmark in one click",
    text: "Organise your bookmarks however you like. Our simple drag and drop interface gives you complete control over how you manage your favorite sites.",
    image: BackgroundImage,
    path: "/",
  },
  {
    title: "Intelligent Search",
    text: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all your bookmarks.",
    image: Tab2Image,
    path: "/tab2",
  },
  {
    title: "Share your Bookmarks",
    text: "Easily share you bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    image: Tab3Image,
    path: "/tab3",
  },
];
