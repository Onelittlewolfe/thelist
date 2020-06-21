/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';


class Square extends React.Component {
  constructor(props){
    super(props);
    this.state = { color: 0};
    
    this.colors = [
        'red','blue','teal'
    ]
    
  }

  componentDidMount(){
    this.setState({color: this.props.color})
  }
  
  handleClick() {
    const i = this.colors.length;

    if ((this.state.color < i) && (this.state.color !== i-1)   ) {
      this.setState({ color : 
        this.state.color + 1
      });
    } else {
      this.setState({ color : 
        0
      });
    }
    this.props.action( {color: this.state.color, value: this.props.value});
  }

 
render() {
  const SquareStyle = 
    css`
          width: 200px;
          height: 200px;
          background-color: ${this.colors[this.state.color]};
          display: flex;
    `
  return(
    <div data-value={this.props.value} color={this.state.color} css={SquareStyle} onClick={() => this.handleClick()}></div>
  )
}
  
}

export default Square;