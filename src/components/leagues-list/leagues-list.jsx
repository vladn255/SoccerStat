import React from 'react';

import {ListTypes} from "../../const.js";

import HeaderNav from "../header-nav/header-nav.jsx";
import LeaguesItems from "../leagues-items/leagues-items.jsx";
import FooterInfo from "../footer-info/footer-info.jsx";
import ListControls from "../list-controls/list-controls.jsx";


const LeaguesList = () => {

  return (
    <>
  <header className="header">
    <HeaderNav />
  </header>


  <main className="main">
    <ListControls listType={ListTypes.LEAGUE}/>

    <LeaguesItems />

  </main>

  <footer className="footer">
    <FooterInfo />
  </footer>
    </>
  )
};

export default LeaguesList;
