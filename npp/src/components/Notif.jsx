import styles from "./Notif.module.css";

const Notif = (props) => {
  return (
    <div className={styles.notif}>
      <div>
        <img src={props.avatar} alt="avatar" />
      </div>
      <main>
        <p>
          <strong>{props.name}</strong> {props.action}{" "}
          <span
            style={
              props.post === "My first tournament today!"
                ? { color: "hsl(219, 12%, 42%)", fontWeight: "bolder" }
                : { color: "#222" }
            }
          >
            {props.post} <span className={styles.newNot}>&#128308;</span>
          </span>
        </p>
        <p className={styles.time}>{props.time}</p>
      </main>
    </div>
  );
};

export default Notif;
