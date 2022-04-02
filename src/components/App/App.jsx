import { useEffect, useState } from "react";
import SearchBar from "../SearchBar";
import { Wrapper } from "./App.styled";
import getImg from "../../services/api";
import ImageGallery from "../ImageGallery";
import Modal from "../Modal";
import Button from "../Button";
import Loader from "../Loader";
import { IMG_PER_PAGE } from "../../services/constants";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState("");

  useEffect(() => {
    if (searchQuery === "") return;

    const searchImg = async () => {
      toggleLoading();

      try {
        const data = await getImg(searchQuery, page);
        setImages((images) => [...images, ...data.hits]);
      } catch (e) {
        console.error(e);
      } finally {
        toggleLoading();
      }
    };

    searchImg();
  }, [searchQuery, page]);

  const handleChangeSearch = (newSearchQuery) => {
    if (newSearchQuery !== searchQuery) {
      setSearchQuery(newSearchQuery);
      setPage(1);
      setImages([]);
    }
    return;
  };

  const toggleLoading = () => {
    setLoading((loading) => !loading);
  };

  const toggleModal = () => {
    setShowModal((showModal) => !showModal);
  };

  const handleImageClick = (newImage) => {
    setModalImage(newImage);
    toggleModal();
  };

  const handlerLoadMore = () => {
    setPage((page) => page + 1);
  };

  return (
    <Wrapper>
      <SearchBar onSubmit={handleChangeSearch} />
      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={handleImageClick} />
      )}
      {showModal && <Modal largeImg={modalImage} onClose={toggleModal} />}
      {images.length > 0 && images.length / page === IMG_PER_PAGE && (
        <Button onButtonClick={handlerLoadMore} />
      )}
      {loading && <Loader />}
    </Wrapper>
  );
}
