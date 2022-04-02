import React, { Component } from "react";
import {
  SearchBarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from "./SearchBar.styled";
import { ImSearch } from "react-icons/im";

class SearchBar extends Component {
  state = {
    searchQuery: "",
  };

  handleChangeName = (e) => {
    this.setState({ searchQuery: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.searchQuery.trim() === "") return;

    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: "" });
  };
  render() {
    return (
      <SearchBarHeader>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <ImSearch
              style={{ width: 20, height: 20, marginLeft: 4, marginTop: 8 }}
            />
            {/* <span>S</span> */}
          </SearchFormButton>

          <SearchFormInput
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchQuery}
            onChange={this.handleChangeName}
          />
        </SearchForm>
      </SearchBarHeader>
    );
  }
}

export default SearchBar;
