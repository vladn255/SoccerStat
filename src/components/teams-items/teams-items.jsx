import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import LoadingScreen from "../loading-screen/loading-screen.jsx";
import TeamItem from "../team-item/team-item.jsx";

const TeamsItems = ({ teamsList, activeTeam }) => {
  if (teamsList.length === 0) {
    return <LoadingScreen />;
  }

  return (
    <ul className="list-group">
      {teamsList.map((team) => (
        <TeamItem
          key={team.id.toString()}
          teamName={team.name}
          activeTeamName={activeTeam.name}
        />
      ))}
    </ul>
  );
};

TeamsItems.propTypes = {
  teamsList: PropTypes.array.isRequired,
  activeTeam: PropTypes.object.isRequired,
};

const mapStateToProps = ({ teamsList, activeTeam }) => ({
  teamsList,
  activeTeam,
});

export default connect(mapStateToProps)(TeamsItems);
