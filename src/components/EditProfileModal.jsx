import React from "react";
import { useState } from "react";
import editProfile from "./EditProfileModal.module.css";

const EditProfileModal = ({ onClose, profile, onSave }) => {
  const [name, setName] = useState(profile.name);
  const [job, setJob] = useState(profile.job);
  const [image, setImage] = useState(profile.image);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => setImage(event.target.result);
      reader.readAsDataURL(file);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ name, job, image });
  };

  return (
    <dialog open className={editProfile.editModal}>
      <div className={editProfile.flex}>
        <div className={editProfile.modalContent}>
          <p className={editProfile.closeBtn} onClick={onClose}>
          ✖
          </p>
          <h2>Edit Profile</h2>
          <form className={editProfile.formModal} onSubmit={handleSubmit}>
            <div>
              <label htmlFor="editName">Name </label>
              <input
                type="text"
                placeholder="Name"
                id="editName"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="editJob">Job Title</label>
              <input
                type="text"
                placeholder="Job Title"
                id="editJob"
                value={job}
                onChange={(e) => setJob(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                type="file"
                name="imageFile"
                id="editImage"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
            <button className={editProfile.saveProfile} type="submit">
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default EditProfileModal;
