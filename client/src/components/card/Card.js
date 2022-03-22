import styles from "./Card.module.css";
import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import { BiMessageRounded } from "react-icons/bi";
import { RiShareBoxLine } from "react-icons/ri";
import { useState } from "react";

const Card = ({ post, socket, user }) => {
  const [liked, setLiked] = useState(false);

  const handleNotification = (type) => {
    type === 1 && setLiked(true);

    socket.emit("sendNotification", {
      senderName: user,
      receiverName: post.username,
      type: type,
    });
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
        <span className={heartIconCss} onClick={() => handleNotification(1)}>
          {liked ? <AiFillHeart /> : <AiOutlineHeart />}
        </span>
        <span
          className={styles["card-icon"]}
          onClick={() => handleNotification(2)}
        >
          <BiMessageRounded />
        </span>
        <span
          className={styles["card-icon"]}
          onClick={() => handleNotification(3)}
        >
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
