/** @jsx jsx */
import React from "react";
import {css, jsx} from "@emotion/core";

const modalStyle = css`
      position: absolute;
      display: flex;
      width: 100%;
      height: 100%;
      z-index: 900;
      justify-content: center;
      align-items: center;

      h1 {
        font-size: 6rem;
        color: gold;
        margin: 0 0 0 0;
      }

      section {
        display: flex;
        flex-direction: column;
        height: auto;
        padding: 1em 2em;
        background-color: rgba(255,255,255, 0.9);
        text-align: center;
        margin-top: auto;
        margin-bottom: auto;
        margin-left: auto;
        margin-right: auto;
      }

      button {
        background-color: red;
        border: none;
        padding: .6rem .5rem;
        color: #fff;
      }
`;

const Modal = (props) => {

  function handleClick() {
    props.action();
  }

  return(
    <div css={modalStyle} >
      <section >
        <h1>{props.total}</h1>
        <p>Well done</p>
        <button onClick={ handleClick }>Keep going?</button>
      </section>
    </div>
  )
};

export default Modal;