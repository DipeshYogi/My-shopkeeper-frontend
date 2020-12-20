import React from 'react';
import TextField from '@material-ui/core/TextField';
import './AuthScreens.css';
import {withStyles, Button} from '@material-ui/core';
import {registerUser} from '../../actions/authActions';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';


class Register extends React.Component{
  state = {
    username:'',
    email: '',
    phno:'',
    pass1:'',
    pass2:'',
    nameMsg: '',
    emailMsg: '',
    phnoMsg: '',
    passMsg: '',
  }

  reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  onSubmit=()=>{
      const { access, username, email, phno, pass1, pass2 } = this.state;
      let isnum = /^\d+$/.test(phno);
      let errFlag = false

      if(username.length===0){
          this.setState({nameMsg:"Invalid username"})
          errFlag = true
      }else{
          this.setState({nameMsg:""})
      }

      if(this.reg.test(email) === false){
          this.setState({emailMsg:"Invalid email"})
          errFlag = true
      }else{
          this.setState({emailMsg:""})
      }

      if(!isnum || phno.length<10 || phno.length>12){
          this.setState({phnoMsg:"Invalid mobile number"})
          errFlag = true
      }else{
          this.setState({phnoMsg:""})
      }

      if(pass1!==pass2 && pass1.length!==0){
          this.setState({passMsg:"Passwords do not match"})
          errFlag = true
      }else if(pass1.length<5){
          this.setState({passMsg:"Set a strong password"})
          errFlag = true
      }else{
          this.setState({passMsg:""})
      }

      const{ nameMsg, emailMsg, phnoMsg, passMsg } = this.state;
      const newUser = { access, email, phno, username, pass1 }

      if(errFlag === false){
          this.props.registerUser(newUser)
      }
    }   

  render(){
    const {classes} = this.props;

    if(this.props.isRegistered){
      return <Redirect to='/login' />
    }else{
    return(
      <div className="register">
        <h3>Register</h3>
        <div>
          <TextField
            label='UserName'
            value={this.state.username}
            onChange = {e=>this.setState({username:e.target.value})}
            InputProps={{
              className:classes.inputStyle
            }}
          />
          {this.state.nameMsg.length>0?<p className="errorStyles">{this.state.nameMsg}</p>:null}
        </div>

        <div>
          <TextField
            label='Email'
            value={this.state.email}
            onChange = {e=>this.setState({email:e.target.value})}
            InputProps={{
              className:classes.inputStyle
            }}
          />
          {this.state.emailMsg.length>0?<p className="errorStyles">{this.state.emailMsg}</p>:null}
        </div>

        <div>
          <TextField
            label='Phone'
            value={this.state.phno}
            onChange = {e=>this.setState({phno:e.target.value})}
            InputProps={{
              className:classes.inputStyle
            }}
          />
          {this.state.phnoMsg.length>0?<p className="errorStyles">{this.state.phnoMsg}</p>:null}
        </div>

        <div>
          <TextField
            label='Password1'
            type = 'password'
            value={this.state.pass1}
            onChange = {e=>this.setState({pass1:e.target.value})}
            InputProps={{
              className:classes.inputStyle
            }}
          />
        </div>

        <div>
          <TextField
            label='Password2'
            type = 'password'
            value={this.state.pass2}
            onChange = {e=>this.setState({pass2:e.target.value})}
            InputProps={{
              className:classes.inputStyle
            }}
          />
          {this.state.passMsg.length>0?<p className="errorStyles">{this.state.passMsg}</p>:null}
        </div>

        <Button variant="contained" color="primary" className={classes.btnStyles}
              onClick={()=> this.onSubmit()}>
           Register
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
  isRegistered: state.authReducer.isRegistered
})

export default connect(mapStateToProps, {registerUser})(withStyles(styles)(Register));