import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import {RoutePath} from "../../const.js";

import NotFoundScreen from "../not-found/not-found.jsx";
import LeaguesList from "../leagues-list/leagues-list.jsx";
import TeamsList from "../teams-list/teams-list.jsx";
import LeagueCalendar from "../league-calendar/league-calendar.jsx";


const App = () => {
  return (
    <BrowserRouter>
     <Switch>
      <Route exact path={RoutePath.LEAGUES_LIST} render={() => {
        return <LeaguesList />;
      }}>
      </Route>

      <Route exact path={RoutePath.TEAMS_LIST} render={() => {
        return <TeamsList />;
      }}>
      </Route>

      <Route exact path={RoutePath.LEAGUES_CALENDAR} render={() => {
        return <LeagueCalendar />;
      }}>
      </Route>

      {/* <Route exact path={RoutePath.TEAMS_CALENDAR} render={() => {
        return <TeamsCalendar />;
      }}>
      </Route> */}

      <Route>
        <NotFoundScreen />
      </Route>
    </Switch>
    </BrowserRouter>
  )
}

export default App;
