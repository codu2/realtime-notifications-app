import { useEffect, useState } from "react";

import styles from "./Navbar.module.css";
import { AiFillBell, AiTwotoneSetting } from "react-icons/ai";
import { RiMessage2Fill } from "react-icons/ri";

const Navbar = ({ socket }) => {
  const [notifications, setNotifications] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    socket.on("getNotification", (data) => {
      setNotifications((prev) => [...prev, data]);
    });
  }, [socket]);

  const displayNotification = ({ senderName, type }) => {
    let action;

    if (type === 1) {
      action = "liked";
    } else if (type === 2) {
      action = "commented";
    } else {
      action = "shared";
    }

    return (
      <span className={styles.notification}>
        {`${senderName} ${action} your post`}
      </span>
    );
  };

  const handleRead = () => {
    setNotifications([]);
    setOpen(false);
  };

  return (
    <div className={styles.navbar}>
      <span className={styles.logo}>realtime</span>
      <div className={styles.icons}>
        <div className={styles.icon} onClick={() => setOpen((prev) => !prev)}>
          <div className={styles.img}>
            <AiFillBell />
          </div>
          {notifications.length > 0 && (
            <div className={styles.counter}>{notifications.length}</div>
          )}
        </div>
        <div className={styles.icon}>
          <div className={styles.img}>
            <RiMessage2Fill />
          </div>
        </div>
        <div className={styles.icon}>
          <div className={styles.img}>
            <AiTwotoneSetting />
          </div>
        </div>
      </div>
      {open && (
        <div className={styles.notifications}>
          {notifications.map((n) => displayNotification(n))}
          <button className={styles.nButton} onClick={handleRead}>
            Mark as read
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
