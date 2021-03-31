const ActionType = {
  LOAD_LEAGUES_LIST: 'leagues/loadLeaguesList',
  LOAD_TEAMS_LIST: 'teams/loadTeamsList',
  LOAD_LEAGUE_CALENDAR: 'leagues/loadLeagueCalendar',
  LOAD_TEAM_CALENDAR: 'teams/loadTeamCalendar'
}

const ActionCreator = {
  loadLeaguesList: (leagues) => ({
    type: ActionType.LOAD_LEAGUES_LIST,
    payload: leagues
  }),

  loadTeamsList: (teams) => ({
    type: ActionType.LOAD_TEAMS_LIST,
    payload: teams
  }),

  loadLeagueCalendar: (matches) => ({
    type: ActionType.LOAD_LEAGUE_CALENDAR,
    payload: matches
  }),

  loadTeamCalendar: (matches) => ({
    type: ActionType.LOAD_TEAM_CALENDAR,
    payload: matches
  })
};

export {
  ActionType,
  ActionCreator
}
