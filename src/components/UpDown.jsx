import React, { useState } from "react";
import "./UpDown.css";

function UpDown() {
  const [num, setNum] = useState("");
  const [result, setResult] = useState("");
  const [correct] = useState(Math.floor(Math.random() * 100) + 1);
  const [count, setCount] = useState(0); // 시도 횟수

  const handleClick = () => {
    const userNum = parseInt(num);
    setCount(count + 1);

    if (userNum > correct) {
      setResult("⬇️ Down 하세요");
    } else if (userNum < correct) {
      setResult("⬆️ Up 하세요");
    } else {
      setResult(`🎉 정답입니다! 총 ${count + 1}번 만에 맞추셨습니다.`);
    }
  };

  return (
    <div className="game-container">
      <h1>업앤다운 숫자 맞추기 게임</h1>
      <p>1부터 100 사이의 숫자를 맞춰보세요!</p>

      <div className="input-group">
        <input
          type="number"
          placeholder="숫자 입력"
          min="1"
          max="100"
          value={num}
          onChange={(e) => setNum(e.target.value)}
        />
        <button onClick={handleClick}>확인</button>
      </div>

      <p id="result">{result}</p>
    </div>
  );
}

export default UpDown;
