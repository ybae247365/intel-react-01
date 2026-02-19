import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

// lazy import — 해당 Route에 접근할 때만 컴포넌트 + CSS 로드
const Home = lazy(() => import("./components/Home"));
const Counter = lazy(() => import("./components/Counter"));
const TodoList = lazy(() => import("./components/TodoList"));
const UpDown = lazy(() => import("./components/UpDown"));
const NotFound = lazy(() => import("./components/NotFound"));
import Navigation from "./components/Navigation";

function App() {
  return (
    <div>
      <Navigation>
        {/* Suspense로 감싸야 함 — 로딩 중 보여줄 UI 지정 */}
        <Suspense fallback={<div>로딩 중...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/todolist" element={<TodoList />} />
            <Route path="/updown" element={<UpDown />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Navigation>
    </div>
  );
}

export default App;
