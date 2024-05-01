//  1. 영화 데이터를 가져와서 화면에 나타내기
import { generateMovieCards } from"./movie.js";
// 2. 영화 검색
import { handleSearch } from"./search.js";

generateMovieCards();

const searchInput = document.querySelector("#search-input")
searchInput.focus();

const from = document.querySelector("#search-from")
from.addEventListener("submit", (event) => {
    event.preventDefault();
    handleSearch(searchInput.value)
})