import "./Tab.css"

const Tab1 = ({ image, title, text }) => {
  return (
    <div className="tab">
      <div className="tab-left">
          <img src={image} alt="computer-screen"/>
          <div className="background-blue"></div>
      </div>
      <div className="tab-right">
        <h2 className="tab-right-title">{title}</h2>
        <p className="tab-right-text">{text}</p>
        <button className="tab-right-button">More Info</button>
      </div>
    </div>
  );
};

export default Tab1;
