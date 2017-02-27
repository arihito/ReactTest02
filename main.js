var MathClass = React.createClass({
  getInitialState: function() {
    return {
      num: ''
    };
  },
  mathFunc: function(e) {
    if (e.key === 'Enter')
      this.setState({
        num: e.target.value
    });
  },
  render: function() {
    return React.DOM.div(
      null,
      React.DOM.input({
        type: 'test',
        onKeyPress: this.mathFunc
      }),
      React.DOM.h2(null,eval(this.state.num))
    );
  }
});

ReactDOM.render(
  React.createElement(
    MathClass
  ),
  document.getElementById('content')
);
