import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import axios from "../../utils/axiosInstance";

const CommentSection = ({ comments, setComments, blogId }) => {
  const [content, setContent] = useState("");
  const { user } = useContext(AuthContext);
  console.log(comments);

  const handleCommentSubmit = (e) => {
    e.preventDefault();

    // Send a POST request to add a new comment
    axios
      .post("/blog/comment", {
        blogId,
        userId: user._id,
        content,
      })
      .then((response) => {
        const { comment } = response.data;
        setComments([...comments, { user, content: comment.content }]);
        setContent("");
      })
      .catch((error) => console.error(error));
  };

  const getAvatarBackgroundColor = (username) => {
    // Generate a hash based on the username
    let hash = 0;
    for (let i = 0; i < username.length; i++) {
      hash = username.charCodeAt(i) + ((hash << 5) - hash);
    }

    // Convert the hash to a hue value between 0 and 360
    const hue = Math.abs(hash % 360);

    // Return the HSL color string
    return `hsl(${hue}, 50%, 50%)`;
  };

  return (
    <div className="mt-5 ">
      <h2 className="text-xl blog-content-font font-bold text-textColor-500">
        Comments
      </h2>
      {comments.length === 0 ? (
        <p className="text-textColor-500">No comments yet</p>
      ) : (
        <ul>
          {comments.map((comment) => (
            <li
              key={comment.user.username}
              className="flex justify-start space-x-2 border-b py-3"
            >
              <div
                className="w-8 h-8 flex items-center justify-center rounded-full text-buttonText-500 text-lg font-semibold bg-[#b5bf40]"
                // style={{
                //   backgroundColor: getAvatarBackgroundColor(comment.username),
                // }}
              >
                {comment.user.username.charAt(0)}
              </div>
              <div className="w-full mb-5">
                <span className="text-sm font-bold text-textColor-500">
                  {comment.user.username}
                </span>
                <p className="text-textColor-500">{comment.content}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
      <h2 className="text-xl blog-content-font text-textColor-500 font-bold mt-3">
        Add your comment here
      </h2>
      {user ? (
        <div className="flex justify-start space-x-2 border-b py-3">
          {user.photo ? (
            <div className="w-8 h-8">
              <img src={user.photo} alt="" />
            </div>
          ) : (
            <div
              className="w-8 h-8 flex items-center justify-center rounded-full text-buttonText-500 text-lg font-semibold bg-[#b5bf40]"
              // style={{
              //   backgroundColor: getAvatarBackgroundColor(comment.username),
              // }}
            >
              {user?.username?.slice(0, 1)}
            </div>
          )}
          <div className="flex-1 mb-5">
            <span className="text-sm font-bold text-textColor-500">
              {user.username}
            </span>
            <div className="w-full flex flex-col">
              <form
                onSubmit={handleCommentSubmit}
                className="flex flex-col gap-3"
              >
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Write a comment..."
                  className="mt-2 px-4 py-2 border border-gray-300 "
                  required
                ></textarea>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="mt-2 px-4 py-2 bg-secondary-400 text-buttonText-500  "
                  >
                    Add Comment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-sm ">
          {" "}
          <Link className="underline" to={"/login"}>
            Login
          </Link>{" "}
          to comment on this blog
        </p>
      )}
    </div>
  );
};

export default CommentSection;
