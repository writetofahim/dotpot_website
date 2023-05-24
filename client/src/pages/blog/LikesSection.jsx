import React, { useContext, useState } from "react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthContext";
import axios from "../../utils/axiosInstance";

const LikesSection = ({ likes, blogId, comments }) => {
  const [totalLikes, setTotalLikes] = useState(likes || []);
  const { user } = useContext(AuthContext);

  const handleClick = async () => {
    const response = await axios.post("/blog/like", {
      blogId,
      userId: user._id,
    });

    if (!user) return;
    setTotalLikes((prev) =>
      prev.findIndex((l) => l.user === user?._id) > -1
        ? prev.filter((b) => b.user !== user._id)
        : [...prev, { user: user._id }]
    );
  };
  return (
    <div className="w-full flex gap-5 mb-5 ">
      <div className="flex items-center gap-2 text-textColor-500 ">
        {totalLikes.findIndex((l) => l.user === user?._id) > -1 ? (
          <AiFillLike
            onClick={handleClick}
            className="text-2xl hover:cursor-pointer "
          />
        ) : (
          <AiOutlineLike
            onClick={handleClick}
            className="text-2xl hover:cursor-pointer"
          />
        )}
        <span>{totalLikes.length}</span>
      </div>
      <div className="flex items-center gap-2 text-textColor-500">
        <FaRegComment className="text-2xl " /> <span>{comments.length}</span>
      </div>
    </div>
  );
};

export default LikesSection;
