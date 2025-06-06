import React from "react";
import { useState } from "react";
import Header from "../components/Header";
import Profile from "../components/Profile";
import EditProfileModal from "../components/EditProfileModal";
import bessieImg from "../assets/images/Bessie-Coleman.png";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import NewPostModal from "../components/NewPostModal";
import image1 from "../assets/images/Vals-Thorens.png";
import image2 from "../assets/images/Restaurant-Terrace.png";
import image3 from "../assets/images/An-outdoor-cafe.png";
import image4 from "../assets/images/A-very-long-bridge-over-the-forest.png";
import image5 from "../assets/images/Tunnel-with-the-morning-light.png";
import image6 from "../assets/images/Mountain-house.png";

const initialImages = [
  {
    src: image1,
    alt: "val Thorens",
    title: "Val Thorens",
    description: "A beautiful view of Val Thorens, France.",
  },

  {
    src: image2,
    alt: "Restaurant Terrace",
    title: "Restaurant Terrace",
    description: "A cozy restaurant terrace with a stunning view.",
  },
  {
    src: image3,
    alt: "outdoor cafe",
    title: "An outdoor cafe",
    description: "A charming outdoor cafe with a lovely ambiance.",
  },
  {
    src: image4,
    alt: "long bridge",
    title: "A very long bridge over the forest",
    description: "A breathtaking view of a long bridge over the forest.",
  },
  {
    src: image5,
    alt: "tunnel",
    title: "Tunnel with the morning light",
    description: "A serene tunnel illuminated by the morning light.",
  },
  {
    src: image6,
    alt: "Mountain house",
    title: "Mountain House",
    description: "A picturesque mountain house surrounded by nature.",
  },
];

const InstaPage = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showNewPostModal, setShowNewPostModal] = useState(false);

  const [profile, setProfile] = useState({
    name: "Bassie Coleman",
    job: "Civil Aviator",
    image: bessieImg,
  });

  const [images, setImages] = useState(initialImages);

  const handleSaveProfile = (newProfile) => {
    setProfile(newProfile);
    setShowEditModal(false);
  };

  const handleAddPost = (newPost) => {
    setImages([newPost, ...images]);
    setShowNewPostModal(false);
  };
  return (
    <section>
      <Header />
      <div>
        <Profile
          name={profile.name}
          job={profile.job}
          image={profile.image}
          onEditProfile={() => setShowEditModal(true)}
          onNewPost={() => setShowNewPostModal(true)}
        />

        {showEditModal && (
          <EditProfileModal
            onClose={() => setShowEditModal(false)}
            profile={profile}
            onSave={handleSaveProfile}
          />
        )}
        {showNewPostModal && (
          <NewPostModal
            onClose={() => setShowNewPostModal(false)}
            onAddPost={handleAddPost}
          />
        )}
      </div>
      <Gallery images={images} />
      <Footer />
    </section>
  );
};

export default InstaPage;
