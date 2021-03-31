import { ActionType } from "./action.js";

const initialState = {
  leaguesList: [],
  teamsList: [],
  leagueCalendar: [],
  teamCalendar: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_LEAGUES_LIST:
      return {
        ...state,
        leaguesList: action.payload
      };

    case ActionType.LOAD_TEAMS_LIST:
      return {
        ...state,
        teamsList: action.payload
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
  }

  return state;
};

export default reducer
