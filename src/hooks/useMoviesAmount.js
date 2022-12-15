// IMPORTS:
import { useState, useEffect } from 'react';
import useWindowWidth from './useWindowWidth';
import {
  INITIAL_NUMBER_OF_MOVIES_320_480,
  INITIAL_NUMBER_OF_MOVIES_481_768,
  INITIAL_NUMBER_OF_MOVIES_769_1280,
  NUMBER_OF_MOVIES_TO_ADD_320_768,
  NUMBER_OF_MOVIES_TO_ADD_769_1279,
  NUMBER_OF_MOVIES_TO_ADD_1280,
} from '../utils/constants';

// Custom Hook:
function useMoviesAmount() {
  // Constants:
  const screenWidth = useWindowWidth();
  const [moviesAmount, setMoviesAmount] = useState(
    getInitialMoviesAmount(screenWidth)
  );
  const numberOfMoviesToAdd = getNumberOfMoviesToAdd(screenWidth);
  const fullNumberOfMovies = moviesAmount + numberOfMoviesToAdd;

  // Functions:
  function getInitialMoviesAmount(screenWidth) {
    if (screenWidth <= 480) return INITIAL_NUMBER_OF_MOVIES_320_480;
    else if (screenWidth > 480 && screenWidth <= 768)
      return INITIAL_NUMBER_OF_MOVIES_481_768;
    else return INITIAL_NUMBER_OF_MOVIES_769_1280;
  }

  function getNumberOfMoviesToAdd(screenWidth) {
    if (screenWidth >= 1280) return NUMBER_OF_MOVIES_TO_ADD_1280;
    else if (screenWidth > 768 && screenWidth < 1280)
      return NUMBER_OF_MOVIES_TO_ADD_769_1279;
    else return NUMBER_OF_MOVIES_TO_ADD_320_768;
  }

  function addMoreMovies() {
    setMoviesAmount(fullNumberOfMovies);
  }

  // Side-effects:
  useEffect(() => {
    setMoviesAmount(getInitialMoviesAmount(screenWidth));
  }, [screenWidth]);

  return { moviesAmount, addMoreMovies };
}

export default useMoviesAmount;
