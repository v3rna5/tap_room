import React from 'react';
import PropTypes from 'prop-types';

function Tap(props){
  const tapInformation =
    <div>
      <h3>{props.brewer} - {props.names}</h3>
      <h4>{props.formattedWaitTime}</h4>
      <hr/>
    </div>;
  if (props.currentRouterPath === '/admin'){
    return (
      <div onClick={() => {props.onTapSelection(props.tapId);}}>
        {tapInformation}
      </div>
    );
  } else {
    return (
      <div>
        {tapInformation}
      </div>
    );
  }
}

Tap.propTypes = {
  names: PropTypes.string.isRequired,
  brewer: PropTypes.string.isRequired,
  description: PropTypes.string,
  formattedWaitTime: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string,
  onTapSelection: PropTypes.func,
  tapId: PropTypes.string.isRequired
};

export default Tap;
