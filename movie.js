const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZmNlNGU3NTQ4YzUxZDQzMjhmZTAyODBlN2YwNWJjZSIsInN1YiI6IjY2MmViYzA5NWE3ODg0MDEyNGMxZDdlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eC3798dAeZaxSnOMkpnPN1-lMIZmQxuOf5B8fyijZSE'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));