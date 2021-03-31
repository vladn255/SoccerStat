import React from 'react';

import HeaderNav from "../header-nav/header-nav.jsx";
import LeaguesItems from "../leagues-items/leagues-items.jsx"

const LeaguesList = () => {
  return (
    <>
  <header className="header">
    <HeaderNav />
  </header>


  <main className="main">
    <div className="input-group mb-3">
      <input type="text" className="form-control" placeholder="League name" aria-label="Recipient's username" aria-describedby="basic-addon2" />
      <div className="input-group-append">
        <button type="button" className="btn btn-outline-secondary">Search</button>
      </div>
    </div>

    <LeaguesItems />

    <button type="button" className="btn btn-primary btn-sm">Next</button>
  </main>

  <footer className="footer">

  </footer>
    </>
  )
};

export default LeaguesList;
