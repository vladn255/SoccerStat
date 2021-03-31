import React from 'react';
import PropTypes from 'prop-types';

const LeagueItem = ({leagueName}) => {
  return (
    <li className="list-group-item">{leagueName}</li>
  )
};

LeagueItem.propTypes = {
  leagueName: PropTypes.string.isRequired
};

export default LeagueItem
