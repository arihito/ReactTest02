var HelloWorld = React.createClass({
  render: function() {
    return React.DOM.div(null, 
      React.DOM.h2(null, 'First Element'),
      React.DOM.h2(null, 'Second Element'),
      React.DOM.h2(null, 'Third Element')
    );
  }
});

ReactDOM.render(
  React.createElement(
    HelloWorld,
    {
      name: 'React'
    }
  ),
  document.getElementById('content')
);
