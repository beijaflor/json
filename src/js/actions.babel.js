export const dropHandler = (json) => {
  return { type: 'DROPJSON', json: json };
};

export const updateJsonValueHandler = (value) => {
  return { type: 'UPDATE_JSON_VALUE', value: value };
};

export const updateCsvValueAction = (value) => {
  return { type: 'UPDATE_CSV_VALUE', value: value };
};

export const displayChanageHandler = (target, bool) => {
  return { type: 'DISPLAY_CHANGE', target: target, display: bool };
};

export const updateEditingAction = (bool) => {
  return { type: 'EDITING', flag: bool };
};

export const updateRowsAction = (rows) => {
  return { type: 'UPDATE_ROWS', rows: rows };
};

export const jsonErrorAction = (bool) => {
  return { type: 'ERROR', flag: bool };
};
