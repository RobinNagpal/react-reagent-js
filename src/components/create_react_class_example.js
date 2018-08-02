import React from 'react';
import createReactClass from 'create-react-class'

const someText = {text: "React : "};
window.someText = {text: someText};

const Anc = (props, children) => React.createElement(
  "a",
  props,
  someText.text + children
);

const H1 = (props, children) => React.createElement(
  "h1",
  props,
  children
);

const DIV = (props, children) => React.createElement(
  "div",
  props,
  children
);

const Greeting = createReactClass({
  num: 0,
  componentDidMount: function () {
    window.setInterval(() => this.setState({number: this.num++}), 2000)
  },

  render: function () {
    const appName = this.props && this.props.appName;
    const number = this.state && this.state.number;
    return DIV({}, H1({}, Anc({"href": "#"}, appName + " " + number)))
  }
});

export default Greeting;