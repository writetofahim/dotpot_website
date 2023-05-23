import React, { useState } from "react";
import axios from "../../utils/axiosInstance";

const CommentSection = ({ comments: prevComment, blogId }) => {
  const [username, setUsername] = useState("");
  const [content, setContent] = useState("");
  const [comments, setComments] = useState(prevComment);

  const handleCommentSubmit = (e) => {
    e.preventDefault();

    // Send a POST request to add a new comment
    axios
      .post("/blog/comment", {
        blogId,
        username,
        content,
      })
      .then((response) => {
        const { comment } = response.data;
        setComments([...comments, comment]);
        setUsername("");
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
    <div className="mt-5">
      <h2 className="text-xl blog-content-font font-bold ">Comments</h2>
      {comments.length === 0 ? (
        <p>No comments yet</p>
      ) : (
        <ul>
          {comments.map((comment) => (
            <li key={comment.username} className="flex space-x-2 border-b py-3">
              <div
                className="w-8 h-8 flex items-center justify-center rounded-full text-buttonText-500 text-lg font-semibold"
                style={{
                  backgroundColor: getAvatarBackgroundColor(comment.username),
                }}
              >
                {comment.username.charAt(0)}
              </div>
              <div className=" mb-5">
                <span className="text-sm font-bold">{comment.username}</span>
                <p>{comment.content}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
      <h2 className="text-xl blog-content-font font-bold mt-3">
        Add your comment here
      </h2>
      <form onSubmit={handleCommentSubmit} className="mt-4 flex flex-col gap-3">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Your username"
          className="px-4 py-2 border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          required
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write a comment..."
          className="mt-2 px-4 py-2 border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          required
        ></textarea>
        <div className="flex justify-end">
          <button
            type="submit"
            className="mt-2 px-4 py-2 bg-textColor-500 text-buttonText-500 focus:outline-none focus:bg-blue-600"
          >
            Add Comment
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommentSection;
