import fetch from "node-fetch";
import React from "react";
import "../App.css";
import { useState, useEffect } from "react";

const Card = ({ post }) => {
  let [test, setTest] = useState(null);
  // // const timestamp = user.timestamp;
  // // const timeStampReformat = timestamp.slice(2, 7);
  let putData = async () => {
    let request = await fetch(".netlify/functions/follow");
    let requestBody = await request.json();
    console.log(requestBody);
    console.log(requestBody);
    setTest(requestBody);
  };

  useEffect(() => {
    putData();
  }, []);

  return (
    <div className="card">
      {test && <p>{JSON.stringify(test.isFollowed)}</p>}

      <div className="break" />
      <div className="section">
        <div className="user-info">
          <img
            className="user-profile"
            src={post.avatar}
            width={"100%"}
            alt="user-profile"
          />
          <div>
            <div className="section">
              <h3 className="bold">{post.username}</h3>
              {/* <p className="username">{user.name}</p> */}
              <p>{post.date_posted}</p>
            </div>
            <p>{post.comments}</p>
          </div>
        </div>
        <div
          className={post.isFollowed ? "followed-button" : "follow-button"}
          // onClick={() => toggleFollow(user)}
        >
          {post.isFollowed ? "Following" : "Follow"}
        </div>
      </div>
      {/* <div className="video-container"> */}
      <video className="video" controls>
        <source src={post.video_posts} type="video/mp4" />
      </video>
      {/* <iframe
          className="iframe"
          title="post"
          src={post.video_posts + "/embed"}
        ></iframe> */}
      {/* </div> */}

      <div className="section socials">
        <i class="far fa-heart"></i>
        <div className="social-tag">{post.likes}</div>
        {/* <i class="far fa-comment-dots"></i> */}
        <i class="far fa-comments"></i>
        <div className="social-tag">{post.comments_list.length}</div>
        <i class="far fa-share-square"></i>
      </div>
    </div>
  );
};

export default Card;
