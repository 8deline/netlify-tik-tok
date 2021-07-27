const { default: fetch } = require("node-fetch");

exports.handler = async () => {
  let query = `mutation {
              updateposts(value:{id:${JSON.stringify(
                0
              )}, datedx20_posted:${JSON.stringify(
    "2020-02-01"
  )}, isFollowed:${JSON.stringify(false)}})
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
  console.log(requestBody);
  console.log(requestBody.data.updateposts.value);
  return {
    statusCode: 200,
    body: JSON.stringify(requestBody.data.updateposts.value),
  };
};
