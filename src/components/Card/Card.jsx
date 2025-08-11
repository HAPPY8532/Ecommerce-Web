import React from "react";

import style from "./Card.module.css";
import { useNavigate } from "react-router-dom";
function Card() {

    const navigate = useNavigate();

    const handleClick = (item) =>{
        navigate(`../product/${item}`)
    }
  return (
    <>
      <div className="container">
        <div className={style.boxes}>
          <div className={`${style.card} ${style.box1}`}>
            <h3><span>#</span>men's shoes!!</h3>
            <button className="primary" onClick={() => handleClick("mens-shoes")}>Buy now</button>
          </div>
          <div className={`${style.card} ${style.box2}`}>
            <h3><span>#</span> beauty products!!</h3>
            <button className="primary" onClick={() => handleClick("beauty")}>Buy now</button>
          </div>
          <div className={`${style.card} ${style.box3}`}>
            <h3> <span>#</span> for mens'!!</h3>
            <button className="primary" onClick={() => handleClick("mens-shirts")}>Buy now</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
