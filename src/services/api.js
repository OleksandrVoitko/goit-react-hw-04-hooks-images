// export const API_KEY = '24435359-4fe3fd99e7e91c25a1144d667';
import axios from "axios";
import PropTypes from "prop-types";
import { API_KEY, BASE_URL, IMG_PER_PAGE } from "./constants";

axios.defaults.baseURL = BASE_URL;

export default async function getImg(searchQuery, page) {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: searchQuery,
    page: page,
    per_page: IMG_PER_PAGE,
    image_type: "photo&orientation=horizontal",
  });

  try {
    const response = await axios.get(`?${searchParams}`);
    return response.data;
  } catch (error) {
    return Promise.reject(new Error(error.message));
  }
}

getImg.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};
