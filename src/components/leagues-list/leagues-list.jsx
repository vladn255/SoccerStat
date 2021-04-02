import React from "react";

import { ListTypes } from "../../const.js";

import HeaderNav from "../header-nav/header-nav.jsx";
import LeaguesItems from "../leagues-items/leagues-items.jsx";
import FooterInfo from "../footer-info/footer-info.jsx";
import ListControls from "../list-controls/list-controls.jsx";

const LeaguesList = () => {
  return (
    <>
      <header className="header">
        <div className="container-fluid">
          <HeaderNav />
        </div>
      </header>

      <main className="main">
        <div className="container">
          <ListControls listType={ListTypes.LEAGUE} />

          <LeaguesItems />
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

export default LeaguesList;
