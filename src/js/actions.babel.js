export const dropHandler = (json) => {
  return { type: 'DROPJSON', json: json };
};

export const updateJsonValueHandler = (value) => {
  return { type: 'UPDATE_JSON_VALUE', value: value };
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

export const showRowCsvtableAction = () => {
  return { type: 'DISPLAY_CHANGE', target: "csvtable", display: true };
};
