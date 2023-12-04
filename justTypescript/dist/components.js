// import {
//   createAction,
//   legacy_createStore as createStore,
// } from "@reduxjs/toolkit";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
import { createAction, legacy_createStore as createStore, } from "@reduxjs/toolkit";
var initialState = {
    todoList: [],
};
var push = createAction("PUSH", function (name, clear) {
    return {
        payload: { name: name, clear: clear },
    };
});
var del = createAction("DEL", function (name, clear) {
    return {
        payload: { name: name, clear: clear },
    };
});
var success = createAction("SUCCESS", function (name, clear) {
    return {
        payload: { name: name, clear: clear },
    };
});
var todoReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case "PUSH":
            console.log(state.todoList);
            console.log(action.payload);
            return __assign(__assign({}, state), { todoList: __spreadArray(__spreadArray([], state.todoList, true), [action.payload], false) });
        case "DEL":
            return __assign(__assign({}, state), { todoList: action.payload && action.payload.name
                    ? state.todoList.filter(function (item) { return item.name !== action.payload.name; })
                    : state.todoList });
        case "SUCCESS":
            return __assign(__assign({}, state), { todoList: state.todoList.map(function (item) {
                    if (item.name === action.payload.name) {
                        return __assign(__assign({}, item), { clear: !item.clear });
                    }
                    return item;
                }) });
        default:
            return state;
    }
};
var store = createStore(todoReducer);
export default store;
export { push, del, success };
var listener = function () {
    var state = store.getState();
    console.log(state);
    console.log(state.todoList);
};
var unsubscribe = store.subscribe(listener);
// Dispatch an action to add an item to the store
store.dispatch(push("ab", false));
//# sourceMappingURL=components.js.map