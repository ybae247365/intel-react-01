import { useState } from "react";
//1. state가 변경되면 컴포넌트가 다시 그려진다.
//2. 입력창에 입력되는 값(value)는 상태로 관리한다.

function InputControl() {
  const [inputValue, setInputValue] = useState("");
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(true);

  const handEmail = (e) => {
    setEmail(e.target.value);

    // 이메일 검증을 위한 정규표현식
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // 이메일 형식이 유효한지 검사
    setEmailValid(emailRegex.test(e.target.value));
  };

  return (
    <div>
      {/* 이메일 입력 부분 */}
      <div>
        <input type="text" value={email} onChange={handEmail} />
        {!emailValid && (
          <p style={{ color: "red" }}>이메일 형식이 올바르지 않습니다.</p>
        )}
      </div>

      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value.toUpperCase())}
        />
        <button onClick={() => setInputValue(inputValue.toLowerCase())}>
          소문자로 변경
        </button>
      </div>
      {inputValue}
    </div>
  );
}

export default InputControl;
