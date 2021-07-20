import fetch from "node-fetch";

const url = process.env.ENDPOINT;

exports.handler = async () => {
  const query = `query 
    {
        posts {
          values {
            avatar
            username
            comments
            likes
            video_posts
          }
        }
      }`;
  const response = await fetch(url, {
    method: "post",
    body: JSON.stringify(query),
    headers: {
      "Content-Type": "application/json",
      "x-cassandra-token": "populate_me",
    },
  })
    .then((res) => res.json())
    .then((json) => console.log(json));
};
