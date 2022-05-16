import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { useLocation } from "react-router-dom"
// import {useNavigate } from "react-router-dom"
import {MovieState} from '../MovieState'

function MovieDetail() {

  const location = useLocation();
  const url = location.pathname;
  console.log(url);
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(movies[0]);

  useEffect(() => {
    const currentMovie = movies.filter((movie) => movie.url === url);
    setMovie(currentMovie[0]);
    
  }, [movies, url]);
  console.log(movie);
  return (
    <Details>
      <HeadLine>
        <h2>{movie.title}</h2>
        <img src={movie.mainImg} alt="" />
      </HeadLine>

      
      <Awards>
         {movie.awards.map((award)=>(
           <Award title={award.title} description={award.description} key={award.title}/>
         ))}
      </Awards>

      <ImageDisplay>
            <img src={movie.secondaryImg} alt="movie" />
          </ImageDisplay>
    </Details>
  )
}

const Details = styled.div`
  color: white;
`;

const HeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 2rem 3rem;
  align-items: center;
  justify-content: space-between;
`;

const AwardStyle = styled.div`
  padding: 3rem;
  h3 {
    font-size: 1.7rem;
    font-weight: lighter;
  }
  .line {
    width: 90%;
    background-color: #23d997;
    height: 0.4rem;
    margin: 1rem 0rem;
  }
`;

const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;


const Award = ({ title, description }) => {
  return (
    <AwardStyle>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </AwardStyle>
  );
};

export default MovieDetail