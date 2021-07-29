import fetch from "node-fetch";
import { useState, useEffect } from "react";
import FollowersColumn from "../components/FollowersColumn";
import Card from "../components/Card";

const Home = () => {
  let [posts, setPosts] = useState(null);
  let [followingUsers, setFollowingUsers] = useState(null);
  let [userToToggle, setUserToToggle] = useState(null);

  // let [unfollowingUsers, setUnfollowingUsers] = useState(null);
  // let [followUpdate, setFolowUpdate] = useState(false);
  console.log(userToToggle);

  const fetchData = async () => {
    const response = await fetch(".netlify/functions/getPosts");
    let response_body = await response.json();
    // console.log(response_body.data.posts.values);
    setPosts(response_body.data.posts.values);
    let follow = response_body.data.posts.values.filter(
      (post) => post.isFollowed === true
    );
    setFollowingUsers(follow);
  };
  // const resetFollowing = () => {
  //   if (posts) {
  //     let follow = posts.filter((post) => post.isFollowed === true);
  //     setFollowingUsers(follow);
  //   }
  // };
  if (userToToggle) {
    fetchData();
    setUserToToggle(null);
  }

  // let unfollow = response_body.data.posts.values.filter(
  //   (post) => post.isFollowed === false
  // );

  // setUnfollowingUsers(unfollow);

  useEffect(() => {
    fetchData();
    console.log("I only fetch data once");
  }, []);

  return (
    <div className="container">
      <FollowersColumn following={followingUsers} />
      <div className="feed">
        {posts &&
          posts.map((post) => (
            <Card
              key={post.id}
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
      <div className="suggested-box"></div>
    </div>
  );
};

export default Home;
