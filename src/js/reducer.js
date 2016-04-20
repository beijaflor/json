const initialState = {
  hoge: "huge",
  json: ""
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case "INCREMENT": {
      return { hoge: state.hoge + 1 }
    }
    case "DROPJSON": {
      return { json: action.json }
    }
    default:
      return state
  }
}
