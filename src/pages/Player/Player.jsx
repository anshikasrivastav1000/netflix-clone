import React, {useEffect,useState} from 'react'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import './Player.css'
import {  useParams,useNavigate}  from  'react-router-dom';
function Player() {
  const {id} = useParams();
  const navigate =useNavigate();

  const [apiData,setApiData]= useState({
    name:'',
    key:'',
    published_at:'',
    typeof:''
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDliNTNlY2ZjYTg0Njg2OGIyMzI5OTlmYmJiMzI4NiIsIm5iZiI6MTcyODM5NjI1OS44MTc4OTksInN1YiI6IjY3MDRiNGUyOThkZjhlYTAxNTFkMzk4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4eBDRix_nfivu2DYIlNKY2kqPg40W_fSV5GxxUOKzGU'
    }
  };
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results[0]))
    .catch(err => console.error(err));
  },[])
  
  
  return (
    <div className="player">
      <img src={back_arrow_icon} onClick={()=>{navigate(-2)}}/>
      
    <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameBorder='0' allowFullScreen></iframe>
    <div className="player-info">
    <p>{apiData.published_at.slice(0,10)}</p>
    <p>{apiData.name}</p>
    <p>{apiData.typeof}</p>
    </div>
    </div>
  )
}

export default Player;