import React from 'react';
import PropTypes from 'prop-types';
import tapPhoto from '../assets/images/tap_room2.jpg'


function Tap(props){
  const tapInformation =
    <div>
      <h3>{props.name} - {props.brewer}</h3>
    <p>Description:<em>{props.description}</em></p>
        <p><em>{props.abv}</em></p>
        <p>Price: <em>{props.price}</em></p>
        <p><em>{props.remaining}</em></p>
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
    name: PropTypes.string.isRequired,
    brewer: PropTypes.string.isRequired,
    description: PropTypes.string,
    abv: PropTypes.string,
    price: PropTypes.string,
    remaining: PropTypes.string,
    formattedWaitTime: PropTypes.string.isRequired,
currentRouterPath: PropTypes.string,
onTapSelection: PropTypes.func,
tapId: PropTypes.string.isRequired

};

export default Tap;
