import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import LoadingScreen from "../loading-screen/loading-screen.jsx";
import LeagueMatch from "../league-match/league-match.jsx";

const LeaguesMatches = ({ leagueCalendar }) => {
  if (leagueCalendar.length === 0) {
    return <LoadingScreen />;
  }

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Home team</th>
          <th scope="col">Away team</th>
        </tr>
      </thead>
      <tbody>
        {leagueCalendar.map((match) => (
          <LeagueMatch key={match.id.toString()} match={match} />
        ))}
      </tbody>
    </table>
  );
};

LeaguesMatches.propTypes = {
  leagueCalendar: PropTypes.array.isRequired,
};

const mapStateToProps = ({ leagueCalendar }) => ({
  leagueCalendar,
});

export default connect(mapStateToProps)(LeaguesMatches);
