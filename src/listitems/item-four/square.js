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
        'red','blue','teal'
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
          width: 10%;
          height: 250px;
          background-color: ${this.colors[this.color]};
          display: flex;
    `
  return(
    <div data-value={this.props.value} color={this.color} css={SquareStyle} onClick={() => this.handleClick()}></div>
  )
}
  
}

export default Square;