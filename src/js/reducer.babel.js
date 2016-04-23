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
      return Object.assign({}, state,
        { json: action.json, jsoncode: { value: action.json } }
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
    case "EDITING": {
      console.log("update editing");
      console.log(`action flag: ${action.flag}`)
      console.log(`state.editing: ${state.editing}`)
      if ( action.flag === state.editing ) {
        return state;
      } else {
        return Object.assign({}, state,
          { editing: action.flag }
        );
      }
    }
    case "DISPLAY_CHANGE": {
      let obj = {};
      obj[action.target] = {};
      obj[action.target].display = action.display;
      return Object.assign({}, state, obj);
    }
    case "UPDATE_JSON_VALUE": {
      return Object.assign({}, state,
        { json: action.value, jsoncode: { value: action.value } }
      );
    }
    default:
      return state
  }
}
