import React ,{useRef,useEffect,useState}from 'react'
import './TitileCards.css'
import cards_data from "../../assets/cards/Cards_data"
import {Link} from 'react-router-dom'


function TitileCards({title,category}) {
  const [apiData,setApiData] = useState([]);

  const cardsRef = useRef();
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDliNTNlY2ZjYTg0Njg2OGIyMzI5OTlmYmJiMzI4NiIsIm5iZiI6MTcyODM2MjQ2OC44ODgyMTUsInN1YiI6IjY3MDRiNGUyOThkZjhlYTAxNTFkMzk4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WuJbM9se1K6D2v2JTiyX_P5Yx9G84_Yg9Y-X2j297wU'
    }
  };
  
 

const handleWheel = (event)=>{
  event.preventDefault();
  cardsRef.current.scrollLeft += event.deltaY;
}
useEffect(( )=>{

  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(response => response.json())
  .then(response => setApiData(response.results))
  .catch(err => console.error(err));


cardsRef.current.addEventListener('wheel',handleWheel);
},[])

  return (
    <div className="TitileCards">
      <h2>{title?title :"Popular On Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card,index)=>{
          return <Link to={`/player/${card.id}`} className="card" key ={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+ card.backdrop_path}/>
            <p>{card.original_title}</p>
            </Link>
        })}
      </div>
    </div>
  )
}

export default TitileCards