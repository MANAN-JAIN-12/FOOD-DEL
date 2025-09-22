import  { useContext } from "react";
import "./FoodItem.css";

import { assetsFrontend } from "../../assets/frontend_assets/assets";
import { StoreContext } from "../../Context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {

    const{cartItem,addToCart,removeToCart}=useContext(StoreContext);
  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-img" src={image} />
        {
            !cartItem[id]? <img className="add" src={assetsFrontend.add_icon_white} alt="" onClick={() => addToCart(id)} /> :
            <div className="food-item-counter">
                <img src={assetsFrontend.remove_icon_red} alt="" onClick={() => removeToCart(id)} />
                <span>{cartItem[id]}</span>
                <img src={assetsFrontend.add_icon_green} alt="" onClick={() => addToCart(id)} />
            </div>
        }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assetsFrontend.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{description} </p>
        <p className="food-item-price">₹ {price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
