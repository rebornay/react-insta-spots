import { useState } from "react";
import newPost from "./NewPostModal.module.css";

const NewPostModal = ({ onClose, onAddPost }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || (!imageUrl && !imageFile)) return;

    if (imageFile) {
      const reader = new FileReader();
      reader.onload = (event) => {
        onAddPost({
          src: event.target.result,
          alt: title,
          title,
          description,
        });
      };
      reader.readAsDataURL(imageFile);
    } else {
      onAddPost({
        src: imageUrl,
        alt: title,
        title,
        description,
      });
    }
  };

  return (
    <dialog open className={newPost.newPostDialog}>
      <div className={newPost.wrapperrr}>
        <button type="button" className={newPost.closeDialog} onClick={onClose}>
          ✖
        </button>
        <div>
          <h2>New Post</h2>
          <span style={{ fontSize: "1rem" }}>Upload Image or Paste URL</span>
          <form
            className={newPost.formm}
            id="newPostForm"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="text"
              placeholder="Enter name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <input
              type="file"
              name="imageFile"
              accept="image/*"
              onChange={handleFileChange}
            />
            <input
              type="url"
              name="imageUrl"
              placeholder="Image URL"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
            <textarea
              name="description"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={{
                padding: "0.6rem",
                borderRadius: "8px",
                border: "1px solid #ccc",
              }}
            />
            <button className={newPost.submitBtn} type="submit">
              Add Card
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default NewPostModal;
