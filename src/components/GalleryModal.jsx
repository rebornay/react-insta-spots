import React from "react";
import { useState } from "react";
import gModal from "./GalleryModal.module.css";

// import { FaRegHeart } from "../icons";
import { FaHeart } from "../icons";


const GalleryModal = ({ src, alt, title, description }) => {
  const [open, setOpen] = useState(false);
  const [liked, setLiked] = useState(false);

  return (
    <section className={gModal.galleryImage}>
      <img
        src={src}
        alt={alt}
        className={gModal.img1}
        onClick={() => setOpen(true)}
      />
      <div className={gModal.content}>
        <p className={gModal.title}>{title}</p>
        <FaHeart
          className={`${gModal.heart} ${liked ? gModal.active : ""}`}
          onClick={() => setLiked(!liked)}
        /> 
         
      </div>

      {open && (
        <dialog open className={gModal.previewDialog}>
          <div>
            <img src={src} alt={alt} className={gModal.modalImg} />
            <p className={gModal.modalTitle}>{title}</p>
            <p className={gModal.modalDescription}>{description}</p>
            <button onClick={() => setOpen(false)}>Close</button>
          </div>
        </dialog>
      )}
    </section>
  );
};

export default GalleryModal;
