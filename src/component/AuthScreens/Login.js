import React from 'react';
import TextField from '@material-ui/core/TextField';
import './AuthScreens.css';
import {withStyles, Button} from '@material-ui/core';
import {loginUser} from '../../actions/authActions';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';


class Login extends React.Component{
  state = {
    email: '',
    pass1:'',
  }   

  onSubmit = () =>{
      const {email, pass1} = this.state;
      this.props.loginUser(email, pass1)
  }

  render(){
    const {classes} = this.props;

    if(this.props.isAuthenticated){
      return <Redirect to='/' />
    }else{
    return(
      <div className="register">
        <h3>Login</h3>
        <div>
          <TextField
            label='Email'
            value={this.state.email}
            onChange = {e=>this.setState({email:e.target.value})}
            InputProps={{
              className:classes.inputStyle
            }}
          />
        </div>

        <div>
          <TextField
            label='Password'
            type = 'password'
            value={this.state.pass1}
            onChange = {e=>this.setState({pass1:e.target.value})}
            InputProps={{
              className:classes.inputStyle
            }}
          />
        </div>

        <Button variant="contained" color="primary" className={classes.btnStyles}
              onClick={()=> this.onSubmit()}>
           Login
        </Button>

      </div>
    )}
  }
}

const styles = () => ({
  inputStyle:{
    height:30,
    width:300,
    fontSize:16,
    fontFamily:'Sora',
    marginBottom:5
  },
  btnStyles:{
    height: 35,
    width:300,
    fontSize:12,
    backgroundColor:'#D2452D',
    "&:hover":{
        backgroundColor:'#D2452D'
    },
    marginTop:30
  }
})

const mapStateToProps = state => ({
  isAuthenticated: state.authReducer.isAuthenticated
})

export default connect(mapStateToProps, {loginUser})(withStyles(styles)(Login));