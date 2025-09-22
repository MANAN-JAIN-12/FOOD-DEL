import React from 'react'
import './ExploreMenu.css'
import {menu_list} from '../assets/frontend_assets/assets'
const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id="explore-menu">
      <h2>Explore Our Menu</h2>
      <p  className='explore-menu-text'>Discover a variety of delicious dishes crafted with the freshest ingredients.</p>
      <div className="explore-menu-list">
        {menu_list.map((item,index) => {
          return(
            <div className="explore-menu-item" key={index} onClick={(prev) => prev===item.menu_name?setCategory("All"):setCategory(item.menu_name)} style={category===item.menu_name?{borderBottom:"2px solid #ff4d30",color:"#ff4d30"}:{borderBottom:"none",color:"#000"}}>
              <img className={category===item.menu_name?"active":""} src={item.menu_image} />
              <p>{item.menu_name}</p>
            </div>
          )
})}
        </div>
        <hr />
  
    </div>
  )
}

export default ExploreMenu
