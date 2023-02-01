import styles from "./Notif.module.css";

const Notif = (props) => {
  return (
    <div className={styles.notif}>
      <img src={props.avatar} alt="avatar" />
      <p>
        <strong>{props.name}</strong> {props.action} <span>{props.post}</span>
      </p>
      <p>{props.time}</p>
    </div>
  );
};

export default Notif;
