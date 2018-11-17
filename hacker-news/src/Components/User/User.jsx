import React from "react";
import "../User/User.css";

const User = ({ user, logout }) => {
  return (
    <div className="user">
      <img src={user.avatar_url} alt="avatar" />
      <section>{user.name}</section>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default User;
