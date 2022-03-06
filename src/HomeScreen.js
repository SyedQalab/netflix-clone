import React from "react";
import Banner from "./Banner";

import "./homeScreen.css";
import Nav from "./Nav";
import requests from "./Requests";
import Row from "./Row";

const HomeScreen = () => {
  return (
    <div className="homeScreen">
      {/* navbar */}
      <Nav />

      {/* banner */}
      <Banner />
      {/* rows */}
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOrignals}
        isLargeRow
      />
      <Row title="Trendind Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComdeyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
};

export default HomeScreen;
