import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

function convertToReactComponent(element) {
  const first = element[0];
  switch (typeof first) {
    case "string": {

      // assuming its string content
      if(element.length === 1 ){
        return "element"
      }

      let second = element[1];
      if(!Array.isArray(second)) {
        const args = [first, second];
        args.push(convertToReactComponent(element[2]));
        return React.createElement.call(args);
      } else {
        return React.createElement(first, {}, convertToReactComponent(element[2]));
      }
    }
    case "function": {
      return React.createElement(first, )
      break;
    }

    case "object" : {

      break;
    }
  }

}


const main = React.createElement(
  "div",
  {},
  React.createElement(
    "h1",
    {},
    React.createElement(
      "a",
      {"href": "#"},
      "React App"
    )
  )
);

ReactDOM.render(main, document.getElementById('root'));
registerServiceWorker();
