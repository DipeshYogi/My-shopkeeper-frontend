import React from 'react';
import './Home.css';

const HomeScreen = () => {
  return(
  <div className="home__content">
    <h2>Welcome!</h2>
    <div>
      <h3>Register to start with your profile</h3>
    </div>
    <h3> OR </h3>
    <div>
      <h3>Login to manage your products</h3>
    </div>
  </div>
  )
}

export default HomeScreen;