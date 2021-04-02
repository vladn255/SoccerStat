import { ActionCreator } from "./action";
import { PLAN } from "../const.js"

const fetchLeagues = () => (dispatch, _getState, api) => (
  api.get(`/competitions?plan=${PLAN}`)
    .then(({ data: { competitions } }) => {
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
      dispatch(ActionCreator.loadLeagueCalendar(matches));
    })
    .catch((err) => console.log(err))
}

const fetchTeamSeason = (teamId, year) => (dispatch, _getState, api) => {
  api.get(`teams/${teamId}/matches?season=${year}&$plan=${PLAN}`)
    .then(({ data: { matches } }) => {
      dispatch(ActionCreator.loadTeamCalendar(matches));
    })
    .catch((err) => console.log(err))
}


export {
  fetchLeagues,
  fetchTeams,
  fetchLeagueSeason,
  fetchTeamSeason
};
