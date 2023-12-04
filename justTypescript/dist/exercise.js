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
import { createAction, createStore } from "@reduxjs/toolkit";
var initialState = {
    counter: 0,
    text: "",
    list: [],
};
var increase = createAction("INCREASE");
var decrease = createAction("DECREASE");
var changeText = createAction("CHANGE_TEXT");
var addToList = createAction("ADD_TO_LIST");
var reducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case "INCREASE":
            return __assign(__assign({}, state), { counter: state.counter + 1 });
        case "DECREASE":
            return __assign(__assign({}, state), { counter: state.counter - 1 });
        case "CHANGE_TEXT":
            return __assign(__assign({}, state), { text: action.payload });
        case "ADD_TO_LIST":
            return __assign(__assign({}, state), { list: __spreadArray(__spreadArray([], state.list, true), [action.payload], false) });
        default:
            return state;
    }
};
var store = createStore(reducer);
var listener = function () {
    var state = store.getState();
    console.log(state);
};
var unsubscribe = store.subscribe(listener);
// 구독을 해제하고 싶을 때는 unsubscribe() 를 호출하면 됩니다.
// 액션들을 디스패치 해봅시다.
store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText("안녕하세요"));
store.dispatch(addToList("hi"));
//# sourceMappingURL=exercise.js.map