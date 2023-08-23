import React from "react";
import { useContext } from "react";
import gitContext from "../Context/Contextdata";

function Profile() {
  const { userInfo } = useContext(gitContext);
  return (
    <>
      <div
        style={{
          backgroundColor: "black",
          padding: "30px",
          display: "flex",
          width: "100%",
        }}
      >
        <div style={{ width: "30%", marginLeft: "320px" }}>
          <img
            src={
              userInfo.avatar_url ||
              "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            }
            alt="Profile Photo"
            class="img-thumbnail"
            width={180}
            height={180}
            style={{ borderRadius: "20%" }}
          />
        </div>

        <div
          className="container"
          style={{
            color: "whitesmoke",
            width: "60%",
            textAlign: "start",
            alignItems: "center",
          }}
        >
          <h5>Username : {userInfo.login || "Users Github UserName"} </h5>
          <h6 className="mt-4">
            Email : {userInfo.email || userInfo.login}@Gmail.com
          </h6>
          <h6 className="mt-4">Registration : {userInfo.created_at}</h6>
        </div>
      </div>

      <div
        className="container mt-5"
        style={{ display: "flex", justifyContent: "space-evenly" }}
      >
        <div style={{ textAlign: "center", color: "whitesmoke" }}>
          <h6>Followers</h6>
          <p>{userInfo.followers}</p>
        </div>

        <div style={{ textAlign: "center", color: "whitesmoke" }}>
          <h6>Following</h6>
          <p>{userInfo.following}</p>
        </div>
        <div style={{ textAlign: "center", color: "whitesmoke" }}>
          <h6>Repositories</h6>
          <p>{userInfo.public_repos}</p>
        </div>
      </div>
    </>
  );
}

export default Profile;
