import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Greeting from './components/create_react_class_example'
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

      let firstAndSecond;
      let rest;

      // second is a map(object - not array)
      if(!Array.isArray(second)) {
        firstAndSecond = [first, second];
        rest = element.slice(2);
      } else {
        // second is a array - empty props
        firstAndSecond = [first, {}];
        rest = element.slice(1);
      }
      rest.forEach((subElement) => {
        firstAndSecond.push(convertToReactComponent(subElement));
      });
      return React.createElement.apply(null, firstAndSecond);
    }

    case "function": {
      return (convertToReactComponent(first.apply(null, element.slice(1))));
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

ReactDOM.render(React.createElement(Greeting, {appName: 'Hello World'}), document.getElementById('root'));
registerServiceWorker();
