import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

function NewTapForm(props){
  let _names = null;
  let _brewer = null;
  let _description = null;
  let _abv = null;
  let _price = null;
  let _remaining = null;

  function handleNewTapFormSubmission(event) {
    event.preventDefault();
    props.onNewTapCreation({names: _names.value, brewer: _brewer.value, description: _description.value, abv: _abv.value, price: _price.value, remaining: _remaining.value, timeOpen: new Moment()});
    _names.value = '';
    _brewer.value = '';
    _description.value = '';
    _abv.value = '';
    _price.value = '';
    _remaining.value = '';
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
          <input
            type='text'
            id='abv'
            placeholder='Abv'
            ref={(input) => {_abv = input;}}/>
            <input
              type='text'
              id='price'
              placeholder='Price'
              ref={(input) => {_price = input;}}/>
              <input
                type='text'
                id='remaining'
                placeholder='Remaining'
                ref={(input) => {_remaining = input;}}/>
              <button type='submit'>Add!</button>
      </form>
    </div>
  );
}

NewTapForm.propTypes = {
  onNewTapCreation: PropTypes.func
};

export default NewTapForm;
