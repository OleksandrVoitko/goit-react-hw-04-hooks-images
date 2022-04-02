import { Component } from "react";
import SearchBar from "../SearchBar";
import { Wrapper } from "./App.styled";
import getImg from "../../services/api";
import ImageGallery from "../ImageGallery";
import Modal from "../Modal";
import Button from "../Button";
import Loader from "../Loader";
import { IMG_PER_PAGE } from "../../services/constants";
class App extends Component {
  state = {
    searchQuery: "",
    page: 1,
    images: [],
    loading: false,
    showModal: false,
    modalImage: "",
  };

  componentDidUpdate(prevProps, { searchQuery, page }) {
    if (searchQuery !== this.state.searchQuery || page !== this.state.page) {
      this.searchImg(searchQuery, page);
    }
    return;
  }

  handleChangeSearch = (searchQuery) => {
    if (searchQuery !== this.state.searchQuery) {
      this.setState({
        searchQuery,
        page: 1,
        images: [],
      });
    }
    return;
  };

  toggleLoading = () => {
    this.setState(({ loading }) => ({
      loading: !loading,
    }));
  };

  searchImg = async () => {
    const { searchQuery, page } = this.state;
    this.toggleLoading();

    try {
      const data = await getImg(searchQuery, page);
      this.setState(({ images }) => {
        return { images: [...images, ...data.hits] };
      });
    } catch (e) {
      console.error(e);
    } finally {
      this.toggleLoading();
    }
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  handleImageClick = (image) => {
    this.setState({ modalImage: image });
    this.toggleModal();
  };

  handlerLoadMore = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  render() {
    const { images, showModal, modalImage, page, loading } = this.state;

    return (
      <Wrapper>
        <SearchBar onSubmit={this.handleChangeSearch} />
        {images.length > 0 && (
          <ImageGallery images={images} onImageClick={this.handleImageClick} />
        )}
        {showModal && (
          <Modal largeImg={modalImage} onClose={this.toggleModal} />
        )}
        {images.length > 0 && images.length / page === IMG_PER_PAGE && (
          <Button onButtonClick={this.handlerLoadMore} />
        )}
        {loading && <Loader />}
      </Wrapper>
    );
  }
}

export default App;
