const { default: fetch } = require("node-fetch");

exports.handler = async (event) => {
  console.log("test");
  console.log(event.body);
  let jsonBody = JSON.parse(event.body);

  //   id: 5,
  //   datedx20_posted: "2021-08-02",
  //   avatar: "avatars/my_avatar.jpeg",
  //   comments: caption,
  //   comments_list: [],
  //   date_posted: "2021-08-02",
  //   isFollowed: false,
  //   likes: "0",
  //   likes_int: 0,
  //   username: username,
  //   video_posts: video,

  let query = `mutation {
                insertposts(value:{id:${JSON.stringify(jsonBody.id)}
                datedx20_posted: ${JSON.stringify(jsonBody.datedx20_posted)}
            avatar: ${JSON.stringify(jsonBody.avatar)}
            comments: ${JSON.stringify(jsonBody.comments)}
            comments_list: ${JSON.stringify(jsonBody.comments_list)}
            date_posted: ${JSON.stringify(jsonBody.date_posted)}
            isFollowed: ${JSON.stringify(jsonBody.isFollowed)}
            likes: ${JSON.stringify(jsonBody.likes)}
            likes_int: ${JSON.stringify(jsonBody.likes_int)}
            username: ${JSON.stringify(jsonBody.username)}
            video_posts: ${JSON.stringify(jsonBody.video_posts)}
            })
               {
                value {
                  id
                  isFollowed
              }}}`;

  let request = await fetch(process.env.ENDPOINT, {
    method: "POST",
    body: JSON.stringify({ query }),
    headers: {
      "Content-Type": "application/json",
      "x-cassandra-token": process.env.TOKEN,
    },
  });

  const requestBody = await request.json();
  console.log("I am here");
  console.log(requestBody);
  console.log(requestBody.data.insertposts.value);
  return {
    statusCode: 200,
    body: JSON.stringify(requestBody.data.insertposts.value),
  };
};
