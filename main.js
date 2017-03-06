var MathClass = React.createClass({
  getInitialState: function() {
    return {
      num: ''
    };
  },
  mathFunc: function(e) {
    if (e.key === 'Enter')
      this.setState({
        num: eval(e.target.value)
    });
  },
  render: function() {
    var defAttrs = {
      style: {
        color: "#333",
        backgroundColor: "#ddd",
        fontFamily: "Serif",
        fontSize: 22
      }
    }

    return (
      <div>
        <input
          { ...defAttrs }
          type='test'
          onKeyPress={this.mathFunc}
        />
        <h2 style={{color:this.state.num >= 5 ? 'green' : 'red'}}>
          {this.state.num}
        </h2>
      </div>
    );
  }
});

ReactDOM.render(
  <MathClass />,
  document.getElementById('content')
);
