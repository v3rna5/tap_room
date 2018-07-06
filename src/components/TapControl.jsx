import React from 'react';

class TapControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }

  render(){
    return (
      <div>
        <p>This is the NewTicketControl component!</p>
      </div>
    );
  }
}

export default TapControl;
