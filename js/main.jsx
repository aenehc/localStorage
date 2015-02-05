var React = require('React');


var CounterComponent = React.createClass({

  getInitialState: function () {
    return { counter: localStorage.getItem('counter') || 0 }
  },

  componentDidMount: function () {
    var that = this;
    window.setInterval(function () {
      that.state.counter++;
      localStorage.setItem('counter', that.state.counter);
      that.forceUpdate();
    }, 1000);
  },

  render: function () {
    return <h1>{this.state.counter}</h1>
  }

});


React.render(
  <CounterComponent/>,
  document.getElementsByClassName('app')[0]
);
