import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem";
import { Gallery } from "./ImageGallery.styled";

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <Gallery>
      {images.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          src={webformatURL}
          modalImage={largeImageURL}
          onImageClick={onImageClick}
        />
      ))}
    </Gallery>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGallery;
