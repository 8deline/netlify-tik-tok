import fetch from "node-fetch";
import React from "react";
import { useState, useEffect } from "react";

const MiniCard = ({ user, toggleFollow }) => {
  let [unFollowing, setUnFollowing] = useState(user.isFollowed);
  // const putData = async () => {
  //   // console.log(user);

  //   await fetch(".netlify/functions/follow", {
  //     method: "post",
  //     body: JSON.stringify({
  //       id: user.id,
  //       date_posted: user.date_posted,
  //       isFollowed: unFollowing,
  //     }),
  //   });
  // };

  // useEffect(() => {
  //   // console.log("why is useeffect not run on the minicard");
  //   putData();
  //   // console.log(unFollowing);
  //   // console.log("useeffectminicard");
  // });
  useEffect(() => {
    // setUnFollowing(unFollowing);
    console.log("minicard is rendered");
  });

  return (
    <div className="section minicard">
      <div className="section">
        <img
          className="user-profile"
          src={user.avatar}
          width={"100%"}
          alt="avatar"
        />
        <div>
          <h3 className="bold">{user.username}</h3>
          <p>{user.name}</p>
        </div>
      </div>
      {
        <div
          style={{ cursor: "pointer" }}
          className={user.isFollowed ? "followed-button" : "follow-button"}
          onClick={() => {
            // setUnFollowing((prev) => !prev);
            toggleFollow(user);
          }}
        >
          {user.is_followed ? "Following" : "Follow"}
        </div>
      }
    </div>
  );
};

export default MiniCard;
