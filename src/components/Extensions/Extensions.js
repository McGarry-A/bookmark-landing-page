import Chrome from "../../images/logo-chrome.svg";
import Firefox from "../../images/logo-firefox.svg";
import Opera from "../../images/logo-opera.svg";
import Dots from "../../images/bg-dots.svg";
import "./Extensions.css";
const Extensions = () => {

  const indent = (index) => {
    return `${index * 50}px`
  }

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
            <div className="extension-div-card" style={{marginTop: indent(index)}}>
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
