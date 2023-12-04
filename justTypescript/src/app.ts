// Redux 관련 코드
import { createStore } from "redux";

// 액션 타입
const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const DELETE_TODO = "DELETE_TODO";

// 액션 생성자
const addTodo = (text: string) => ({
  type: ADD_TODO,
  text,
});

const toggleTodo = (id: number) => ({
  type: TOGGLE_TODO,
  id,
});

const deleteTodo = (id: number) => ({
  type: DELETE_TODO,
  id,
});

// 초기 상태와 리듀서
const initialState: State = {
  todos: [{ id: 0, text: "", completed: false }],
};

type State = {
  todos: Array<{
    id: number;
    text: string;
    completed: boolean;
  }>;
};

type Action = {
  type: string;
  id?: number;
  text?: string;
};

const todoReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [
          ...state.todos,
          {
            id: state.todos.length,
            text: action.text || "",
            completed: false,
          },
        ],
      };
    case TOGGLE_TODO:
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    case DELETE_TODO:
      return {
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    default:
      return state;
  }
};

// Redux 스토어 생성
const store = createStore(todoReducer);

// HTML 요소 선택
const todoInput = document.getElementById("todo-input") as HTMLInputElement;
const addButton = document.getElementById("add-button") as HTMLButtonElement;
const todoList = document.getElementById("todo-list")!;

// Redux 상태 업데이트 시 UI 갱신
const updateUI = () => {
  todoList.innerHTML = "";
  store.getState().todos.forEach((todo) => {
    const listItem = document.createElement("li");
    if (listItem) {
      listItem.innerHTML = `
      <span>${todo.text}</span>
      <button class="check">Check</button>
      <button class="del">Delete</button>
    `;
      const check_button = listItem.querySelector(".check");
      if (check_button) {
        check_button.addEventListener("click", () => {
          store.dispatch(toggleTodo(todo.id));
        });
      }
      const del_button = listItem.querySelector(".del");
      if (del_button) {
        del_button.addEventListener("click", () => {
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
addButton.addEventListener("click", () => {
  const todoText = todoInput.value.trim();
  if (todoText !== "") {
    store.dispatch(addTodo(todoText));
    todoInput.value = "";
  }
});

// 초기 UI 렌더링
updateUI();
