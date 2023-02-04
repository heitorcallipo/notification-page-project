import Notif from "./Notif";
import Header from "./Header";
import styles from "./NotifPage.module.css";
import data from "../data";

const NotifPage = () => {
  const card = data.map((item) => {
    return <Notif key={item.id} {...item} />;
  });

  return (
    <div className={styles.NotifPage}>
      <Header />
      {card}
    </div>
  );
};

export default NotifPage;
