import React from 'react';
import PropTypes from 'prop-types';
import tapPhoto from '../assets/images/taproom.jpg'

function Tap(props){
  return (
    <div>
      <style global jsx>{`

        .background {
          width: 300px;
          height: 300px;
          background-image: url(${tapPhoto});
        }


      `}</style>
    
        <h3>{props.name} - {props.brewer}</h3>
      <p><em>{props.description}</em></p>
          <p><em>{props.abv}</em></p>
          <p><em>{props.price}</em></p>
          <p><em>{props.remaining}</em></p>
      <hr/>
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
