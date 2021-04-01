import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {fetchLeagueSeason} from "../../store/api-actions.js";

import HeaderNav from "../header-nav/header-nav.jsx";
import LeaguesMatches from "../league-matches/league-matches.jsx";
import FooterInfo from "../footer-info/footer-info.jsx";
import CalendarControls from "../calendar-controls/calendar-controls.jsx";
import LoadingScreen from "../loading-screen/loading-screen.jsx";


const LeagueCalendar = ({activeLeague, activeSeason, getLeagueMatches}) => {

  if (activeLeague.name === ``) {
    return <LoadingScreen />
  };

  let seasonYear = ``;

  if (Number.isInteger(parseInt(activeSeason, 10))) {
    seasonYear = activeSeason;
  }

console.log(activeLeague.code, seasonYear)
  getLeagueMatches(activeLeague.code, seasonYear)

  return (
    <>
  <header className="header">
    <HeaderNav />
  </header>


  <main className="main">
    <CalendarControls/>

    <LeaguesMatches />

  </main>

  <footer className="footer">
    <FooterInfo />
  </footer>
    </>
  )
};

LeagueCalendar.propTypes = {
  activeLeague: PropTypes.object.isRequired,
  activeSeason: PropTypes.string.isRequired,
  getLeagueMatches: PropTypes.func.isRequired
};

const mapStateToProps = ({activeLeague, activeSeason}) => ({
  activeLeague,
  activeSeason
});


const mapDispatchToProps = (dispatch) => ({
  getLeagueMatches(leagueId, year) {
    dispatch(fetchLeagueSeason(leagueId, year));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LeagueCalendar);
