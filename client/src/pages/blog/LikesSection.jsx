import React, { useContext, useState } from "react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthContext";
import axios from "../../utils/axiosInstance";

const LikesSection = ({ likes, blogId, comments }) => {
  const [totalLikes, setTotalLikes] = useState(likes || []);
  const { user } = useContext(AuthContext);
  const [likePing, setLikePing] = useState(false);

  const handleClick = async () => {
    if (!user) return;
    setLikePing(true);
    setTimeout(() => {
      setLikePing(false);
      setTotalLikes((prev) =>
        prev.findIndex((l) => l.user === user?._id) > -1
          ? prev.filter((b) => b.user !== user?._id)
          : [...prev, { user: user._id }]
      );
    }, 500);
    const response = await axios.post("/blog/like", {
      blogId,
      userId: user?._id,
    });
  };
  return (
    <div className="w-full flex gap-5 mb-5 ">
      <div className="w-16 flex items-center gap-2 text-red-500 ">
        {totalLikes.findIndex((l) => l.user === user?._id) > -1 ? (
          <AiFillLike
            onClick={handleClick}
            className={`text-2xl hover:cursor-pointer ${
              likePing && "animate-ping"
            }`}
          />
        ) : (
          <AiOutlineLike
            onClick={handleClick}
            className={`text-2xl hover:cursor-pointer  ${
              likePing && "animate-ping"
            }`}
          />
        )}
        <span>{totalLikes.length}</span>
      </div>
      <div className="flex items-center gap-2 text-green-500">
        <FaRegComment className="text-2xl " /> <span>{comments.length}</span>
      </div>
    </div>
  );
};

export default LikesSection;
