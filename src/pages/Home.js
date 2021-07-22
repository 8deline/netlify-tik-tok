import fetch from "node-fetch";
import { useState, useEffect } from "react";

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
      {posts &&
        posts.map((post) => (
          <div key={post.id}>
            <p>{post.avatar}</p>
            <p>{post.username}</p>
          </div>
        ))}
    </div>
  );
};

export default Home;
