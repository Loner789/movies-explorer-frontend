// To check the response to the request from the api
const handleResponse = (res) => {
  if (res.ok) {
    return res.json();
  }

  return Promise.reject(`Ошибка: ${res.status}`);
};

// To filter movies by the name entered in the search bar
const filterMoviesByName = (movies, name) => {
  if (!name) return undefined;

  return movies.filter((movie) =>
    movie.nameRU.toLowerCase().includes(name.toLowerCase())
  );
};

// To filter movies by duration, when short films are selected
const filterMoviesByDuration = (movies) => {
  return movies.filter((movie) => movie.duration <= 40);
};

// To check code of error
const getErrorCode = (err) => {
  return err.split(' ')[1];
};

export {
  handleResponse,
  filterMoviesByName,
  filterMoviesByDuration,
  getErrorCode,
};
