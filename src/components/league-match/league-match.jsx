import React from "react";
import PropTypes from "prop-types";

const LeagueMatch = ({ match }) => {
  const { id, awayTeam, homeTeam } = match;
  return (
    <tr>
      <th scope="row">{id}</th>
      <td>{homeTeam.name}</td>
      <td>{awayTeam.name}</td>
    </tr>
  );
};

LeagueMatch.propTypes = {
  match: PropTypes.object.isRequired,
};

export default LeagueMatch;
