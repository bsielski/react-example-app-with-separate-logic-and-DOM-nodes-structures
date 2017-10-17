import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button';
import { Items } from './Items';

export class List extends Component {

  constructor(props) {
    super(props);
    this.state = {
      animals: ["dog", "cat", "cow", "horse", "pig"]
    };
    this.sortButtonContainer = document.getElementById('container3');
    this.shuffleButtonContainer = document.getElementById('container2');
    this.itemsContainer = document.getElementById('container1');
    this.shuffle = this.shuffle.bind(this);
    this.sort = this.sort.bind(this);
  }

  shuffle() {
    const newArray = this.state.animals.slice();
    for (var i = newArray.length-1; i >=0; i--) {
      var randomIndex = Math.floor(Math.random()*(i+1));
      var itemAtIndex = newArray[randomIndex];
      newArray[randomIndex] = newArray[i];
      newArray[i] = itemAtIndex;
    }
    this.setState( {animals: newArray} );
  }

  sort() {
    const newArray = this.state.animals.slice();
    newArray.sort(function(a, b){
      if(a < b) return -1;
      if(a > b) return 1;
      return 0;
    })
    this.setState( {animals: newArray} );
  }

  renderChildren() {
    ReactDOM.render(<Items items={this.state.animals}/>, this.itemsContainer);
    ReactDOM.render(<Button label="Shuffle" onClick={this.shuffle}/>, this.shuffleButtonContainer);
    ReactDOM.render(<Button label="Sort" onClick={this.sort}/>, this.sortButtonContainer);
  }

  componentDidMount() {
    this.renderChildren();
  }

  componentDidUpdate() {
    this.renderChildren();
  }

  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.itemsContainer);
    ReactDOM.unmountComponentAtNode(this.shuffleButtonContainer);
    ReactDOM.unmountComponentAtNode(this.sortButtonContainer);
  }

  render() {
    return null;
  }
}
