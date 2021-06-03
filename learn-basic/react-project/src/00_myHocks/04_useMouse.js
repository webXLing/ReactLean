/*
 * @Author: web_XL
 * @Date: 2021-06-02 16:15:00
 * @LastEditors: web_XL
 * @LastEditTime: 2021-06-02 16:39:27
 * @Description: 
 */
import React from "react";
import { useToggle } from "ahooks";

export default () => {
  const [state, { toggle }] = useToggle();

  return (
    <div>
      <p>Current Boolean: {String(state)}</p>
      <p>
        <button onClick={() => toggle()}>Toggle</button>
      </p>
    </div>
  );
};