// const Header = () => {
//   return (
//     <div className="header">
//       <a href="#/">
//         <img src="tiktok-logo.svg" alt="tiktok logo" width="60" />
//       </a>
//       <div className="logo-avatar">
//         <div>
//           <a href="#/upload">
//             <img alt="upload" src="icons8-upload-to-cloud-24.png" width="40" />
//           </a>
//         </div>
//         <div>
//           <img
//             className="avatar"
//             src="my_avatar.jpeg"
//             alt="my_avatar"
//             width="60"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;

import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo"></div>
      </Link>
      <div className="upload-container">
        <div className="section">
          <Link to="/upload">
            <div className="upload" />
          </Link>
          <img className="avatar" src="my_avatar.jpeg" alt="my_avatar" />
        </div>
      </div>
    </div>
  );
};

export default Header;
