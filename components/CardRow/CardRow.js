import styles from "../../styles/cardrow.module.css";

function CardRow({ title, datas }) {
  return (
    <div>
      <h3 className={`${styles.title}`}>{title}</h3>
      <div className={`${styles.cardRow}`}>
        {datas.map((data) => {
          return (
            <img
              key={data.id}
              className={`${styles.img}`}
              src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
              alt=""
              srcSet=""
            />
          );
        })}
      </div>
    </div>
  );
}

export default CardRow;
