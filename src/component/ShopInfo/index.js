import React from 'react';
import TextField from '@material-ui/core/TextField';
import './ShopInfo.css';
import {withStyles, Button, Select, MenuItem, InputBase,
        InputLabel, FormControl, Checkbox, FormControlLabel} from '@material-ui/core';
import {getCategories, setShopInfo, getShopInfo, updateShopInfo} from '../../actions/shopActions';
import {connect} from 'react-redux';


class ShopInfo extends React.Component{
  state = {
    shop_name: '',
    category:'',
    is_verified: false,
    free_delivery: false,
    baggit_support: false
  }   

  componentDidMount(){
    this.props.getCategories()
    this.props.getShopInfo()
  }

  componentDidUpdate(prevProps, prevState){
    if (prevProps.shop_info !== this.props.shop_info && this.props.shop_info.data.ShopInfo){
      const {shop_name, category, is_verified, free_delivery, baggit_support} = this.props.shop_info.data.ShopInfo;
      this.setState({shop_name: shop_name, category:category, is_verified:is_verified,
                      free_delivery:free_delivery, baggit_support:baggit_support})
    }
  }

  onSubmit = () =>{
    const shop_data = this.state;
    if(this.props.shop_info.data.ShopInfo){
      this.props.updateShopInfo(shop_data)
    }else{
      this.props.setShopInfo(shop_data)
    }
  }

  render(){
    const {classes} = this.props;

    return(
      <div className="shopinfo">
        <h3>Shop Info</h3>
        <div>
          <TextField
            label='Shop Name'
            value={this.state.shop_name}
            onChange = {e=>this.setState({shop_name:e.target.value})}
            InputProps={{
              className:classes.inputStyle
            }}
          />
        </div>

        <div>
        <FormControl className={classes.formControl}>
          <InputLabel id='cat-inp'>Category</InputLabel>
          <Select
            labelId="cat-inp"
            id="demo-simple-select"
            value={this.state.category}
            onChange={e=>this.setState({category:e.target.value})}
          >
            {this.props.categories.data.map(cat=>(
              <MenuItem value={cat.cat_name}>{cat.cat_name}</MenuItem>
              )
              )}
          </Select>
          </FormControl>
        </div>
        
        <div>
          <div>
            <FormControlLabel
              control={
                <Checkbox
                checked = {this.state.baggit_support}
                onChange = {(e)=> this.setState({baggit_support:!this.state.baggit_support})}
                />
              }
              label = 'Baggit Support'
            />
          </div>
          <div>
            <FormControlLabel
              control={
                <Checkbox
                checked = {this.state.is_verified}
                onChange = {(e)=> this.setState({is_verified: !this.state.is_verified})}
                />
              }
              label = 'Is Verified'
            />
          </div>

          <div>
            <FormControlLabel
              control={
                <Checkbox
                checked = {this.state.free_delivery}
                onChange = {(e)=> this.setState({free_delivery: !this.state.free_delivery})}
                />
              }
              label = 'Free Delivery'
            />
          </div>
        </div>

        <Button variant="contained" color="primary" className={classes.btnStyles}
              onClick={()=> this.onSubmit()}>
           Update
        </Button>

      </div>
    )
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
  },
  formControl: {
    width: 300,
  }
})

const mapStateToProps = state => ({
  categories: state.shopReducer.categories,
  shop_info: state.shopReducer.shop_info
})


export default connect(mapStateToProps, {getCategories, setShopInfo, getShopInfo, updateShopInfo})
               (withStyles(styles)(ShopInfo));