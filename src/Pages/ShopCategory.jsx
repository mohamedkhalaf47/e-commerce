import React, { useContext } from 'react'
import './CSS/shopcategory.css'
import { ShopContext } from "../Context/ShopContext";
import sort from '../Components/Assets/dropdown_icon.png'
import Items from '../Components/Items/Items';

const ShopCategory = (props) => {
  const {all_pro} = useContext(ShopContext)
  return (
    <div className='shop-category'>
      <img className='shop-category-banner' src={props.banner} alt="" />
      <div className='shopcategory-indexsort'>
        <p>
          <span>Showing 1-12</span> Out Of 36 Products
        </p>
        <div className='shopcategory-sort'>
          Sort By <img src={sort} alt="" />
        </div>
      </div>
      <div className='shopcategory-products'>
        {all_pro.map((item,i) => {
          if(props.category === item.category){
            return <Items 
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
            />
          } else{
            return null
          }
        })}
      </div>
      <div className='shopcategory-loadmore'>
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory
