import { useState } from "react";
import fetch from "node-fetch";

const Upload = () => {
  const [caption, setCaption] = useState("");
  const [video, setVideo] = useState("");
  const username = "ledaine";

  let uploadData = async (body) => {
    await fetch("/.netlify/functions/upload", {
      method: "post",
      body: JSON.stringify(body),
    });
  };

  // let putData = async () => {
  //   await fetch(".netlify/functions/follow", {
  //     method: "post",
  //     body: JSON.stringify({
  //       id: post.id,
  //       date_posted: post.date_posted,
  //       isFollowed: following,
  //     }),
  //   });
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(caption);
    // console.log(video);
    let data = {
      id: 5,
      datedx20_posted: "2021-08-02",
      avatar: "avatars/my_avatar.jpeg",
      comments: caption,
      comments_list: [],
      date_posted: "2021-08-02",
      isFollowed: false,
      likes: "0",
      likes_int: 0,
      username: username,
      video_posts: video,
    };
    uploadData(data);
    setCaption("");
    setVideo("");
  };

  return (
    <div className="upload-page">
      <br />
      <h1>Upload video</h1>
      <p>This video will be published to @{username}</p>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="section">
            <div className="image-upload"></div>
            <div className="form-section">
              <div className="section input-section">
                <label className="bold">Caption</label>
                <input
                  className="input"
                  name="caption"
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                />
              </div>
              <div className="break"></div>
              <div className="section input-section">
                <label className="bold">Video Url</label>
                <input
                  className="input"
                  value={video}
                  name="video"
                  onChange={(e) => setVideo(e.target.value)}
                />
              </div>
            </div>
          </div>
          <button>Post</button>
        </form>
      </div>
    </div>
  );
};

export default Upload;
