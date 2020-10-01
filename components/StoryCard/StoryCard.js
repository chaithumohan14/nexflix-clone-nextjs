import styles from "../../styles/StoryCard.module.css";
import PropTypes from "prop-types";
function StoryCard({ title, subtitle, img, reverse = false }) {
  return (
    <div className={styles.storycard}>
      <div className={`${styles.content} ${reverse ? styles.order_2 : ""} `}>
        <div className={styles.title}>{title}</div>
        <div className={styles.subtitle}>{subtitle}</div>
      </div>
      <div className={`${styles.img} ${reverse ? styles.order_1 : ""} `}>
        <img src={img} alt="" srcSet="" />
      </div>
    </div>
  );
}

StoryCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  reverse: PropTypes.bool,
};

export default StoryCard;
