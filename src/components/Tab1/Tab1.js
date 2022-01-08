import BackgroundImage from "../../images/illustration-features-tab-1.svg"
import "./Tab.css"
const Tab1 = () => {
  return (
    <div className="tab">
      <div className="tab-left">
          <img src={BackgroundImage} alt="computer-screen"/>
          <div className="background-blue"></div>
      </div>
      <div className="tab-right">
        <h2 className="tab-right-title">Bookmark in one click</h2>
        <p className="tab-right-text">Organise your bookmarks however you like. Our simple drag and drop interface gives you complete control over how you manage your favorite sites.</p>
        <button className="tab-right-button">More Info</button>
      </div>
    </div>
  );
};

export default Tab1;
