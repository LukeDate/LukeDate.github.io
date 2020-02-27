import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import HomePage from '../components/templates/HomePage';
import {Stars} from '../components/index';
import './App.scss';

class App extends Component {

  render () {
    return (
      <div className='appWrapper'>
        <Stars />
        <HomePage title={'Hi, I\'m Luke'} />
        <Link to="/about">
          <button>Go to About</button>
        </Link>
      </div>
    )
  }
}

export default connect(state => state)(App);
