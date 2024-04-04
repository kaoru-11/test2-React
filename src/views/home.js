import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>test_2</title>
        <meta property="og:title" content="test_2" />
      </Helmet>
      <div className="home-container1"></div>
      <img alt="image" src="/ariya-200h.jpg" className="home-image" />
    </div>
  )
}

export default Home
