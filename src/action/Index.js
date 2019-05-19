export const SAVE_ALLSHOWS = 'SAVE_ALLSHOWS';
export const SEARCH_SHOWS = 'SEARCH_SHOWS';
//Change BY Amit
/*export default function saveNews(news){
  return{
    type: SAVE_NEWS,
    news
  }
} */

export  default function saveAllShows() {
  return dispatch => {
    fetch('http://api.tvmaze.com/shows')
      .then(response => response.json())
      .then(shows => {
        dispatch({ type: SAVE_ALLSHOWS, shows });
      });
  };
}

export function searchShows(query) {
  return dispatch => {
    fetch('http://api.tvmaze.com/search/shows?q=' + query + '')
      .then(response => response.json())
      .then(shows => {
        dispatch({ type: SEARCH_SHOWS, shows });
      });
  };
}
