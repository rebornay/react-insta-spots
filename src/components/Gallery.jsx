import gallery from "./Gallery.module.css";

import GalleryModal from "./GalleryModal";

const Gallery = ({ images }) => {
  return (
    <div>
      <section className={gallery.galleryContainer}>
        <div className={gallery.galleryGrid}>
          {images.map((image, index) => (
            <GalleryModal
              key={index}
              src={image.src}
              alt={image.alt}
              title={image.title}
              description={image.description}
            />
          ))}
        </div>
      </section>
      <div className={gallery.thinLine}></div>
    </div>
  );
};

export default Gallery;
