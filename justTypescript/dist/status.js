// // redux 만 설치된 프로젝트의 index.js 파일
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
import { createStore } from "redux";
var initialState = {
    name: "Hanamon",
};
// 액션 타입 정의
var ACTION_CHANGE_NAME = "ACTION_CHANGE_NAME";
// 액션 생성 함수
function actionChangeName(newName) {
    return {
        type: ACTION_CHANGE_NAME,
        payload: newName,
    };
}
// 리듀서 함수
function postReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case ACTION_CHANGE_NAME:
            return __assign(__assign({}, state), { name: action.payload });
        default:
            return state;
    }
}
// 스토어 생성 및 리듀서 등록
var store = createStore(postReducer);
// 수정 전 확인
console.log(store.getState());
// 수정 실행 (예를 들어 클릭 시 실행되게 만들어야 함)
store.dispatch(actionChangeName("하나몬"));
// 수정 후 확인
console.log(store.getState());
//# sourceMappingURL=status.js.map