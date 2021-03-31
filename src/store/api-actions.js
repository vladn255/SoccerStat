
const fetchLeagues = () => () => (
  api.get(`/competitions`)
    .then((data) => {
      console.log(`worked`)
      console.log(data)
    })
    .catch(() => console.log(`fail`))
);

export {
  fetchLeagues
};
