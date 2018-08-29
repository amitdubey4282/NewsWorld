import { SAVE_NEWS } from '../action/Index';

function newsHandling(state = {}, action) {
  switch (action.type) {
    case SAVE_NEWS:
      return Object.assign({}, state, {
        newsdata: action.news
      });
    default:
      return state;
  }
}

export default newsHandling;
