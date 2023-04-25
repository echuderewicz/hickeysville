import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

const lightbox = new PhotoSwipeLightbox({
  gallery: "#my-gallery",
  children: "a",
  pswpModule: () => import("photoswipe"),
  bgOpacity: 1,
});

lightbox.init();
