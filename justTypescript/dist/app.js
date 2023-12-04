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
// Redux 관련 코드
import { createStore } from "redux";
// 액션 타입
var ADD_TODO = "ADD_TODO";
var TOGGLE_TODO = "TOGGLE_TODO";
var DELETE_TODO = "DELETE_TODO";
// 액션 생성자
var addTodo = function (text) { return ({
    type: ADD_TODO,
    text: text,
}); };
var toggleTodo = function (id) { return ({
    type: TOGGLE_TODO,
    id: id,
}); };
var deleteTodo = function (id) { return ({
    type: DELETE_TODO,
    id: id,
}); };
// 초기 상태와 리듀서
var initialState = {
    todos: [{ id: 0, text: "", completed: false }],
};
var todoReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case ADD_TODO:
            return {
                todos: __spreadArray(__spreadArray([], state.todos, true), [
                    {
                        id: state.todos.length,
                        text: action.text || "",
                        completed: false,
                    },
                ], false),
            };
        case TOGGLE_TODO:
            return {
                todos: state.todos.map(function (todo) {
                    return todo.id === action.id ? __assign(__assign({}, todo), { completed: !todo.completed }) : todo;
                }),
            };
        case DELETE_TODO:
            return {
                todos: state.todos.filter(function (todo) { return todo.id !== action.id; }),
            };
        default:
            return state;
    }
};
// Redux 스토어 생성
var store = createStore(todoReducer);
// HTML 요소 선택
var todoInput = document.getElementById("todo-input");
var addButton = document.getElementById("add-button");
var todoList = document.getElementById("todo-list");
// Redux 상태 업데이트 시 UI 갱신
var updateUI = function () {
    todoList.innerHTML = "";
    store.getState().todos.forEach(function (todo) {
        var listItem = document.createElement("li");
        if (listItem) {
            listItem.innerHTML = "\n      <span>".concat(todo.text, "</span>\n      <button class=\"check\">Check</button>\n      <button class=\"del\">Delete</button>\n    ");
            var check_button = listItem.querySelector(".check");
            if (check_button) {
                check_button.addEventListener("click", function () {
                    store.dispatch(toggleTodo(todo.id));
                });
            }
            var del_button = listItem.querySelector(".del");
            if (del_button) {
                del_button.addEventListener("click", function () {
                    store.dispatch(deleteTodo(todo.id));
                });
            }
            if (todo.completed) {
                listItem.classList.add("completed");
            }
            todoList.appendChild(listItem);
        }
    });
};
// 스토어 구독 및 액션 디스패치
store.subscribe(updateUI);
addButton.addEventListener("click", function () {
    var todoText = todoInput.value.trim();
    if (todoText !== "") {
        store.dispatch(addTodo(todoText));
        todoInput.value = "";
    }
});
// 초기 UI 렌더링
updateUI();
//# sourceMappingURL=app.js.map