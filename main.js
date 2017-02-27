var HelloWorld = React.createClass({
  render: function() {
    return React.createElement('h2', null, 'Hello, React World');
  }
});

ReactDOM.render(
  React.createElement(HelloWorld),
  document.getElementById('content')
);
