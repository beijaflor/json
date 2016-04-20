export const increment = () => {
  return { type: 'INCREMENT' };
};

export const dropHandler = (json) => {
  return { type: 'DROPJSON', json: json };
};
