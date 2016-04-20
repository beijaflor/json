const initialState = {
  hoge: "huge"
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case "INCREMENT": {
      return { hoge: state.hoge + 1 }
    }
    default:
      return state
  }
}
