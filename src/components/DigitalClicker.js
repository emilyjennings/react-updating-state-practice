// Code DigitalClicker Component Here
import React from 'react';

class DigitalClicker extends React.Component {
  constructor() {
    super();

    // Define the initial state:
    this.state = {
      timesClicked: 0
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      timesClicked: prevState.timesClicked+1
    }))
  }

  render() {
    return (

        <button onClick={this.handleClick}>Clicked {this.state.timesClicked} times!</button>

    );
  }
}

export default DigitalClicker;
