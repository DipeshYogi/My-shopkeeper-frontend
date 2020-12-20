import React from 'react';
import {useHistory} from 'react-router-dom';
import './Header.css';
import {makeStyles, Button} from '@material-ui/core';
import {connect} from 'react-redux';
import HeaderActions from './HeaderActions';
import AuthHeaderActions from './AuthHeaderActions';

const Header = ({isAuth}) => {
  const history = useHistory()
  return(
    <div className="header">
      <Button onClick={()=> history.push('/')}>
        <h3 className="header__title">ShopKeeperApp</h3>
      </Button>
      {isAuth ? <AuthHeaderActions/> : <HeaderActions/>}
    </div>
  )
}

const useStyles = makeStyles({
  btnStyle:{
    color: '#ffff',    
    fontFamily: 'Roboto'
  }
})

const mapStateToProps = state =>({
  isAuth: state.authReducer.isAuthenticated
})

export default connect(mapStateToProps)(Header);