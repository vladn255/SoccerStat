import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import LoadingScreen from "../loading-screen/loading-screen.jsx";
import LeagueItem from "../league-item/league-item.jsx";

const LeaguesItems = ({leaguesList}) => {
  if (leaguesList.length === 0) {
    return <LoadingScreen />;
  }

  return (
    <ul className="list-group">
      {leaguesList.map((league) => <LeagueItem key={league.toString()} leagueName={league}/>)}
    </ul>
  )
};

LeaguesItems.propTypes = {
  leaguesList: PropTypes.array.isRequired
};

const mapStateToProps = ({leaguesList}) => ({
  leaguesList
});

export default connect(mapStateToProps)(LeaguesItems);
