import axios from "axios";

const URL = `http://api.football-data.org/v2`;
const REQUEST_TIMEOUT = 5000;

export const createAPI = () => {
  const api = axios.create({
    headers: {
      'X-Auth-Token': `3f1f6424a2e24c3d9aece37e48d87b16`
    },
    baseURL: URL,
    timeout: REQUEST_TIMEOUT,
    responseType: "json"
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    const { response } = err;

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
}
