import React from 'react';
import { css } from 'emotion'
import videoOne from './trees.mp4';

const ItemOne = () => {
  return( 
  <div>
    <div  className={
        css`
          position: relative;
          overflow:hidden;
          width: 100vw;
          height: 60vh;
          
        `}>
      <video className={
        css`
          position: absolute;
          top: -280px;
          left: 0;
          width: 100%;
          height: auto;
        `
      } width='100%' height='100%' muted autoPlay loop>
        <source src={videoOne} type='video/mp4' /> 
      </video>
    </div>
  </div> );
 
}

export default ItemOne;