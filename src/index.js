// import _ from 'lodash';
import './scss/base.scss'

function component() {
    let element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  