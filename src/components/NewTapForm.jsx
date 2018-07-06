import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

function NewTapForm(props){
  let _names = null;
  let _brewer = null;
  let _description = null;

  function handleNewTapFormSubmission(event) {
    event.preventDefault();
    props.onNewTapCreation({names: _names.value, brewer: _brewer.value, description: _description.value, timeOpen: new Moment()});
    _names.value = '';
    _brewer.value = '';
    _description.value = '';
  }

  return (
    <div>
      <form onSubmit={handleNewTapFormSubmission}>
        <input
          type='text'
          id='names'
          placeholder='Tap Name'
          ref={(input) => {_names = input;}}/>
        <input
          type='text'
          id='brewer'
          placeholder='Brewer'
          ref={(input) => {_brewer = input;}}/>
        <textarea
          id='description'
          placeholder='Tap Description'
          ref={(textarea) => {_description = textarea;}}/>
        <button type='submit'>Help!</button>
      </form>
    </div>
  );
}

NewTapForm.propTypes = {
  onNewTapCreation: PropTypes.func
};

export default NewTapForm;
