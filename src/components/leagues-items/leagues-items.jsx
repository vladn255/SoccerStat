import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import LoadingScreen from "../loading-screen/loading-screen.jsx";
import LeagueItem from "../league-item/league-item.jsx";

const LeaguesItems = ({ leaguesList, activeLeague }) => {
  if (leaguesList.length === 0) {
    return <LoadingScreen />;
  }

  return (
    <ul className="list-group">
      {leaguesList.map((league) => (
        <LeagueItem
          key={league.id.toString()}
          leagueName={league.name}
          activeLeagueName={activeLeague.name}
        />
      ))}
    </ul>
  );
};

LeaguesItems.propTypes = {
  leaguesList: PropTypes.array.isRequired,
  activeLeague: PropTypes.object.isRequired,
};

const mapStateToProps = ({ leaguesList, activeLeague }) => ({
  leaguesList,
  activeLeague,
});

export default connect(mapStateToProps)(LeaguesItems);
