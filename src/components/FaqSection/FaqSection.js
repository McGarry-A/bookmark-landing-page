import "./FaqSection.css";
import Faq from "react-faq-component";

const FaqSection = () => {
  const data = {
    title: "",
    rows: [
      {
        title: "What is a bookmark?",
        content: "Lorem ipsum dolor sit amet, consectetur ",
      },
      {
        title: "How can I request a new browser?",
        content:
          "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc",
      },
      {
        title: "Is there a mobile app?",
        content:
          "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc",
      },
      {
        title: "What about other Chromium broswers?",
        content:
          "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc",
      },
    ],
  };

  const styles = {
    arrowColor: "blue",
    rowTitleTextSize: "20px",
    rowTitlePaddingBottom: "2em",
  };
  return (
    <div className="faq-container">
      <div className="faq">
        <div className="faq-header">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <p className="faq-text">
            Here are some of our FAQs. If you have any other questions you'd
            like answered, please feel free to email us.
          </p>
        </div>
      </div>
      <div>
        <Faq data={data} styles={styles} />
      </div>

      <button>More info</button>
    </div>
  );
};

export default FaqSection;
