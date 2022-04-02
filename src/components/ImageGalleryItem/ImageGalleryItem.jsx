import PropTypes from "prop-types";
import { GalleryItem, GalleryItemImage } from "./ImageGalleryItem.styled";

const ImageGalleryItem = ({ src, onImageClick, modalImage }) => {
  return (
    <GalleryItem onClick={() => onImageClick(modalImage)}>
      <GalleryItemImage src={src} alt="" />
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
