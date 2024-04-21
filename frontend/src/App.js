// App.js

import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import api from './api/axiosConfig';
import Layout from './components/Layout';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Reviews from './components/reviews/Reviews';
import './App.css';

function App() {
  const [footballClubs, setFootballClubs] = useState([]);
  const [reviews, setReviews] = useState([]);

  const getClubs = async () => {
    try {
      const response = await api.get("/api/v1/football");
      setFootballClubs(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getClubData = async (name) => {
    try {
      const response = await api.get(`/api/v1/football/${name}`);
      const singleClub = response.data;
      setReviews(singleClub.reviews || []); // Initialize reviews as an empty array if no reviews are available
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getClubs();
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home footballClubs={footballClubs} />} />
          <Route path="/Reviews/:name" element={<Reviews getClubData={getClubData} footballClubs={footballClubs} reviews={reviews} setReviews={setReviews} setFootballClubs={setFootballClubs} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
