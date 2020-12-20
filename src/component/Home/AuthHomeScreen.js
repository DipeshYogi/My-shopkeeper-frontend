import React from 'react';
import {useHistory} from 'react-router-dom';
import './Home.css';
import ListAltIcon from '@material-ui/icons/ListAlt';
import AddBoxIcon from '@material-ui/icons/AddBox';
import EditIcon from '@material-ui/icons/Edit';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import {makeStyles, Button} from '@material-ui/core';


const AuthHomeScreen = () => {
  const classes = useStyles();
  const history = useHistory();
  return(
  <div className="auth__info">
    <div className="auth__content">
      <div className="auth__items">
      <Button 
        className={classes.btnStyle}
        onClick={()=> history.push('/shop-info')}>
        <div>
          <h3>Shop Info</h3>
          <ListAltIcon className={classes.iconStyle}/>
        </div>
      </Button>
      </div>
      <div className="auth__items">
      <Button 
        className={classes.btnStyle}
        onClick={() => history.push('/item-info')}>
        <div>
          <h3>Manage Items</h3>
          <AddBoxIcon className={classes.iconStyle}/>
        </div>
      </Button>
      </div>
      <div className="auth__items">
      <Button className={classes.btnStyle}>
        <div>
          <h3>Manage Orders</h3>
          <EditIcon className={classes.iconStyle}/>
        </div>
      </Button>
      </div>
      <div className="auth__items">
      <Button 
        className={classes.btnStyle}
        onClick={() => history.push('/profile')}>
        <div>
          <h3>Edit Profile</h3>
          <AccountBoxIcon className={classes.iconStyle}/>
        </div>
      </Button>
      </div>
    </div>
  </div>
  )
}

const useStyles = makeStyles({
  iconStyle:{
    fontSize:100
  },
  btnStyle:{
    width: "100%",
    height: "100%"
  }
})

export default AuthHomeScreen;