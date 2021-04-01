import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import LoadingScreen from "../loading-screen/loading-screen.jsx";
import TeamMatch from "../team-match/team-match.jsx";

const TeamsMatches = ({teamCalendar}) => {

  if (teamCalendar.length === 0) {
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
        {teamCalendar.map((match) => <TeamMatch key={match.id.toString()} match={match}/>)}
      </tbody>
    </table>
  )
};

TeamsMatches.propTypes = {
  teamCalendar: PropTypes.array.isRequired
};

const mapStateToProps = ({teamCalendar}) => ({
  teamCalendar
});


export default connect(mapStateToProps)(TeamsMatches);
