import styles from "./Navbar.module.css";
import { AiFillBell, AiTwotoneSetting } from "react-icons/ai";
import { RiMessage2Fill } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <span className={styles.logo}>realtime</span>
      <div className={styles.icons}>
        <div className={styles.icon}>
          <div className={styles.img}>
            <AiFillBell />
          </div>
          <div className={styles.counter}>2</div>
        </div>
        <div className={styles.icon}>
          <div className={styles.img}>
            <RiMessage2Fill />
          </div>
          <div className={styles.counter}>2</div>
        </div>
        <div className={styles.icon}>
          <div className={styles.img}>
            <AiTwotoneSetting />
          </div>
          <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
