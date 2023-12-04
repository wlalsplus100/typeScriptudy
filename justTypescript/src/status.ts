// // redux 만 설치된 프로젝트의 index.js 파일

// import { Action } from "redux";

// // 리덕스 모듈 가져오기
// const { createStore } = require("redux");

// // data 기본
// const nameData = { name: "Hanamon" };

// // action 객체
// const actionChangeName = (newname: string) => {
//   return {
//     type: "ACTION_CHANGE_NAME",
//     payload: newname,
//   };
// };

// // reducer 함수
// const postReducer = (state = nameData, action: ) => {
//   switch (action.type) {
//     case "ACTION_CHANGE_NAME":
//       return Object.assign({}, state, { ...state, name: action.payload });
//       break;
//     default:
//       return state;
//   }
// };

// // store 생성 및 리듀서 등록
// const store = createStore(postReducer);

// // 수정 전 확인
// console.log(store.getState());
// // 수정 실행 (이 부분에서 예를들어 클릭 시 실행되게 끔 만들면 된다.)
// store.dispatch(actionChangeName("하나몬"));
// // 수정 후 확인
// console.log(store.getState());

import { createStore, Action, AnyAction } from "redux";

// 초기 상태
interface AppState {
  name: string;
}

const initialState: AppState = {
  name: "Hanamon",
};

// 액션 타입 정의
const ACTION_CHANGE_NAME = "ACTION_CHANGE_NAME";

// 액션 생성 함수
function actionChangeName(newName: string): AnyAction {
  return {
    type: ACTION_CHANGE_NAME,
    payload: newName,
  };
}

// 리듀서 함수
function postReducer(
  state: AppState = initialState,
  action: AnyAction
): AppState {
  switch (action.type) {
    case ACTION_CHANGE_NAME:
      return { ...state, name: action.payload };
    default:
      return state;
  }
}

// 스토어 생성 및 리듀서 등록
const store = createStore(postReducer);

// 수정 전 확인
console.log(store.getState());

// 수정 실행 (예를 들어 클릭 시 실행되게 만들어야 함)
store.dispatch(actionChangeName("하나몬"));

// 수정 후 확인
console.log(store.getState());
