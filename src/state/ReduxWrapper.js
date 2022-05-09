import React from "react"
import { Provider } from "react-redux"
import { createStore } from "redux"
import rootReducer from "."

const store = createStore(
  rootReducer,
  typeof window !== "undefined" &&
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()
)

// eslint-disable-next-line react/display-name
export default ({ element }) => <Provider store={store}>{element}</Provider>
