import React from 'react';

import {ListTypes} from "../../const.js";

import HeaderNav from "../header-nav/header-nav.jsx";
import TeamsItems from "../teams-items/teams-items.jsx"
import FooterInfo from "../footer-info/footer-info.jsx";
import ListControls from "../list-controls/list-controls.jsx";

const TeamsList = () => {

  return (
    <>
  <header className="header">
    <HeaderNav />
  </header>


  <main className="main">
    <ListControls listType={ListTypes.TEAM}/>

    <TeamsItems />

  </main>

  <footer className="footer">
    <FooterInfo />
  </footer>
    </>
  )
};

export default TeamsList;
