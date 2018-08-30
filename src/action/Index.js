export const  SAVE_NEWS = 'SAVE_NEWS';

/*export default function saveNews(news){
  return{
    type: SAVE_NEWS,
    news
  }
} */


export  default  function saveNews (){

  return (dispatch)=> {

    fetch(
      'http://api.nytimes.com/svc/topstories/v2/home.json?api-key=52512f75704c4b7f853eac0646de1e5c'
    )
      .then(response => response.json())
      .then(news => { dispatch({type: SAVE_NEWS,news})});
    
  }
}


