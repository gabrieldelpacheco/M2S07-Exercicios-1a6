import { useState } from "react";
import './LikeButton.css';
const LikeButton = () => {
  const [likes, setLikes] = useState(0);

  const handleLikeClick = () => {
    setLikes(likes + 1);
  };

  return (
    <div>
      <button className="btn-likes" onClick={handleLikeClick}><i className="fa-sharp fa-solid fa-thumbs-up"></i></button>
      <span>{likes} {likes === 1 ? "like" : "likes"}</span>
    </div>
  );
};

export default LikeButton;
