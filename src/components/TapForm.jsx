import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';




function TapForm(props){
  let _name = null;
  let _brewer = null;
  let _description = null;
  let _abv = null;
  let _price = null;
  let _remaining = null;


  function handleNewTapFormSubmission(event) {
    event.preventDefault();
    props.onNewTapCreation({name: _name.value, brewer: _brewer.value, description: _description.value, abv: _abv.value, price: _price.value, remaining: _remaining.value, timeOpen: new Moment()});
    _name.value = '';
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
          id='name'
          placeholder='Name'
          ref={(input) => {_names = input;}}/>
        <input
          type='text'
          id='brewer'
          placeholder='Brewer'
          ref={(input) => {_brewer = input;}}/>
          <input
            type='text'
            id='description'
            placeholder='Description'
            ref={(input) => {_description = input;}}/>
            <input
              type='text'
              id='abv'
              placeholder='abv'
              ref={(input) => {_abv = input;}}/>
              <input
                type='text'
                id='price'
                placeholder='Price'
                ref={(input) => {_price = input;}}/>
                <input
                  type='text'
                  id='reamaining'
                  placeholder='Remaining'
                  ref={(input) => {_remaining = input;}}/>
      
        <button type='submit'>Add!</button>
      </form>
    </div>
  );
}

TapForm.propTypes = {
  onNewTapCreation: PropTypes.func
};

export default TapForm;
