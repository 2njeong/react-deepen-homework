const { useState } = require("react");

export const useInput = () => {
  const [value, setValue] = useState("");

  const handler = (e) => {
    e ? setValue(e.target.value) : setValue("");
  };

  return [value, handler];
};
