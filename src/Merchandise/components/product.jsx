import React from "react";

export function Products(props) {
  
  return (
    <div  className="productList">
      <div  className="productCard">
      <div className="img-contain">
      <i class="fa-solid fa-cart-shopping"></i>
          <img
            src={props.image}
            alt="product-img"
            className="productImage"
          ></img>
        </div>
      </div>
    </div>
  );
}
