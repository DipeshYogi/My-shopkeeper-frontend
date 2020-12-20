import React from 'react';
import './Profile.css';
import {connect} from 'react-redux';
import {TextField, Button, withStyles} from '@material-ui/core';
import {updateProfile} from '../../actions/profileActions';

class Profile extends React.Component {
  state = {
    id:'',
    name:'',
    email:'',
    phone:''
  }
  
  componentDidMount(){
    if(this.props.userdata){
      const {id, name, email, phone} = this.props.userdata;
      this.setState({id:id, name:name, email:email, phone:phone})
    }
  }

  onSubmit = () =>{
    this.props.updateProfile(this.state)
  }

  render(){
    const {classes} = this.props;
    return (
      <div className="profile">
        <h3>Profile page</h3>
        <div className="profile__info">
          <div>
            <TextField
              label = 'User Name'
              value = {this.state.name}
              onChange = {(e)=> this.setState({name:e.target.value})}
            />
          </div>
          <div>
            <TextField
              label = 'Email'
              value = {this.state.email}
              onChange = {(e)=> this.setState({email:e.target.value})}
            />
          </div>
          <div>
            <TextField
              label = 'Phone'
              value = {this.state.phone}
              onChange = {(e)=> this.setState({phone:e.target.value})}
            />
          </div>

          <Button variant="contained" color="primary" className={classes.btnStyles}
              onClick={()=> this.onSubmit()}>
           Update Profile
          </Button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userdata: state.authReducer.userdata
})

const styles = () => ({
  btnStyles:{
    height: 35,
    width:205,
    fontSize:12,
    backgroundColor:'#D2452D',
    "&:hover":{
        backgroundColor:'#D2452D'
    },
    marginTop:30
  }
})

export default connect(mapStateToProps, {updateProfile})(withStyles(styles)(Profile));

