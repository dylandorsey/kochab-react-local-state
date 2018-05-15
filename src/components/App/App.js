import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    // super refers to it's parent class, here, Component
    // we'll talk more about props later.
    super(props);

    this.state = {
      user: 'Dash Rendar',
      place: '' 
    }

    // make 'this' in handleChange the same as 'this' in the constructor
    // similar to const self = this;
    // the line is cumbersome and must be repeated for each function,
    // so it will go away now:
    // this.handleChange = this.handleChange.bind(this);

  }
  handleUserChange = (event) => {
    // event is sometimes called evt, ev, e. it could be taco, right)
    console.log('event.target.value', event.target.value);

    // this.state.user = event.target.value;
    // ^^ nice try. React hates this and will not do what you want if you try it like this.
    // instead:
    this.setState({user: event.target.value});
  }
  handlePlaceChange = (event) => {
    // event is sometimes called evt, ev, e. it could be taco, right)
    console.log('event.target.value', event.target.value);
    this.setState({place: event.target.value});
  }
  handleClick = (event) => {
    console.log(this.state);
  }
  render() {
    return (
      <div className="App">
        The current user is {this.state.user}.
        <br></br>
        The current object is {JSON.stringify(this.state)}.
        <br></br>
        User: <input onChange={this.handleUserChange} placeholder="User Name"/>
        <br></br>
        Place: <input onChange={this.handlePlaceChange} placeholder="Place Name"/>
        <br></br>
        {this.state.user} is from {this.state.place}
        <br></br>
        Submit to console: <button onClick={this.handleClick}>Put the clicker here</button>
      </div>
    );
  }
}

export default App;
