import React from 'react';
import PropTypes from 'prop-types';

const BigTitle = (props) => {
  return (
    <h1>{props.title}</h1>
  )
}

BigTitle.propTypes = {
  title: PropTypes.string.isRequired
}

export default BigTitle;
