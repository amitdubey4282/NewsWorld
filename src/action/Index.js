export const  SAVE_NEWS = 'SAVE_NEWS';

export default function saveNews(news){
  return{
    type: SAVE_NEWS,
    news
  }
}