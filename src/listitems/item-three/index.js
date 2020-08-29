import React from 'react';
import { css } from 'emotion';
import beardHead from './beard-head.gif';
import happySad from './happy-sad-ghost.gif';
import theDoc from './doc.gif';



const ItemThree = () => {
  return( 
  <div className={
    css`
      display: flex;
      position: relative;
      width: 100%;
      height: auto;
      flex-direction: row;

      @media screen and (max-width: 740px) {
        flex-direction: column;
      }
    `
  }>

    <img className={
    css`
      display: flex;
      object-fit: cover;
      position: relative;
      width: 33.3%;
      height: 100vh;

      @media screen and (max-width: 740px) {
        width: 100%;
      }
    `
  }  src={beardHead} alt="beard on a head" />
    <img className={
    css`
      display: flex;
      object-fit: cover;
      position: relative;
      width: 33.3%;
      height: 100vh;
      @media screen and (max-width: 740px) {
        width: 100%;
      }
    `
  } src={happySad} alt="A happy sad Ghost" />
    <img className={
    css`
      display: flex;
      object-fit: cover;
      position: relative;
      width: 33.3%;
      height: 100vh;
      @media screen and (max-width: 740px) {
        width: 100%;
      }
    `
  } src={theDoc} alt="The Doc" />
  

  </div> );
}

export default ItemThree;