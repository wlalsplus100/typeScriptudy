// import {
//   createAction,
//   legacy_createStore as createStore,
// } from "@reduxjs/toolkit";

// const initialState = {
//   todoList: [] as { name: string; clear: boolean }[],
// };

// const push = createAction("PUSH", (name: string, clear: boolean) => {
//   return {
//     payload: { name, clear },
//   };
// });
// const del = createAction("DEL", (name: string, clear?: boolean) => {
//   return {
//     payload: { name, clear },
//   };
// });
// const sucess = createAction("SUCESS", (name: string, clear: boolean) => {
//   return {
//     payload: { name, clear },
//   };
// });

// type CounterAction =
//   | ReturnType<typeof push>
//   | ReturnType<typeof del>
//   | ReturnType<typeof sucess>;

// type TodolistState = {
//   todoList: { name: string; clear: boolean }[];
// };

// const todoReducer = (
//   state: TodolistState = initialState,
//   action: CounterAction
// ) => {
//   switch (action.type) {
//     case "PUSH":
//       console.log(state.todoList);
//       console.log(action.payload);
//       return {
//         ...state,
//         todoList: [...state.todoList, action.payload],
//       };
//     case "DEL":
//       return {
//         ...state,
//         todoList:
//           action.payload && action.payload.name
//             ? state.todoList.filter((item) => item.name !== action.payload.name)
//             : state.todoList,
//       };
//     case "SUCESS":
//       return {
//         ...state,
//         todoList: state.todoList.map((item) => {
//           if (item.name === action.payload.name) {
//             return { ...item, clear: !item.clear };
//           }
//           return item;
//         }),
//       };
//     default:
//       return state;
//   }
// };

// const store = createStore(todoReducer);

// export default store;
// export { push, del, sucess };

// const listener = (): void => {
//   const state = store.getState();
//   console.log(state);
//   console.log(state.todoList);
// };

// const unsubscribe = store.subscribe(listener);

// // Dispatch an action to add an item to the store
// store.dispatch(push("ab", false));

// // Assuming you have an unordered list with id="todo" in your HTML
// // const todo = document.getElementById("todo");
// // console.log(todo);

import {
  createAction,
  legacy_createStore as createStore,
} from "@reduxjs/toolkit";

const initialState = {
  todoList: [] as { name: string; clear: boolean }[],
};

const push = createAction("PUSH", (name: string, clear: boolean) => {
  return {
    payload: { name, clear },
  };
});
const del = createAction("DEL", (name: string, clear?: boolean) => {
  return {
    payload: { name, clear },
  };
});
const success = createAction("SUCCESS", (name: string, clear: boolean) => {
  return {
    payload: { name, clear },
  };
});

type CounterAction =
  | ReturnType<typeof push>
  | ReturnType<typeof del>
  | ReturnType<typeof success>;

type TodolistState = {
  todoList: { name: string; clear: boolean }[];
};

const todoReducer = (
  state: TodolistState = initialState,
  action: CounterAction
) => {
  switch (action.type) {
    case "PUSH":
      console.log(state.todoList);
      console.log(action.payload);
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    case "DEL":
      return {
        ...state,
        todoList:
          action.payload && action.payload.name
            ? state.todoList.filter((item) => item.name !== action.payload.name)
            : state.todoList,
      };
    case "SUCCESS":
      return {
        ...state,
        todoList: state.todoList.map((item) => {
          if (item.name === action.payload.name) {
            return { ...item, clear: !item.clear };
          }
          return item;
        }),
      };
    default:
      return state;
  }
};

const store = createStore(todoReducer);

export default store;
export { push, del, success };

const listener = (): void => {
  const state = store.getState();
  console.log(state);
  console.log(state.todoList);
};

const unsubscribe = store.subscribe(listener);

// Dispatch an action to add an item to the store
store.dispatch(push("ab", false));
