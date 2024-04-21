import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import './Hero.css';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Hero = ({ footballClubs }) => {
  const navigate = useNavigate(); // Corrected spelling
  function reviews(name){
    navigate(`/Reviews/${name}`); // Corrected function call
  }
  if (!footballClubs || footballClubs.length === 0) {
    // Return some loading indicator or message while data is being fetched
    return <p>No football data available</p>;
  }

  return (
    <div className='football-clubs-carousel-container'>
      <Carousel>
        {footballClubs.map((footballClub) => (
          <Paper key={footballClub.id}>
            <div className='football-club-card-container'>
              <div className='football-club-card' style={{ backgroundImage: footballClub.images && footballClub.images.length > 0 ? `url(${footballClub.images[0]})` : null }}>
 
                <div className='football-club-detail'>
                  <div className='football-club-logo'>
                    <img src={footballClub.logo} alt="logo image" />
                  </div>
                  <div className='football-club-name'>
                    <h4>{footballClub.name}</h4>
                    <div className='club-review-button-container'>
                        <Button variant="info" onClick={() => reviews(footballClub.name)}>Reviews</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Paper>
        ))}
      </Carousel>
    </div>
  );
}

export default Hero;
