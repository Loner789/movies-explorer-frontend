// IMPORTS:
import { useState, useEffect } from 'react';
import useWindowWidth from './useWindowWidth';
import {
  INITIAL_NUMBER_OF_MOVIES_320,
  INITIAL_NUMBER_OF_MOVIES_768,
  INITIAL_NUMBER_OF_MOVIES_1280,
  NUMBER_OF_MOVIES_TO_ADD_768,
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
    if (screenWidth < 768) return INITIAL_NUMBER_OF_MOVIES_320;
    else if (screenWidth >= 768 && screenWidth < 1280)
      return INITIAL_NUMBER_OF_MOVIES_768;
    else return INITIAL_NUMBER_OF_MOVIES_1280;
  }

  function getNumberOfMoviesToAdd(screenWidth) {
    if (screenWidth < 1280) return NUMBER_OF_MOVIES_TO_ADD_768;
    else return NUMBER_OF_MOVIES_TO_ADD_1280;
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
