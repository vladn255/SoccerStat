import { ActionCreator } from "./action";

import { getEntityNames } from "../utils.js"

const fetchLeagues = () => (dispatch, _getState, api) => (
  api.get(`/competitions`)
    .then(({ data: { competitions } }) => {

      dispatch(ActionCreator.loadLeaguesList(getEntityNames(competitions)))
    })
    .catch((err) => console.log(`error occured:`, err))
);

const fetchTeams = () => (dispatch, _getState, api) => (
  api.get(`/teams`)
    .then(({ data: {teams} }) => {
      dispatch(ActionCreator.loadTeamsList(getEntityNames(teams)))
    })
    .catch((err) => console.log(`error occured:`, err))
);

export {
  fetchLeagues,
  fetchTeams
};
