import React from 'react';
import PropTypes from 'prop-types';

function TapDetail(props){
  return (
    <div>
      <hr/>
      <h1>{props.selectedTap.names} - {props.selectedTap.brewer}</h1>
      <h2>Submitted {props.selectedTap.formattedWaitTime} ago</h2>
      <h4><em>{props.selectedTap.description}</em></h4>
      <hr/>
    </div>
  );
}

TapDetail.propTypes = {
  selectedTap: PropTypes.object
};

export default TapDetail;
