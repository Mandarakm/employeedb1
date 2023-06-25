import React from "react";
import "./card.css"
 const Card=props=>(
<div className="card-container">
    <span className="id" >{props.monster.id}</span>
    <img src={props.monster.avatar} alt="monsters"  />
<h2>{props.monster.first_name} {props.monster.last_name}</h2>
</div>)
export default Card