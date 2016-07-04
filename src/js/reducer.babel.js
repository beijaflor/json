const initialState = {
  json: "",
  editing: false,
  error: false,
  jsoncode: {
    display: true,
    value: ""
  },
  csvtable: {
    display: false,
    rows: 0,
    rowcsv: ""
  }
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case "DROPJSON": {
      const rowcsv = csvTo(action.json);
      const jsoncode = Object.assign({}, state.jsoncode,
        { value: action.json });
      const csvtable = Object.assign({}, state.csvtable,
        { rowcsv: rowcsv });
      return Object.assign({}, state,
        { json: action.json, jsoncode: jsoncode, csvtable: csvtable }
      );
    }
    case "UPDATE_ROWS": {
      console.log(action.rows)
      if ( action.rows === state.csvtable.rows ) {
        return state;
      } else {
        const csvtable = Object.assign({}, state.csvtable,
          { rows: action.rows });
        return Object.assign({}, state,
          { csvtable: csvtable });
      }
    }
    case "ERROR": {
      return Object.assign({}, state,
        { error: action.flag }
      );
    }
    case "EDITING": {
      console.log("update editing");
      if ( action.flag === state.editing ) {
        return state;
      } else {
        return Object.assign({}, state,
          { editing: action.flag }
        );
      }
    }
    case "DISPLAY_CHANGE": {
      let target = {};
      const display = Object.assign({}, state[action.target],
        { display: action.display });
      target[action.target] = display;
      const ret = Object.assign({}, state, target);
      return ret;
    }
    case "UPDATE_JSON_VALUE": {
      const rowcsv = csvTo(action.value);
      const jsoncode = Object.assign({}, state.jsoncode,
        { value: action.value });
      const csvtable = Object.assign({}, state.csvtable,
        { rowcsv: rowcsv });
      return Object.assign({}, state,
        { json: action.value, jsoncode: jsoncode, csvtable: csvtable }
      );
    }
    case "UPDATE_CSV_VALUE": {
      const json = csvFrom(action.value);
      const jsoncode = Object.assign({}, state.jsoncode,
        { value: json });
      const csvtable = Object.assign({}, state.csvtable,
        { rowcsv: action.value });
      return Object.assign({}, state,
        { json: json, jsoncode: jsoncode, csvtable: csvtable }
      );
    }
    default:
      return state
  }
}
