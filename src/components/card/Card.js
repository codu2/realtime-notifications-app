import styles from "./Card.module.css";
import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import { BiMessageRounded } from "react-icons/bi";
import { RiShareBoxLine } from "react-icons/ri";
import { useState } from "react";

const Card = ({ post }) => {
  const [liked, setLiked] = useState(false);

  const handleNotification = () => {
    setLiked(true);
  };

  const heartIconCss = `${styles["card-icon"]} ${
    liked && styles["card-icon-fill"]
  }`;

  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <img src={post.userImg} alt="" className={styles["user-img"]} />
        <span>{post.username}</span>
      </div>
      <img src={post.postImg} alt="" className={styles["post-img"]} />
      <div className={styles.interaction}>
        <span className={heartIconCss} onClick={handleNotification}>
          {liked ? <AiFillHeart /> : <AiOutlineHeart />}
        </span>
        <span className={styles["card-icon"]}>
          <BiMessageRounded />
        </span>
        <span className={styles["card-icon"]}>
          <RiShareBoxLine />
        </span>
        <span className={styles["info-icon"]}>
          <AiOutlineInfoCircle />
        </span>
      </div>
    </div>
  );
};

export default Card;
