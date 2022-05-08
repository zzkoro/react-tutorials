import React, { useState } from "react";

function InputSample() {
  const [inputs, setInputs] = useState({
    id: "",
    nickname: ""
  });

  const { id, nickname } = inputs;

  const displayText = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const onReset = (e) => {
    setInputs({
      id: "",
      nickname: ""
    });
  };

  return (
    <div>
      <input name="id" onChange={displayText} value={id} placeholder="아이디" />
      <input name="nickname" onChange={displayText} value={nickname} placeholder="닉네임" />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: {id}({nickname})</b>
      </div>
    </div>
  );
}

export default InputSample;