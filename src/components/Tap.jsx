import React from 'react';
import PropTypes from 'prop-types';
import tapPhoto from '../assets/images/tap_room2.jpg'


function Tap(props){
  return (

    <div>

<div>
        <h3>{props.name} - {props.brewer}</h3>
      <p>Description:<em>{props.description}</em></p>
          <p><em>{props.abv}</em></p>
          <p>Price: <em>{props.price}</em></p>
          <p><em>{props.remaining}</em></p>
      
      <hr/>
    </div>
</div>
  );
}

  Tap.propTypes = {
    name: PropTypes.string.isRequired,
    brewer: PropTypes.string,
    description: PropTypes.string,
    abv: PropTypes.string,
    price: PropTypes.string,
    remaining: PropTypes.string,

};

export default Tap;
