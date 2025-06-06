import React from "react";
import footer from "./Footer.module.css";
const Footer = () => {
  return (
    <section className={footer.footer}>
      <div>{new Date().getFullYear} &copy; Spots</div>
    </section>
  );
};

export default Footer;
