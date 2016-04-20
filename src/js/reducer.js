const initialState = {
  hoge: "huge"
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case "INCREMENT": {
      return { hoge: state.hoge + 1 }
    }
    case "DROPJSON": {
      console.log("DROPJSON fired!");
    }
    default:
      return state
  }
}
