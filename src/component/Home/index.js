import React from 'react';
import './Home.css';
import {connect} from 'react-redux';
import HomeScreen from './HomeScreen';
import AuthHomeScreen from './AuthHomeScreen';


const Home = ({isAuth}) => {
  return(
    <div className="home">
      {isAuth ? <AuthHomeScreen/> : <HomeScreen/>}
    </div>
  )
}

const mapStateToProps = state =>({
  isAuth: state.authReducer.isAuthenticated
})

export default connect(mapStateToProps)(Home);