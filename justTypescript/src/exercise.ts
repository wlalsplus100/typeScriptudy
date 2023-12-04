import { createAction, createStore } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  text: "",
  list: [],
};

const increase = createAction("INCREASE");
const decrease = createAction("DECREASE");
const changeText = createAction<string>("CHANGE_TEXT");
const addToList = createAction<string>("ADD_TO_LIST");

type CounterAction =
  | ReturnType<typeof increase>
  | ReturnType<typeof decrease>
  | ReturnType<typeof changeText>
  | ReturnType<typeof addToList>;

type CounterState = {
  counter: number;
  text: string;
  list: (number | string)[];
};

const reducer = (state: CounterState = initialState, action: CounterAction) => {
  switch (action.type) {
    case "INCREASE":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "DECREASE":
      return {
        ...state,
        counter: state.counter - 1,
      };
    case "CHANGE_TEXT":
      return {
        ...state,
        text: action.payload,
      };
    case "ADD_TO_LIST":
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

const listener = () => {
  const state = store.getState();
  console.log(state);
};

const unsubscribe = store.subscribe(listener);
// 구독을 해제하고 싶을 때는 unsubscribe() 를 호출하면 됩니다.

// 액션들을 디스패치 해봅시다.
store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText("안녕하세요"));
store.dispatch(addToList("hi"));
