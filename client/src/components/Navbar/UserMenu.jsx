import React, { useEffect, useRef, useState } from "react";
import { BiUserCircle } from "react-icons/bi";

const UserMenu = ({ user, isLogoutModalOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const avatarButtonRef = useRef(null);

  useEffect(() => {
    function handleDocumentClick(event) {
      if (
        isMenuOpen &&
        avatarButtonRef.current &&
        !avatarButtonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleDocumentClick);

    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, [isMenuOpen]);

  const handleMenuClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const renderUserPhoto = () => {
    if (user.photo) {
      const photoSrc = user.photo.includes("https://")
        ? user.photo
        : `${import.meta.env.REACT_APP_SERVER_PATH}/${user.photo}`;

      return (
        <img
          src={photoSrc}
          alt={user.username}
          className="rounded-full w-8 h-8"
        />
      );
    }

    return (
      <div className="w-8 h-8 flex items-center justify-center">
        <BiUserCircle className="text-[28px]" />
      </div>
    );
  };

  return (
    <div ref={avatarButtonRef} className="relative">
      <div
        onClick={handleMenuClick}
        className="flex gap-2 items-center cursor-pointer"
      >
        {renderUserPhoto()}
      </div>
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute top-10 right-2 bg-background-500 backdrop-blur-lg px-3 py-2 rounded-md duration-300 w-48 flex flex-col items-start gap-3  text-textColor-500 shadow-md shadow-secondary-500/50 border border-secondary-500/50 transition-opacity`}
      >
        <span>{user.username}</span>
        <button
          className="hover:bg-secondary-500 w-full border border-secondary-500 bg-gradient-to-r from-secondary-300 to-secondary-500"
          onClick={() => isLogoutModalOpen(true)}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserMenu;
