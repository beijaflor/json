export const dropHandler = (json) => {
  return { type: 'DROPJSON', json: json };
};

export const updateJsonValueHandler = (value) => {
  return { type: 'UPDATE_JSON_VALUE', value: value };
};
