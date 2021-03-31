import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import LoadingScreen from "../loading-screen/loading-screen.jsx";
import TeamItem from "../team-item/team-item.jsx";

const TeamsItems = ({teamsList}) => {

  if (teamsList.length === 0) {
    return <LoadingScreen />;
  }

  return (
    <ul className="list-group">
      {teamsList.map((team) => <TeamItem key={team.toString()} teamName={team}/>)}
    </ul>
  )
};

TeamsItems.propTypes = {
  teamsList: PropTypes.array.isRequired
};

const mapStateToProps = ({teamsList}) => ({
  teamsList
});

export default connect(mapStateToProps)(TeamsItems);
