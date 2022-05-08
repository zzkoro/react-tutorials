import React from "react";

function Hello({name, color, isSpecial}) {
  return <div style={{ color }}>Hello {isSpecial && name}</div>;
}

Hello.defaultProps = {
  name: "이름없음",
  color: "red",
  isSpecial: false
}

export default Hello;