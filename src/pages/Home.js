import fetch from "node-fetch";
import { useState, useEffect } from "react";
import FollowersColumn from "../components/FollowersColumn";
import Card from "../components/Card";
import MiniCard from "../components/MiniCard";
import "../App.css";

const Home = () => {
  let [posts, setPosts] = useState(null);
  // let [followingUsers, setFollowingUsers] = useState(null);
  // let [unfollowingUsers, setUnfollowingUsers] = useState(null);
  let [userToToggle, setUserToToggle] = useState(null);
  let followingUsers;
  let unfollowingUsers;

  const fetchData = async () => {
    const response = await fetch(".netlify/functions/getPosts");
    let response_body = await response.json();
    console.log(response_body.data.posts.values);
    setPosts(response_body.data.posts.values);
    // let follow = response_body.data.posts.values.filter(
    //   (post) => post.isFollowed === true
    // );
    // setFollowingUsers(follow);
    // let unfollow = response_body.data.posts.values.filter(
    //   (post) => post.isFollowed === false
    // );
    // setUnfollowingUsers(unfollow);
  };

  const putData = async (userToToggle) => {
    await fetch(".netlify/functions/follow", {
      method: "post",
      body: JSON.stringify({
        id: userToToggle.id,
        date_posted: userToToggle.date_posted,
        isFollowed: userToToggle.isFollowed ? false : true,
      }),
    });
  };

  let toggleFunction = async () => {
    await putData(userToToggle);
    await fetchData();
    console.log("fetching new data after follow change");
    setUserToToggle(null);
  };

  if (userToToggle) {
    toggleFunction();
  }

  if (posts) {
    followingUsers = posts.filter((post) => post.isFollowed === true);

    unfollowingUsers = posts.filter((post) => post.isFollowed === false);
  }

  useEffect(() => {
    fetchData();
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
        <div className="section">
          <div className="suggested">
            <h2 className="bold">Suggested accounts</h2>
            <div className="break" />
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
      </div>
    </div>
  );
};

export default Home;
