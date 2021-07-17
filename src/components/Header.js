const Header = () => {
  return (
    <div className="header">
      <a href="#/">
        <img src="tiktok-logo.svg" alt="tiktok logo" width="60" />
      </a>
      <div className="logo-avatar">
        <div>
          <a href="#/upload">
            <img alt="upload" src="icons8-upload-to-cloud-24.png" width="40" />
          </a>
        </div>
        <div>
          <img
            className="avatar"
            src="my_avatar.jpeg"
            alt="my_avatar"
            width="60"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
