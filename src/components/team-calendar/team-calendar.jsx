import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { fetchTeamSeason } from "../../store/api-actions.js";

import HeaderNav from "../header-nav/header-nav.jsx";
import TeamsMatches from "../team-matches/team-matches.jsx";
import FooterInfo from "../footer-info/footer-info.jsx";
import CalendarControls from "../calendar-controls/calendar-controls.jsx";
import LoadingScreen from "../loading-screen/loading-screen.jsx";

const TeamCalendar = ({ activeTeam, activeSeason, getTeamMatches }) => {

  if (activeTeam.name === ``) {
    return <LoadingScreen />;
  }

  let seasonYear = ``;

  if (Number.isInteger(parseInt(activeSeason, 10))) {
    seasonYear = activeSeason;
  }

  getTeamMatches(activeTeam.id, seasonYear);

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

          <TeamsMatches />
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

TeamCalendar.propTypes = {
  activeTeam: PropTypes.object.isRequired,
  activeSeason: PropTypes.string.isRequired,
  getTeamMatches: PropTypes.func.isRequired,
};

const mapStateToProps = ({ activeTeam, activeSeason }) => ({
  activeTeam,
  activeSeason,
});

const mapDispatchToProps = (dispatch) => ({
  getTeamMatches(teamId, year) {
    dispatch(fetchTeamSeason(teamId, year));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamCalendar);
