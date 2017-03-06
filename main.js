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
    return (
      <div>
        <input
          type='test'
          onKeyPress='{this.mathFunc}'
        />
        <h2>{eval(this.state.num)}</h2>
      </div>
    );
  }
});

ReactDOM.render(
  <MathClass />,
  document.getElementById('content')
);
