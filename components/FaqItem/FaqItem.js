import styles from "../../styles/Faq.module.css";
import PropTypes from "prop-types";
import { useState } from "react";

function FaqItem({ question, answers }) {
  const [open, setOpen] = useState(false);
  return (
    <div class={`${styles.faqitem} ${open ? styles.open : ""} `}>
      <div className={`${styles.question}`}>
        <div>{question}</div>
        <div
          style={{ cursor: "pointer" }}
          onClick={(e) => {
            setOpen(!open);
          }}
        >
          X
        </div>
      </div>
      <div className={`${styles.answers}`}>
        {answers.map((answer) => (
          <div className={`${styles.answer}`}>
            {answer}
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}

FaqItem.propTypes = {
  question: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FaqItem;
