/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import Square from './square';


class ItemFour extends React.Component {
  constructor(props){
    super(props);
    this.Container = React.createRef();
    this.tiles = [0,1,2,3,4,5,6,7,8,9];
    this.state = { matched: Array(10).fill(null)};
    this.checkWin = this.checkWin.bind(this);
  }

  checkWin(props) {
    const values = this.state.matched.slice();
    values[props.value] = props.color;
    console.log(values);
    this.setState({matched: values})
    setTimeout( () => {
      this.thing() 
    }, 600)
   
  }

  componentDidMount() {
    const initalStat = this.state.matched.slice();
    initalStat.forEach( (el,i) => {
      initalStat[i] = Math.floor(Math.random() * 3);
    } );

    this.setState({matched: initalStat});
    
  }


  thing() {
    const results = this.state.matched.slice();
    console.log('results', results)
    const correct = results.every( (val, i, arr) => val === arr[0] )  

    console.log(correct);
    if (correct) {
      this.Container.current.style.backgroundColor = 'white';
      this.Container.current.style.height = "100%";
      setTimeout( () => {
        this.Container.current.style.backgroundColor = 'transparent';
      this.Container.current.style.height = "0";
      }, 1000 )
    }

  }

  renderSquare(i) {
    return(
      <Square value={this.tiles[i]} color={this.state.matched[i]}  action={this.checkWin}  />
    )
  }
 

  render() {
    const containerStyle = 
    css`
      width: 100%;
      display: flex;
      flex-direction: row;
      height: auto;
      position: relative;
    `

    const overlayStyle = 
    css`
    width: 100%;
    display: flex;
    height: 0;
    z-index: 800;
    position: absolute;
    top: 0;
    left:0;
    tranistion: all 1s;
    `
    
    return(
      <div css={containerStyle}  >
          <div css={overlayStyle} ref={this.Container}></ div>
          { this.state.matched[0] !== null ? 
           <div css={containerStyle}>
              {this.renderSquare(0)}
              {this.renderSquare(1)}
              {this.renderSquare(2)}
              {this.renderSquare(3)}
              {this.renderSquare(4)}
              {this.renderSquare(5)}
              {this.renderSquare(6)}
              {this.renderSquare(7)}
              {this.renderSquare(8)}
              {this.renderSquare(9)}
            </div>

            : null }
      </div>
    )
  }
}

export default ItemFour;