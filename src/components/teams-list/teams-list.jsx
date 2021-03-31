import React from 'react';

import HeaderNav from "../header-nav/header-nav.jsx";
import TeamsItems from "../teams-items/teams-items.jsx"

const TeamsList = () => {
  return (
    <>
  <header className="header">
    <HeaderNav />
  </header>


  <main className="main">
    <div className="input-group mb-3">
      <input type="text" className="form-control" placeholder="Team name" aria-label="Recipient's username" aria-describedby="basic-addon2" />
      <div className="input-group-append">
        <button type="button" className="btn btn-outline-secondary">Search</button>
      </div>
    </div>

    <TeamsItems />

    <button type="button" className="btn btn-primary btn-sm">Next</button>
  </main>

  <footer className="footer">

  </footer>
    </>
  )
};

export default TeamsList;
