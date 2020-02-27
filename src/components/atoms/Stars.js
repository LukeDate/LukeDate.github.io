import React, {Component} from 'react';
import './styles/Stars.scss';

export default class Stars extends Component {
  render() {
    return (
      <div className="starWrapper">
        <div id='stars1'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
      </div>
    )
  }
}
