/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';

class Square extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      set: false};
    this.color = 0;
    this.colors = [
        'rgb(89, 208, 92)','rgba(255, 0, 130,1)','rgba(136,125,230,1)'
    ]
    
  }

  componentDidMount(){
    this.color = this.props.color;
    this.setState({set: true})
  }

  componentDidUpdate() {
    this.color = this.props.color;
  }
  
  handleClick() {
    const i = this.colors.length;

    if ((this.color < i) && (this.color !== i-1)   ) {
        this.color++;
        this.props.action( {color: this.color, value: this.props.value});
    } else {
        this.color = 0
        this.props.action( {color: this.color, value: this.props.value});
    }
  }

 
render() {
  const SquareStyle = 
    css`
          box-sizing: border-box;
          width: 10%;
          height: 250px;
          opacity: 1;
          background-color: ${this.colors[this.color]};
          display: flex;
          animation: pulse .8s ease-in-out infinite alternate;
        
          @keyframes pulse {
            0% {opacity: 0.850}
            100% {opacity: 1}
          }

          @media screen and ( max-width: 740px) {
            width: 20%;
            height: 150px;
          }
    `

  const styles = [
    
    css`
          border: dashed 1px rgba(255,255,255, 0.3);
          `,

    css`
          border: dashed 1px rgba(0,0,0, 0.3);
          `,
  ]

  return(
    <div data-value={this.props.value} color={this.color} css={[styles[0], SquareStyle]} onClick={() => this.handleClick()}></div>
    )
  }
}

export default Square;