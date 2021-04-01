import { ActionCreator } from "./action";
import { PLAN } from "../const.js"

const fetchLeagues = () => (dispatch, _getState, api) => (
  api.get(`/competitions?plan=${PLAN}`)
    .then(({ data: { competitions } }) => {
      console.log(competitions)
      dispatch(ActionCreator.loadLeaguesList(competitions));
    })
    .catch((err) => console.log(err))
);

const fetchTeams = () => (dispatch, _getState, api) => (
  api.get(`/teams?plan=${PLAN}`)
    .then(({ data: { teams } }) => {
      dispatch(ActionCreator.loadTeamsList(teams));
    })
    .catch((err) => console.log(err))
);

const fetchLeagueSeason = (league, year) => (dispatch, _getState, api) => {
  api.get(`competitions/${league}/matches?season=${year}&$plan=${PLAN}`)
    .then(({ data: { matches } }) => {
      console.log(matches);
      dispatch(ActionCreator.loadLeagueCalendar(matches));
    })
    .catch((err) => console.log(err))
}

const fetchLeagueMatchesFiltered = (league, dateRange) => (dispatch, _getState, api) => {
  api.get(`competitions/${league}/matches?dateFrom=2019-06-22&$plan=${PLAN}`)
    .then(({ data: { matches } }) => {
      console.log(matches);
      dispatch(ActionCreator.setFilteredSeason(matches));
    })
    .catch((err) => console.log(err))
}

export {
  fetchLeagues,
  fetchTeams,
  fetchLeagueSeason,
  fetchLeagueMatchesFiltered
};
