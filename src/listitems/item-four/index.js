/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import Square from './square';

import audio1  from './audio/audio1.mp3';
import audio2  from './audio/audio2.mp3';


class ItemFour extends React.Component {
  constructor(props){
    super(props);
    this.Container = React.createRef();
    this.audio = React.createRef();
    this.audio2 = React.createRef();
    this.tiles = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
    this.state = {  matched: Array(20).fill(null),
                    counter: 0
                  };
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
    this.createAudio();
    this.setState({matched: initalStat});
   
  }

  createAudio() {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    this.audioContext = new AudioContext();
  }


  thing() {
    const results = this.state.matched.slice();
    console.log('results', results)
    const correct = results.every( (val, i, arr) => val === arr[0] )  

    console.log(correct);
    if (correct) {

        if (this.audioContext.state === 'suspended') {
            this.audioContext.resume();
	        }
        
        this.audio.current.play();
        this.Container.current.style.backgroundColor = 'white';
        this.Container.current.style.height = "100%";

      setTimeout( () => {
        this.Container.current.style.backgroundColor = 'transparent';
        this.Container.current.style.height = "0";
      }, 700 )
      this.reshuffle();
    }
  }

  reshuffle() {
    const matched = this.state.matched.slice();
    matched.forEach( (el,i) => {
      matched[i] = Math.floor(Math.random() * 3);
    } );

    this.setState({matched: matched});


    setTimeout( () => {
    if (this.audioContext.state === 'suspended') {
      this.audioContext.resume();
    }
  
    this.audio2.current.play(); 
    this.setState({counter: this.state.counter + 1});
    console.log(this.state.counter)
  }, 1000)
  
    
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
      flex-direction: row;
      flex-direction: row;
      flex-wrap: wrap;
      flex-grow: 1;
      justify-content: flex-start;
    `


    const counterStyle = 
    css`
      position: absolute;
      z-index: 200;
      width: auto;
      height: auto;
      padding: 1em 2em;
      top: 1em;
      right: 1em;
      background-color: rgba(255,255,255,0.8);

      span {
        display: inline-block;
        font-size:2em;
      }
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
        <div className='counter' css={counterStyle}><span>{this.state.counter}</span></div>
        <audio src={audio1} ref={this.audio}></audio>
        <audio src={audio2} ref={this.audio2}></audio>
          <div css={overlayStyle} ref={this.Container}></ div>
          { this.state.matched[0] !== null  ? 
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
              {this.renderSquare(10)}
              {this.renderSquare(11)}
              {this.renderSquare(12)}
              {this.renderSquare(13)}
              {this.renderSquare(14)}
              {this.renderSquare(15)}
              {this.renderSquare(16)}
              {this.renderSquare(17)}
              {this.renderSquare(18)}
              {this.renderSquare(19)}
            </div>
            : null }
      </div>
    )
  }
}

export default ItemFour;