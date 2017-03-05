var MathClass = React.createClass({
  componentWillMount: function() {
    console.log('1:componentWillMount:');
  },
  componentDidMount: function() {
    console.log('2:componentDidMount:');
  },
  componentWillReceiveProps: function(nextProps) {
    console.log('componentWillReceiveProps:', nextProps);
  },
  shouldComponentUpdate: function(nextProps, nextState) {
    console.log('3:shouldComponentUpdate:', nextProps, nextState);
    return true;
  },
  componentWillUpdate: function(nextProps, nextState) {
    console.log('4:componentWillUpdate:', nextProps, nextState);
  },
  componentDidUpdate: function(prevProps, prevState) {
    console.log('5:componentDidUpdate:', prevProps, prevState);
  },
  componentWillUnmount: function() {
    console.log('componentWillUnmount:');
  },
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
