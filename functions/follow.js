const { default: fetch } = require("node-fetch");

exports.handler = async (event) => {
  console.log(event.body);
  let jsonBody = JSON.parse(event.body);
  let currentId = jsonBody.id;
  let date_posted = jsonBody.date_posted;
  let newFollowStatus = jsonBody.isFollowed;

  let query = `mutation {
              updateposts(value:{id:${JSON.stringify(
                currentId
              )}, datedx20_posted:${JSON.stringify(
    date_posted
  )}, isFollowed:${JSON.stringify(newFollowStatus)}})
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
  // console.log(requestBody);
  // console.log(requestBody.data.updateposts.value);
  return {
    statusCode: 200,
    body: JSON.stringify(requestBody.data.updateposts.value),
  };
};
