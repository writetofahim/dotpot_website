import React from "react";
import { BiUserCircle } from "react-icons/bi";

const UserMenu = ({ user, isLogoutModalOpen }) => {
  console.log(user);

  return (
    <div className={`relative`}>
      {/* <button onClick={() => isLogoutModalOpen(true)}>Logout</button> */}
      <div className="flex gap-2 items-center cursor-pointer">
        {user.photo ? (
          <div className="w-14 h-14 ">
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
          <div className="w-14 h-14 flex items-center justify-center  ">
            <BiUserCircle className="text-2xl" />
          </div>
        )}
      </div>
      <div
        className={`absolute bg-secondary-400/50 backdrop-blur-lg px-3 py-2`}
      >
        <button>Logout</button>
      </div>
    </div>
  );
};

export default UserMenu;
