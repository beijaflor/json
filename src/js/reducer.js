const initialState = {
  hoge: "huge",
  json: "",
  jsoncode: {
    value: ""
  }
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case "INCREMENT": {
      return Object.assign({}, state,
        { hoge: state.hoge + 1 }
      );
    }
    case "DROPJSON": {
      return Object.assign({}, state,
        { json: action.json, jsoncode: { value: action.json } }
      );
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
