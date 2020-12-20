import React, {useState, useEffect} from 'react';
import './ItemInfo.css';
import AddItems from './AddItems';
import {Button, Dialog, makeStyles} from '@material-ui/core';
import {getItems, deleteItems} from '../../actions/shopActions';
import {connect} from 'react-redux';

const ItemInfo = ({getItems, deleteItems, items}) => {
  const [addScr, setAddScr] = useState(false);
  const [editScr, setEditScr] = useState(false);
  const [editItm, setEditItm] = useState();

  useEffect(()=>{
    getItems()
  },[])

  const closeAddScr = () => {
    setAddScr(false)
    setEditScr(false)
  }

  const onEditClick = (itm) =>{
    setEditItm(itm)
    setEditScr(true)
  }

  const classes = useStyles()

  return(
    <div>
      <h3 className="title">Manage Items</h3>
      <div className="item">
        <div className="item__header">
          <Button 
            variant='outlined'
            onClick={()=> setAddScr(true)}>Add Items</Button>
        </div>
        <div className="item__cnt">
          {items.sort((a,b) => (b.id - a.id)).map(itm => (
            <div className="item__content">
              <div className="item__content__name">
                <p>{itm.item_name}</p>
              </div>
              <div className="item__content__brand">
                <p>Brand:</p>
                <p>{itm.brand}</p>
              </div>
              <div className="item__content__brand">
                <p>UOM:</p>
                <p>{itm.uom}</p>
              </div>
              <div className="item__content__brand">
                <p>Price:</p>
                <p>{itm.list_price}</p>
              </div>
              <div className="item__content__brand">
                <p>Discount:</p>
                <p>{itm.discount}</p>
              </div>

              <div className="item__content__btn">
                <Button 
                  variant='outlined'
                  size = 'small'
                  className={classes.btnStyle}
                  onClick={() => onEditClick(itm)}>Edit Item
                </Button>
                <Button 
                  variant='outlined'
                  size = 'small'
                  className={classes.btnStyle}
                  onClick={() => deleteItems(itm.id)}
                  >Delete Item
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Dialog
        open={addScr}
        onClose={()=>setAddScr(false)}
      >
        <AddItems closeScr={closeAddScr}/>
      </Dialog>

      <Dialog
        open={editScr}
        onClose={()=>setEditScr(false)}
      >
        <AddItems item={editItm} closeScr={closeAddScr}/>
      </Dialog>
    </div>
  )
}

const useStyles = makeStyles({
  btnStyle :{
    backgroundColor: '#D2452D',
    color: '#FFFF',
    "&:hover":{
        backgroundColor:'#D2452D'
    },
    fontSize:10,
    fontFamily:'Sora',
    height: 25,
    marginLeft:2
  }
})


const mapStateToProps = state => ({
  items: state.shopReducer.shop_items
})

export default connect(mapStateToProps, {getItems, deleteItems})(ItemInfo);