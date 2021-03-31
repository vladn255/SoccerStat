const getEntityNames = (entities) => {
  const names = entities.map((item) => item.name);
  const set = new Set(names);
  return [...set].sort();
};

export {
  getEntityNames
}
