import { SAVE_ALLSHOWS } from '../action/Index';
import { SEARCH_SHOWS } from '../action/Index';
//Comment Added By Amit
//New CommentAdded 
function handleShows(state = {}, action) {
  switch (action.type) {
    case SAVE_ALLSHOWS:
      return Object.assign({}, state, {
        allShows: action.shows
      });

    case SEARCH_SHOWS:
      return Object.assign({}, state, {
        searchedShows: action.shows
      });

    default:
      return state;
  }
}

export default handleShows;
