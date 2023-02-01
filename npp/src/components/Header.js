import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.notifNum}>
        <h1>Notifications</h1>
        <p>3</p>
      </div>
      <p className={styles.btnMark}>Mark all as read</p>
    </div>
  );
};

export default Header;
