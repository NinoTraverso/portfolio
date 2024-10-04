import React, { forwardRef } from "react";

const Profile = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="profileSection">
      <div className="d-flex flex-row">
        <div className="mx-3">
          <h2>Nino J. Traverso</h2>
          <h2>Web Developer & Designer</h2>
        </div>
        <div className="logoContainer">
          <img src="./assets/profileImage.png" alt="logoImage" />
        </div>
      </div>
      <h1 id="profile">Profile</h1>
    </div>
  );
});

export default Profile;
