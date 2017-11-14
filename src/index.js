import React from 'react';
import { createAction, handleAction } from 'redux-actions';
import { connect } from 'react-redux';
import isUndefined from 'lodash.isundefined';
import PropTypes from 'prop-types';

export const set = createAction('@@react-redux-values/set');

export const reducer = handleAction(set, (state, { payload }) => {
  const { name, value } = payload;

  return {
    ...state,
    [name]: value
  };
}, {});

const Value = ({ children, handleChange, ...rest }) =>
  children({
    ...rest,
    onValueChange: handleChange
  });

Value.propTypes = {
  children: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  initialValue: PropTypes.any
};

export default connect(
  ({ values }, { name, initialValue, ...rest }) => ({
    ...rest,
    value: isUndefined(values[name]) ? initialValue : values[name]
  }),
  (dispatch, { name }) => ({
    handleChange: newValue => dispatch(set({ name, value: newValue }))
  })
)(Value);
