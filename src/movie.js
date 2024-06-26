export const generateMovieCards = async () => {
  const movies = await fetchMovieData();

  const cardList = document.querySelector("#card-list");
  cardList.innerHTML = movies
    .map(
      (movie) => `
          <li class="movie-card" id=${movie.id}>
              <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
              <h3 class="movie-title">${movie.title}</h3>
              <p>${movie.overview}</p>
              <p>Rating: ${movie.vote_average}</p>
          </li>`
    )
    .join("");

  cardList.addEventListener("click", handleClickCard);

  // 이벤트 위임: 하위요소에서 발생한 이벤트를 상위요소에서 처리하도록 해줍니다.
  function handleClickCard({ target }) {
    // 카드 외 영역 클릭 시 무시
    if (target === cardList) return;

    if (target.matches(".movie-card")) {
      alert(`영화 id: ${target.id}`);
    } else {
      // 카드의 자식 태그 (img, h3, p) 클릭 시 부모의 id로 접근
      alert(`영화 id: ${target.parentNode.id}`);
    }
  }
};

async function fetchMovieData() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZmNlNGU3NTQ4YzUxZDQzMjhmZTAyODBlN2YwNWJjZSIsInN1YiI6IjY2MmViYzA5NWE3ODg0MDEyNGMxZDdlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eC3798dAeZaxSnOMkpnPN1-lMIZmQxuOf5B8fyijZSE',
    },
  };
  const response = await fetch(
    'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options
  );
  const data = await response.json();
  return data.results;
}