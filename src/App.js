import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {List} from './List';
import './App.css';

export class App extends Component {

  constructor(props) {
    super(props);
    this.listContainer = document.getElementById('root2');
  }

  componentDidMount() {
    ReactDOM.render(<List />, this.listContainer);
  }

  componentDidUpdate() {
    this.renderChildren();
  }

  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.listContainer);
  }

  render() {
    return null;
  }

}
