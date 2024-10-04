import React from "react";

function Profile() {
  return (
    <div>
      <div className="d-flex flex-row jutify-content-start align-items-end mt-4 ms-4">
        <div className="logoContainer ">
          <img src="./assets/logo.png" alt="logoImage" />
        </div>
        <div className="mx-3">
          <h1>Nino J. Traverso</h1>
          <h1>Web Developer & Designer</h1>
        </div>
      </div>
      <h1 id="profile">Profile</h1>
    </div>
  );
}

export default Profile;
