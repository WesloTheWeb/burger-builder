const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0
}

// Reducer - multiple reducers gets combined into 1. The only thing that may update the state in the end
const rootReducer = (state = initialState, action) => {
    return state;
};

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Dispatching Action(s)

// Subscription