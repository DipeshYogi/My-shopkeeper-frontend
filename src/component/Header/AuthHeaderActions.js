import React from 'react';
import {useHistory} from 'react-router-dom';
import './Header.css';
import {logoutUser} from '../../actions/authActions';
import {Button, makeStyles} from '@material-ui/core';
import {connect} from 'react-redux';

export const AuthHeaderActions = ({logoutUser, userdata}) =>{
  const classes = useStyles();
  const history = useHistory();
  return(
    <div className="header__actions">
      <p>Welcome {userdata.name} </p>
      <Button
       className={classes.btnStyle}
       onClick = {() => history.push('/profile') }
      >
        Profile
      </Button>  
      <Button
      className={classes.btnStyle}
      onClick={()=>logoutUser()}>
        Logout
      </Button>
  </div>
  )
}

const useStyles = makeStyles({
  btnStyle:{
    color: '#ffff',    
    fontFamily: 'Roboto'
  }
})

const mapStateToProps = state => ({
  userdata: state.authReducer.userdata
})

export default connect(mapStateToProps,{logoutUser})(AuthHeaderActions);