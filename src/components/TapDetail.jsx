import React from 'react';
import PropTypes from 'prop-types';

function TapDetail(props){
  return (
    <div>
      <hr/>
      <h1>{props.selectedTap.name} - {props.selectedTap.brewer}</h1>
      <h2>Submitted {props.selectedTap.formattedWaitTime} ago</h2>
      <h4><em>{props.selectedTap.description}</em></h4>
      <h4><em>{props.selectedTap.abv}</em></h4>
      <h4><em>{props.selectedTap.price}</em></h4>
      <h4><em>{props.selectedTap.remaining}</em></h4>
      <hr/>
    </div>
  );
}


TapDetail.propTypes = {
  selectedTap: PropTypes.object
};

export default TapDetail;
