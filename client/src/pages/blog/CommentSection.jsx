import React, { useContext, useState } from "react";
import { FaRegPaperPlane } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthContext";
import axios from "../../utils/axiosInstance";
import LoginModal from "./LoginModal";

const CommentSection = ({ comments, setComments, blogId }) => {
  const [content, setContent] = useState("");
  const [isLoginModalOpen, setLoginModelOpen] = useState(false);
  const { user } = useContext(AuthContext);

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
    let hash = 0;
    for (let i = 0; i < username.length; i++) {
      hash = username.charCodeAt(i) + ((hash << 5) - hash);
    }

    const hue = Math.abs(hash % 360);
    const saturation = 50;
    const lightness = 50;

    document.documentElement.style.setProperty("--random-hue", hue.toString());

    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  };

  return (
    <div className="mt-5 ">
      {isLoginModalOpen && <LoginModal setLoginModelOpen={setLoginModelOpen} />}
      <h2 className="text-xl blog-content-font font-bold text-textColor-500">
        Comments
      </h2>
      {comments.length === 0 ? (
        <p className="text-textColor-500">No comments yet</p>
      ) : (
        <ul className="space-y-3">
          {comments.map((comment, i) => {
            getAvatarBackgroundColor(comment.user.username);
            return (
              <li
                key={i}
                className="flex justify-start space-x-2 py-3 shadow-md p-3"
              >
                {comment.user.photo ? (
                  <div className="w-8 h-8 ">
                    <img
                      src={
                        comment.user.photo.includes("https://")
                          ? comment.user.photo
                          : `${import.meta.env.REACT_APP_SERVER_PATH}/${
                              comment.user.photo
                            }`
                      }
                      alt={comment.user.username}
                      className="rounded-full"
                    />
                  </div>
                ) : (
                  <div className="w-8 h-8 flex items-center justify-center rounded-full text-buttonText-500 text-lg font-semibold avatar-background">
                    {user?.username?.slice(0, 1)}
                  </div>
                )}
                <div className="w-full mb-5">
                  <span className="text-sm font-semibold text-textColor-500">
                    {comment.user.username}
                  </span>
                  <p className="text-textColor-500">{comment.content}</p>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <h2 className="text-xl blog-content-font text-textColor-500 font-bold mt-3">
        Add your comment here
      </h2>
      {user ? (
        <div className="flex flex-col space-x-2 border-b py-3 shadow-md p-5 mt-5">
          <div className="flex gap-2 items-center">
            {user.photo ? (
              <div className="w-8 h-8 ">
                <img
                  src={
                    user.photo.includes("https://")
                      ? user.photo
                      : `${import.meta.env.REACT_APP_SERVER_PATH}/${user.photo}`
                  }
                  alt={user.username}
                  className="rounded-full"
                />
              </div>
            ) : (
              <div className="w-8 h-8 flex items-center justify-center rounded-full text-buttonText-500 text-lg font-semibold avatar-background">
                {user?.username?.slice(0, 1)}
              </div>
            )}
            <span className="text-sm font-semibold text-textColor-500">
              {user.username}
            </span>
          </div>

          <div className="flex-1">
            <div className="mb-5">
              <div className="w-full flex flex-col">
                <form
                  onSubmit={handleCommentSubmit}
                  className="flex flex-col gap-3"
                >
                  <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Write a comment..."
                    className="mt-2 border-none rounded-lg transition-colors duration-300 focus:outline-none "
                    required
                  ></textarea>
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="mt-2 px-4 py-2 bg-green-400 text-white rounded-full transition-colors duration-300 hover:bg-green-600 focus:outline-none text-sm flex items-center gap-3"
                    >
                      <FaRegPaperPlane /> Add Comment
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-sm">
          <button
            onClick={() => setLoginModelOpen(true)}
            className="underline"
            to="/login"
          >
            Login
          </button>{" "}
          to comment on this blog
        </p>
      )}
    </div>
  );
};

export default CommentSection;
