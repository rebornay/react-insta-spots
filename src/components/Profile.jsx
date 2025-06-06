import React from "react";
import ProfileSec from "./Profile.module.css";

import { FaPlus, MdModeEditOutline } from "../icons";

//
const Profile = ({ name, job, image, onEditProfile, onNewPost }) => {
  return (
    <div>
      <section className={ProfileSec.profile}>
        <img className={ProfileSec.profileImage} src={image} alt="Profile" />
        <div className={ProfileSec.profileDetails}>
          <div className={ProfileSec.profileNameAndJob}>
            <h2 className={ProfileSec.profileName}>{name}</h2>
            <p className={ProfileSec.profileJobTitle}>{job}</p>
          </div>
          <p className={ProfileSec.profileEdit} onClick={onEditProfile}>
            <MdModeEditOutline className={ProfileSec.EditIcon} />
            Edit Profile
          </p>
        </div>
        <button className={ProfileSec.profileBtn} onClick={onNewPost}>
          {/* <img
          className={ProfileSec.newPostIcon}
          src="/Assets/icons/New-Post-Icon.svg"
          alt="New Post"
        /> */}
          <FaPlus className={ProfileSec.newPostIcon} />
          New Post
        </button>
      </section>
      <div className={ProfileSec.thinLine}></div>
    </div>
  );
};

export default Profile;
