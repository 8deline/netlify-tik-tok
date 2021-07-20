const fetch = require("node-fetch");

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
    body: JSON.stringify({ query }),
    headers: {
      "Content-Type": "application/json",
      "x-cassandra-token": process.env.TOKEN,
    },
  });
  const response_body = await response.json();
  try {
    if (response_body) {
      return {
        statusCode: 200,
        body: JSON.stringify(response_body),
      };
    }
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify(e),
    };
  }
  console.log("test function");
  console.log(response_body);
};
console.log("test function");
