import React from 'react';
import PropTypes from 'prop-types';
import reallyAdorablePuppy from '../assets/images/cutepuppies.jpg'

function Tap(props){
  return (
    <div>
      <style global jsx>{`

        .background {
          width: 300px;
          height: 300px;
          background-image: url(${reallyAdorablePuppy});
        }


      `}</style>
    <div className = "background" >
      <h3>{props.location} - {props.names}</h3>
      </div>
      <p><em>{props.issue}</em></p>
      <hr/>
    </div>
  );
}

Tap.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string
};

export default Tap;
