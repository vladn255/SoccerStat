import React from 'react';
import PropTypes from 'prop-types';

const TeamItem = ({teamName}) => {
  return (
    <li className="list-group-item">{teamName}</li>
  )
};

TeamItem.propTypes = {
  teamName: PropTypes.string.isRequired
};

export default TeamItem
