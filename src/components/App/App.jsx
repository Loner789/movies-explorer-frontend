// IMPORTS:
import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import BurgerPopup from '../BurgerPopup/BurgerPopup';

// BASE COMPONENT OF APPLICATION:
function App() {
  // Variables:
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const [currentUser, setCurrentUser] = useState({});
  const [isBurgerPopupOpen, setIsBurgerPopupOpen] = useState(false);
  const [isChangingClicked, setIsChangingClicked] = useState(false);
  const [isShortFilm, setIsShortFilm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isProfileUpdated, setIsProfileUpdated] = useState(false);
  const [isFirstVisit, setIsFirstVisit] = useState(true);
  // const [loggedIn, setLoggedIn] = useState(false);
  
  
  

  // Functions:
  function handleBurgerButtonClick() {
    setIsBurgerPopupOpen(true);
  }

  function closePopup() {
    setIsBurgerPopupOpen(false);
  }

  function handleRegister(name, email, password) {
    console.log(name, email, password);
    navigate('/signin');
  }

  function handleLogin(email, password) {
    console.log(email, password);
    navigate('/movies');
  }

  function handleProfileChange(name, email) {
    console.log(name, email);
    setIsChangingClicked(false);
    setIsProfileUpdated(true);
  }

  function handleProfileEdit() {
    setIsChangingClicked(true);
  }

  function handleLogout() {
    console.log('Goodbye!');
    navigate('/');
  }

  function handleMovieLikeClick() {
    console.log('Like!');
  }

  function handleMovieDeleteClick() {
    console.log('Delete!');
  }

  function handleMoviesCheckboxChange(isShortFilm) {
    console.log(isShortFilm);
    setIsShortFilm(!isShortFilm);
  }

  function handleSavedMoviesCheckboxChange(isShortFilm) {
    console.log(isShortFilm);
    setIsShortFilm(!isShortFilm);
  }

  function handleMoviesSearchForm(data) {
    console.log(data);
  }

  function handleSavedMoviesSearchForm(data) {
    console.log(data);
  }

  // Side-effects:
  useEffect(_ => {
    if (currentPath !== '/profile' && isProfileUpdated) {
      setIsProfileUpdated(false);
    }
  }, [currentPath]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <Header currentPath={currentPath} onClick={handleBurgerButtonClick} />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route
            path='/movies'
            element={
              <Movies
                movies={movies}
                currentPath={currentPath}
                onCheckboxChange={handleMoviesCheckboxChange}
                onSearch={handleMoviesSearchForm}
                isLoading={isLoading}
                isFirstVisit={isFirstVisit}
                onMovieLike={handleMovieLikeClick}
              />
            }
          />
          <Route
            path='/saved-movies'
            element={
              <SavedMovies
                movies={savedMovies}
                currentPath={currentPath}
                onCheckboxChange={handleSavedMoviesCheckboxChange}
                onSearch={handleSavedMoviesSearchForm}
                isLoading={isLoading}
                isFirstVisit={isFirstVisit}
                onMovieDelete={handleMovieDeleteClick}
              />
            }
          />
          <Route
            path='/profile'
            element={
              <Profile
                onProfileChange={handleProfileChange}
                onProfileEdit={handleProfileEdit}
                onLogout={handleLogout}
                currentPath={currentPath}
                isChangingClicked={isChangingClicked}
                isProfileUpdated={isProfileUpdated}
              />
            }
          />
          <Route
            path='/signup'
            element={<Register onRegister={handleRegister} />}
          />
          <Route path='/signin' element={<Login onLogin={handleLogin} />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
        <Footer currentPath={currentPath} />
      </div>
      <BurgerPopup isOpen={isBurgerPopupOpen} onClose={closePopup} />
    </CurrentUserContext.Provider>
  );
}

export default App;
