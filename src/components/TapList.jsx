import React from 'react';
import Tap from './Tap';
import PropTypes from 'prop-types';
import PhotoComponent from '../assets/images/taproom.jpg';

function TapList(props){
  return (
    <div>
      <hr/>
      {Object.keys(props.tapList).map(function(tapId) {
        var tap = props.tapList[tapId];
        return <Tap names={tap.names}
          brewer={tap.brewer}
          description={tap.description}
          abv={tap.abv}
          price={tap.price}
          remaining={tap.remaining}
          formattedWaitTime={tap.formattedWaitTime}
          currentRouterPath={props.currentRouterPath}
          key={tapId}
          tapId={tapId}
          onTapSelection={props.onTapSelection}/>;
      })}
    </div>
  );
}

TapList.propTypes = {
  tapList: PropTypes.object,
  currentRouterPath: PropTypes.string,
  onTapSelection: PropTypes.func
};

export default TapList;
