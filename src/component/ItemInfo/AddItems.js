import React from 'react';
import {TextField, FormControl, InputLabel, Select, MenuItem,
        withStyles, Button } from '@material-ui/core';
import {uom} from '../../constants/uom';
import {addItems, updateItems} from '../../actions/shopActions';
import {connect} from 'react-redux';

class AddItems extends React.Component {
  state = {
    id: null,
    item_name: '',
    brand:'',
    list_price:'',
    uom:'',
    discount:''
  }

  componentDidMount(){
    const {item} = this.props;
    if(item){
      this.setState({id:item.id, item_name:item.item_name, brand:item.brand, list_price:item.list_price,
                     uom:item.uom, discount:item.discount})
    }
  }

  onSubmit = () =>{
    if (this.props.item){
      this.props.updateItems(this.state, this.props.item.id)  
    }else{
      this.props.addItems(this.state)
    }
    this.props.closeScr()
  }

  render(){
    const {classes} = this.props;

    return (
      <div className="additems">
        {this.props.item ? <h3>Edit Items</h3>:  <h3>Add Items</h3>}
        <div className="additems__inp">
          <div>
            <TextField
              label = 'Product Name'
              value = {this.state.item_name}
              onChange = {(e)=> this.setState({item_name:e.target.value})}
            />
          </div>
          <div>
            <TextField
              label = 'Brand Name'
              value = {this.state.brand}
              onChange = {(e)=> this.setState({brand:e.target.value})}
            />
          </div>
          <div>
            <TextField
              label = 'Price'
              type = 'number'
              value = {this.state.list_price}
              onChange = {(e)=> this.setState({list_price:e.target.value})}
            />
          </div>
          <div>
          <FormControl className={classes.formControl}>
            <InputLabel id='cat-inp'>Unit of Measure</InputLabel>
            <Select
              labelId="cat-inp"
              value = {this.state.uom}
              onChange = {(e)=> this.setState({uom:e.target.value})}
            >
              {uom.map(unit=>(
                <MenuItem value={unit.value}>{unit.label}</MenuItem>
                )
                )}
            </Select>
          </FormControl>
          </div>
          <div>
            <TextField
              label = 'Discount'
              type = 'number'
              value = {this.state.discount}
              onChange = {(e)=> this.setState({discount:e.target.value})}
            />
          </div>

          <Button variant="contained" color="primary" className={classes.btnStyles}
              onClick={()=> this.onSubmit()}>
           {this.props.item ? "Edit Item" :  "AddItem"}
          </Button>
        </div>
      </div>
    )
  }
}

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
  },
  formControl: {
    width: 205,
  }
})

export default connect(null, {addItems, updateItems})(withStyles(styles)(AddItems));
