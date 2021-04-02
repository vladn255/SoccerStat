import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { fetchLeagueSeason } from "../../store/api-actions.js";

import HeaderNav from "../header-nav/header-nav.jsx";
import LeaguesMatches from "../league-matches/league-matches.jsx";
import FooterInfo from "../footer-info/footer-info.jsx";
import CalendarControls from "../calendar-controls/calendar-controls.jsx";
import LoadingScreen from "../loading-screen/loading-screen.jsx";

const LeagueCalendar = ({ activeLeague, activeSeason, getLeagueMatches }) => {
  if (activeLeague.name === ``) {
    return <LoadingScreen />;
  }

  let seasonYear = ``;

  if (Number.isInteger(parseInt(activeSeason, 10))) {
    seasonYear = activeSeason;
  }

  getLeagueMatches(activeLeague.code, seasonYear);

  return (
    <>
      <header className="header">
        <div className="container-fluid">
          <HeaderNav />
        </div>
      </header>

      <main className="main">
        <div className="container">
          <CalendarControls />

          <LeaguesMatches />
        </div>
      </main>

      <footer className="footer">
        <div className="container row justify-content-center">
          <FooterInfo />
        </div>
      </footer>
    </>
  );
};

LeagueCalendar.propTypes = {
  activeLeague: PropTypes.object.isRequired,
  activeSeason: PropTypes.string.isRequired,
  getLeagueMatches: PropTypes.func.isRequired,
};

const mapStateToProps = ({ activeLeague, activeSeason }) => ({
  activeLeague,
  activeSeason,
});

const mapDispatchToProps = (dispatch) => ({
  getLeagueMatches(leagueId, year) {
    dispatch(fetchLeagueSeason(leagueId, year));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LeagueCalendar);
