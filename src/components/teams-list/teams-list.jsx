import React from "react";

import { ListTypes } from "../../const.js";

import HeaderNav from "../header-nav/header-nav.jsx";
import TeamsItems from "../teams-items/teams-items.jsx";
import FooterInfo from "../footer-info/footer-info.jsx";
import ListControls from "../list-controls/list-controls.jsx";

const TeamsList = () => {
  return (
    <>
      <header className="header">
        <div className="container-fluid">
          <HeaderNav />
        </div>
      </header>

      <main className="main">
        <div className="container">
          <ListControls listType={ListTypes.TEAM} />

          <TeamsItems />
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

export default TeamsList;
