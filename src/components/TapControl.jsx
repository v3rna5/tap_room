import React from 'react';
import ConfirmationQuestions from './ConfirmationQuestions';
import TapForm from './TapForm';
import PropTypes from 'prop-types';

class TapControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleTroubleshootingConfirmation = this.handleTroubleshootingConfirmation.bind(this);
  }

  handleTroubleshootingConfirmation(){
    this.setState({formVisibleOnPage: true});
  }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <TapForm onNewTapCreation={this.props.onNewTapCreation}/>;
    } else {
      currentlyVisibleContent = <ConfirmationQuestions onTroubleshootingConfirmation={this.handleTroubleshootingConfirmation}/>;
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

TapControl.propTypes = {
  onNewTapCreation: PropTypes.func
};

export default TapControl;
