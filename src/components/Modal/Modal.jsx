import React, { Component } from "react";
import { createPortal } from "react-dom";
import { Overlay, ModalImg } from "./Modal.styled";

const modalRoot = document.querySelector("#modal-root");

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.code === "Escape") {
      console.log("Escape");
      this.props.onClose();
    }
  };

  handleClickBackdrop = (event) => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };
  render() {
    return createPortal(
      <Overlay onClick={this.handleClickBackdrop}>
        <ModalImg>
          <img src={this.props.largeImg} alt="" />
        </ModalImg>
      </Overlay>,
      modalRoot
    );
  }
}

export default Modal;
