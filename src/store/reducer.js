import { ActionType } from "./action.js";

const initialState = {
  leaguesList: [],
  teamsList: [],
  leagueCalendar: [],
  teamCalendar: [],
  activeLeague: { name: `` },
  activeTeam: { name: `` },
  activeSeason: `Current`,
  filteredMatches: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_LEAGUES_LIST:
      return {
        ...state,
        leaguesList: action.payload,
        activeLeague: action.payload[0]
      };

    case ActionType.LOAD_TEAMS_LIST:
      return {
        ...state,
        teamsList: action.payload,
        activeTeam: action.payload[0]
      };

    case ActionType.LOAD_LEAGUE_CALENDAR:
      return {
        ...state,
        leagueCalendar: action.payload
      };

    case ActionType.LOAD_TEAM_CALENDAR:
      return {
        ...state,
        teamCalendar: action.payload
      };

    case ActionType.SET_ACTIVE_LEAGUE:
      let activeLeague = state.leaguesList.filter((league) => league.name === action.payload)[0];
      if (activeLeague === undefined) {
        activeLeague = { name: `` };
      }

      return {
        ...state,
        activeLeague
      };

    case ActionType.SET_ACTIVE_TEAM:
      let activeTeam = state.teamsList.filter((team) => team.name === action.payload)[0];
      if (activeTeam === undefined) {
        activeTeam = { name: `` };
      }

      return {
        ...state,
        activeTeam
      };

    case ActionType.SET_ACTIVE_SEASON:
      return {
        ...state,
        activeSeason: action.payload
      };

    case ActionType.SET_FILTERD_SEASON:
      return {
        ...state,
        filteredMatches: action.payload
      }
  }

  return state;
};

export default reducer
