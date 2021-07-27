import fetch from "node-fetch";
import { useState, useEffect } from "react";
import FollowersColumn from "../components/FollowersColumn";
import Card from "../components/Card";

const Home = () => {
  let [posts, setPosts] = useState(null);
  const fetchData = async () => {
    const response = await fetch(".netlify/functions/getPosts");
    let response_body = await response.json();
    console.log(response_body.data.posts.values);
    setPosts(response_body.data.posts.values);
  };

  useEffect(() => fetchData(), []);

  return (
    <div>
      <FollowersColumn />
      {posts && posts.map((post) => <Card key={post.id} post={post} />)}
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
