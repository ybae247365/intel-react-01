import "./TodoList.css";
import { useState, useEffect } from "react";

const todoList = [
  //   { id: 1, task: "첫번째할일", isDone: false },
  //   { id: 2, task: "두번째할일", isDone: true },
  //   { id: 3, task: "세번째할일", isDone: false },
];

function TodoItem({ todo, isDoneToggle, deleteTodo }) {
  return (
    <li className={todo.isDone ? "completed" : ""}>
      <input
        type="checkbox"
        checked={todo.isDone}
        onChange={() => {
          isDoneToggle(todo.id);
        }}
      />
      <span>{todo.task}</span>
      <button onClick={() => deleteTodo(todo.id)}>✖️</button>
    </li>
  );
}

function TodoList() {
  // 로컬 스토리지 데이터로 초기화

  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");

    console.log(saved);
    return saved ? JSON.parse(saved) : [];
  });

  const [todoValue, setTodoValue] = useState("");
  const [filter, setFilter] = useState("all");

  const remainingCount = todos.filter((todo) => !todo.isDone).length;

  const filteredTodos =
    filter === "all"
      ? todos
      : filter === "active"
        ? todos.filter((todo) => !todo.isDone)
        : todos.filter((todo) => todo.isDone);

  const addTodo = () => {
    // console.log("할일추가");
    if (!todoValue.trim()) return;

    //1. 새로운 할일 배열 만들기
    const newTodos = [
      ...todos,
      { id: Date.now(), task: todoValue, isDone: false },
    ];
    console.log(Date.now());
    //2. 기존 할일을 새로운 할일로 바꾸기
    setTodos(newTodos);
    setTodoValue("");
  };

  // 전체삭제
  function clearTodos() {
    if (window.confirm("정말 모두 삭제하시겠습니까?")) {
      setTodos([]);
    }
  }

  //완료된 항목 일괄 삭제
  function clearCompleted() {
    if (window.confirm("완료된 항목을 삭제하시겠습니까?")) {
      const newTodos = todos.filter((todo) => !todo.isDone);
      setTodos(newTodos);
    }
  }

  // 토글 함수
  function isDoneToggle(id) {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo,
    );
    setTodos(newTodos);
  }

  // 할 일 삭제 함수
  function deleteTodo(id) {
    console.log(id);
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="container">
      <h1>📝 Todo List</h1>
      <div className="input-box">
        <input
          type="text"
          placeholder="할 일을 입력하세요"
          value={todoValue}
          onChange={(e) => {
            setTodoValue(e.target.value);
          }}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              addTodo();
            }
          }}
        />
        <button onClick={addTodo}>추가</button>
        <button onClick={clearTodos}>전체 삭제</button>
        <button onClick={clearCompleted}>완료 삭제</button>
      </div>
      <ul className="todo-list">
        {/* {todos.map((item) => ( */}
        {filteredTodos.map((item) => (
          <TodoItem
            key={item.id}
            todo={item}
            isDoneToggle={isDoneToggle}
            deleteTodo={deleteTodo}
          />
        ))}

        {/* <li>
          <input type="checkbox" />
          <span>두번째 할일</span>
          <button>✖️</button>
        </li>
        <li className="completed">
          <input type="checkbox" defaultChecked="true" />
          <span>첫번째 할일</span>
          <button>✖️</button>
        </li>
        <li>
          <input type="checkbox" />
          <span>세번째 할일</span>
          <button>✖️</button>
        </li> */}
      </ul>

      <div className="filter-box">
        <button onClick={() => setFilter("all")}>전체</button>
        <button onClick={() => setFilter("active")}>미완료</button>
        <button onClick={() => setFilter("completed")}>완료</button>
      </div>

      <p>남은 할 일: {remainingCount}개</p>
    </div>
  );
}

export default TodoList;
