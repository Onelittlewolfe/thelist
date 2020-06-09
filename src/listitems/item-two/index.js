import React from 'react';
import { css } from 'emotion'
import gifOne from './four-blahs.gif';
import videoOne from './man.mp4';





const ItemTwo = () => {
  return( 
  <div className={
    css`
      display: flex;
      flex-wrap: no-wrap;
      flex-direction: row;
      position: absolute;
      overflow:hidden;
      width: 100vw;
      max-height: 100vh;
      
    `}>
    <div  className={
        css`
          position: relative;
          flex-grow: 1;
          height: 100%;
        `}>
      <img
      className={
        css`
        object-fit: cover;
        width: 100%;
        `}
      
      src={gifOne} alt="four blahs" />
    </div>      

    <div className={
        css`
          position: relative;
          
          height: 100%;
        `}>
      <video autoPlay muted loop>
      <source src={videoOne} type='video/mp4' /> 
      </video>  
    </div> 
  </div> );
}

export default ItemTwo;