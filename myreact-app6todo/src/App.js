import React, {useState} from "react";

import React, { useState } from "react";

// TodoList 컴포넌트: 할 일 목록을 렌더링합니다.
function TodoList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        // items 배열을 순회하며 각 항목을 리스트 요소로 렌더링합니다.
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
}

function App() {
  // 할 일 목록을 관리하는 상태
  const [items, setItems] = useState([]);

  // 입력 필드의 현재 값을 관리하는 상태
  const [text, setText] = useState('');

  // 사용자가 입력할 때 입력 필드 상태를 업데이트하는 함수
  const handleChange = (e) => {
    setText(e.target.value);
  };

  // 폼 제출을 처리하는 함수
  const handleSubmit = (e) => {
    e.preventDefault(); // 기본 폼 제출 동작을 방지합니다.

    // 입력 필드가 비어 있는지 확인합니다.
    if (text.length === 0) {
      return;
    }

    // 새로운 할 일 항목 객체를 생성합니다.
    const newItem = {
      text: text,
      id: Date.now(), // 현재 타임스탬프를 기반으로 한 고유 id
    };

    // 할 일 목록을 업데이트합니다.
    setItems((prevItems) => [...prevItems, newItem]);
    setText(''); // 입력 필드를 비웁니다.
  };

  return (
    <div className="App">
      <h3>오늘 할일목록</h3> {/* 할 일 목록의 헤더 */}

      {/* TodoList 컴포넌트를 렌더링하며 items를 props로 전달합니다. */}
      <TodoList items={items} />

      {/* 새로운 할 일을 추가하는 폼 */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="todo">240729 MON</label>
        {/* 새로운 할 일을 입력할 수 있는 입력 필드 */}
        <input
          id="todo"
          onChange={handleChange}
          value={text}
        />
        &nbsp;&nbsp;
        {/* 아이템의 수를 보여주는 버튼 */}
        <button>버튼 #{items.length}</button>
      </form>
    </div>
  );
}

export default App;
