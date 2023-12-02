const { createStore, applyMiddleware } = require("redux");

// initial state
const initialState = {
  todos: [],
};

// reudcer
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "todos/todoAdded":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            title: action.payload,
          },
        ],
      };
    case "todos/todoLoaded":
      return {
        ...state,
        todos: [...state.todos, ...action.payload],
      };

    default:
      break;
  }
};

// store

const store = createStore(
    todoReducer,applyMiddleware()
)
