/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';



class Counter extends React.Component {
  constructor(props){
    super(props);

    this.props = props;
    this.span = React.createRef();
  }



  render() {
    const counterStyle = 
    css`
      position: absolute;
      z-index: 200;
      width: auto;
      height: auto;
      padding: .5em 1.5em;
      top: 1em;
      right: 2em;
      background-color: rgba(255,255,255,0.8);

      span {
        opacity: 1;
        display: inline-block;
        font-family: 'Fredoka One', cursive;
        font-size: 4em;
        font-weight: 700;
        color: gold;
        text-shadow: 2px 1px 3px rgba(0,0,0,0.8);
        tranisition: 1s all;
    
          -webkit-touch-callout: none; /* iOS Safari */
            -webkit-user-select: none; /* Safari */
             -khtml-user-select: none; /* Konqueror HTML */
               -moz-user-select: none; /* Old versions of Firefox */
                -ms-user-select: none; /* Internet Explorer/Edge */
                    user-select: none; /* Non-prefixed version, currently
                                          supported by Chrome, Edge, Opera and Firefox */
      }
    `
    return(
      <div className='counter' css={counterStyle}><span ref={this.span} >{this.props.total}</span></div>
    )
  }

}

export default Counter;