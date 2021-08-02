import { useState } from "react";

const Upload = () => {
  const [caption, setCaption] = useState(null);
  const [video, setVideo] = useState(null);

  const username = "ledaine";

  const handleSubmit = (e) => {};

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
                  name="video"
                  value={video}
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
