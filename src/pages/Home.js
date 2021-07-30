import fetch from "node-fetch";
import { useState, useEffect } from "react";
import FollowersColumn from "../components/FollowersColumn";
import Card from "../components/Card";
import MiniCard from "../components/MiniCard";

const Home = () => {
  let [posts, setPosts] = useState(null);
  let [followingUsers, setFollowingUsers] = useState(null);
  let [unfollowingUsers, setUnfollowingUsers] = useState(null);
  let [userToToggle, setUserToToggle] = useState(null);

  const fetchData = async () => {
    const response = await fetch(".netlify/functions/getPosts");
    let response_body = await response.json();
    // console.log(response_body.data.posts.values);
    setPosts(response_body.data.posts.values);
    let follow = response_body.data.posts.values.filter(
      (post) => post.isFollowed === true
    );
    setFollowingUsers(follow);
    let unfollow = response_body.data.posts.values.filter(
      (post) => post.isFollowed === false
    );
    setUnfollowingUsers(unfollow);
  };

  if (userToToggle) {
    fetchData();
    setUserToToggle(null);
  }

  useEffect(() => {
    fetchData();
    console.log("I only fetch data once");
  }, []);

  return (
    <div className="container">
      <FollowersColumn following={followingUsers} />
      <div className="feed">
        {posts &&
          posts.map((post, index) => (
            <Card
              key={index}
              post={post}
              toggleUserPost={(userToToggle) => setUserToToggle(userToToggle)}
            />
          ))}
      </div>

      {/* <div className="feed">
        {posts &&
          posts.map((post) => (
            <div key={post.id}>
              <img src={post.avatar} alt="avatar" width="40" />
              <p>{post.username}</p>
              <video width="320" height="240" controls>
                <source src={post.video_posts} type="video/mp4" />
              </video>
              <p>{post.likes}</p>
              <p>{post.comments.length}</p>
              <p>{post.date_posted}</p>
            </div>
          ))}
      </div> */}
      <div className="suggested-box">
        {unfollowingUsers &&
          unfollowingUsers.map((unfollowingUser, index) => (
            <MiniCard
              key={index}
              user={unfollowingUser}
              toggleFollow={(userToToggle) => {
                setUserToToggle(userToToggle);
              }}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
