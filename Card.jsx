import React from "react";
import "./Card.css"

 export const Card = ({
    imgsrc,
    imgAlt,
    title,
    description,
    buttonText,
    link,

 }) => {
  return (
    <div className="card-container">
    {imgsrc && imgAlt && (
    <img src={imgsrc} alt={imgAlt} className="card-img"/>
    )}
    {title && <h1 className="card-title">{title}</h1>}
    {description &&  <p className="card-description">{description}</p>}
    {buttonText && link && ( 
  <a href={link} className="card-btn">
    {buttonText}
    </a>
    )}
  </div>
  );
};





