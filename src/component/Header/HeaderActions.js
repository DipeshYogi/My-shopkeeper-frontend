import React from 'react';
import {useHistory} from 'react-router-dom';
import './Header.css';
import {loginUser} from '../../actions/authActions';
import {Button, makeStyles} from '@material-ui/core';


export const HeaderActions = () =>{
  const classes = useStyles();
  const history = useHistory();

  return(
    <div className="header__actions">
      <Button
      className={classes.btnStyle}
      onClick={()=>history.push('/login')}>
        Login
      </Button>
      <Button 
        className={classes.btnStyle}
        onClick = {()=> history.push('/register')}
      >
        Register
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

export default HeaderActions;