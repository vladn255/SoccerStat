const ActionType = {
  LOAD_LEAGUES_LIST: 'leagues/loadLeaguesList',
  LOAD_TEAMS_LIST: 'teams/loadTeamsList',
  LOAD_LEAGUE_CALENDAR: 'leagues/loadLeagueCalendar',
  LOAD_TEAM_CALENDAR: 'teams/loadTeamCalendar',
  SET_ACTIVE_LEAGUE: 'leagues/setActiveLeague',
  SET_ACTIVE_TEAM: 'teams/setActiveTeam',
  SET_ACTIVE_SEASON: 'general/setActiveSeason',
  SET_FILTERED_SEASON: 'leagues/setFilteredSeason'
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
  }),

  setActiveLeague: (league) => ({
    type: ActionType.SET_ACTIVE_LEAGUE,
    payload: league
  }),

  setActiveTeam: (team) => ({
    type: ActionType.SET_ACTIVE_TEAM,
    payload: team
  }),


  setActiveSeason: (year) => ({
    type: ActionType.SET_ACTIVE_SEASON,
    payload: year
  }),

  setFilteredSeason: (matches) => ({
    type: ActionType.SET_FILTERED_SEASON,
    payload: matches
  })
};

export {
  ActionType,
  ActionCreator
}
