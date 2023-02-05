import styles from "./Notif.module.css";

const Notif = (props) => {
  const postGray = "My first tournament today!";
  postGray.fontcolor('#d3d3d3')

  return (
    <div className={styles.notif}>
      <div>
        <img src={props.avatar} alt="avatar" />
      </div>
      <main>
        <p>
          <strong>{props.name}</strong> {props.action}{" "}
          <span>
            {props.post}{" "}
            <span className={styles.newNot}>&#128308;</span>
          </span>
        </p>
        <p>{props.time}</p>
      </main>
    </div>
  );
};

export default Notif;
