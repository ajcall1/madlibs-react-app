import React, { Component } from 'react';
import Madlibform from './madlib_form';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="backgroundSkew">
            <div className="madlib-heading">
              <h1>DevCamp React Starter</h1>
              <div className= "madlib-subheading">
              Fill out the fields below and click the generate button<br/>to see the Mad Lib story.
              </div>
            </div>
            <Madlibform name ="AJ"/>
        </div>
      </div>
    );
  }
}
