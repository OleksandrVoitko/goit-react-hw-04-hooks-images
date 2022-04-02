import { useState } from "react";
import {
  SearchBarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from "./SearchBar.styled";
import { ImSearch } from "react-icons/im";

export default function SearchBar({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChangeName = (e) => {
    setSearchQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() === "") return;

    onSubmit(searchQuery);
    setSearchQuery("");
  };

  return (
    <SearchBarHeader>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <ImSearch
            style={{ width: 20, height: 20, marginLeft: 4, marginTop: 8 }}
          />
        </SearchFormButton>

        <SearchFormInput
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchQuery}
          onChange={handleChangeName}
        />
      </SearchForm>
    </SearchBarHeader>
  );
}

// class SearchBar extends Component {
//   state = {
//     searchQuery: "",
//   };

//   handleChangeName = (e) => {
//     this.setState({ searchQuery: e.currentTarget.value.toLowerCase() });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     if (this.state.searchQuery.trim() === "") return;

//     this.props.onSubmit(this.state.searchQuery);
//     this.setState({ searchQuery: "" });
//   };
//   render() {
//     return (
//       <SearchBarHeader>
//         <SearchForm onSubmit={this.handleSubmit}>
//           <SearchFormButton type="submit">
//             <ImSearch
//               style={{ width: 20, height: 20, marginLeft: 4, marginTop: 8 }}
//             />

//           </SearchFormButton>

//           <SearchFormInput
//             type="text"
//             autocomplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             value={this.state.searchQuery}
//             onChange={this.handleChangeName}
//           />
//         </SearchForm>
//       </SearchBarHeader>
//     );
//   }
// }

// export default SearchBar;
