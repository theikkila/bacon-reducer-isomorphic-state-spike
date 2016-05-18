
import Bacon from 'baconjs'


const createAppState = (reducer, initial) => {
  const bus = Bacon.Bus()
  const store = bus.scan(initial, (state, action) => reducer(state, action))
  store.dispatch = action => bus.push(action)
  return store
}

export const initial = typeof window !== 'undefined' ? window.STATE : {}


function rootReducer(previousState, action) {
  let state = previousState
  console.log(previousState, action)
  switch (action.type) {
    case 'CHANGE':
      state.color = action.color;
      break
  }
  return state
}


export const appState = createAppState(rootReducer, initial)
