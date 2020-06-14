import React from 'react';
import { css } from 'emotion'
import gifOne from './four-blahs.gif';
import videoOne from './man.mp4';
import gilbertsPit from './gilberts-pit.gif';
import daisyEyes from './dasiy-eyes.gif';





const ItemTwo = () => {
  return( 
  <div className={
    css`
      display: flex;
      flex-wrap: no-wrap;
      flex-direction: row;
      position: relative;
      overflow:hidden;
      width: 100vw;
      height: auto;
      background-color: #000000;

      @media screen and ( max-width: 740px  )   {
        flex-direction: column;
      }
      
    `}>
    <div  className={
        css`
          display: flex;
          position: relative;
          flex-shrink: 1;
          height: auto;
          width: 40%;

          @media screen and ( max-width: 740px  )   {
            width: 100%; 
          }
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
      display: flex;
      flex-wrap: no-wrap;
      flex-direction: column;
      position: relative;
      overflow:hidden;
      width: 30%;
      height: auto;
      background-color: #000000;
      flex-shrink:0;

      @media screen and ( max-width: 740px  )   {
        width: 100vw;
        flex-direction: column;
      }
      
    `} >   
    <div className={
        css`
          display: flex;
          position: relative;
          width: 100%;
          height: 50%;
          overflow: hidden;
          @media screen and ( max-width: 740px  )   {
            width: 100%; 
            padding-bottom: 0%;
          }
        `}>
      <video className={
        css`
        object-fit: cover;
        width: 147%;
        top: -89px;
        left: 0;
        position: absolute;

        @media screen and ( max-width: 740px  )   {
          display: flex;
          position: relative;
          width: 100%; 
          padding-bottom: 0%;
          top: 0%;
        left: 0%;
        }
        `
      } 
      
      autoPlay muted loop>
      <source src={videoOne} type='video/mp4' /> 
      </video>  
    </div> 

      <div className={
          css `
            position: relative;
            width: 100%;
            height: 50%;
            @media screen and ( max-width: 740px  )   {
              display: flex;
              object-fit: cover;
              width: 100%; 
              padding-bottom: 0%;
            }
          `
        } >
        <img 
        className={
          css`
            position: relative;
            width: 100%;
            max-width: 100%;
            height: auto;
          `
        }
        src={gilbertsPit} alt="Gilberts pit" />
      </div>

       

      </div>

      <div  className={
        css`
          display: flex;
          position: relative;
          height: auto;
          width: 49%;
          flex-shrink: 1;
          overflow: hidden;

         

          @media screen and ( max-width: 740px  )   {
            width: 100%; 
          }
        `}>
      <img
      className={
        css`
        width: 100%;
        object-fit: cover;
        top: 0;
        left: 0;
        `}
      
      src={daisyEyes} alt="four blahs" />
    </div>   


  </div> );
}

export default ItemTwo;