import Chrome from "../../images/logo-chrome.svg";
import Firefox from "../../images/logo-firefox.svg";
import Opera from "../../images/logo-opera.svg";
import Dots from "../../images/bg-dots.svg";
import { useState, useEffect } from "react";

import "./Extensions.css";
import useWindowDimensions from "../WindowDimensionsHook/WindowDimensionsHook";
const Extensions = () => {
  const {height, width} = useWindowDimensions()
  const [isMobile, setIsMobile] = useState(false)
  const indent = (index) => {
    return `${index * 50}px`
  }

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (width <= 500) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
    })
    console.log(isMobile)
    console.log(width)
  }, [width, isMobile])

  return (
    <div className="extensions">
      <div className="extensions-header">
        <h2 className="extensions-header-title">Download the Extensions</h2>
        <p className="extensions-header-text">
          We've got more browsers in the pipeline. Please let us know if you
          have a favourite you would like us to prioritise.
        </p>
      </div>
      <div className="card-container">
        {extensionData.map((el, index) => {
          return (
            <div key={index} className="extension-div-card" style={{marginTop: !isMobile && indent(index)}}>
              <img
                src={el.image}
                className="card-extension-image"
                alt="browser"
              />
              <div>
                <h3 className="card-title">{el.title}</h3>
                <p className="card-verion">{el.version}</p>
              </div>
              <img className="card-dots" src={Dots} alt="dots" />
              <button className="card-button">Add & Install Extension</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Extensions;

const extensionData = [
  {
    title: "Add to Chrome",
    version: "Minimum version 6.2",
    image: Chrome,
  },
  {
    title: "Add to Firefox",
    version: "Minimum version 5.5",
    image: Firefox,
  },
  {
    title: "Add to Opera",
    version: "Minimum version 4.6",
    image: Opera,
  },
];
