import styles from "./Notif.module.css";

const Notif = (props) => {
  return (
    <div className={styles.notif}>
      <div>
        <img src={props.avatar} alt="avatarr" />
      </div>
      <main>
        <p>
          <strong>{props.name}</strong> {props.action} <span>{props.post}</span>
        </p>
        <p>{props.time}</p>
      </main>
    </div>
  );
};

export default Notif;
