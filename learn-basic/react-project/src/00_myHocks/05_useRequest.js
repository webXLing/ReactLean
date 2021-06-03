/*
 * @Author: web_XL
 * @Date: 2021-06-02 16:40:19
 * @LastEditors: web_XL
 * @LastEditTime: 2021-06-02 16:47:52
 * @Description: 
 */
/*
 * @Author: web_XL
 * @Date: 2021-06-02 16:40:19
 * @LastEditors: web_XL
 * @LastEditTime: 2021-06-02 16:43:19
 * @Description: 
 */
import { useRequest } from 'ahooks';
import { message } from 'antd';
import React, { useState } from 'react';

function changeUsername (username) {
  console.log(username);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true });
    }, 1000);
  });
}

export default () => {
  const [state, setState] = useState('');
  const { loading, run } = useRequest(changeUsername, {
    manual: true,
    onSuccess: (result, params) => {
      console.log("result", result);
      if (result.success) {
        setState('');
        message.success(`The username was changed to "${params[0]}" !`);
      }
    },
  });

  return (
    <div>
      <input
        onChange={(e) => setState(e.target.value)}
        value={state}
        placeholder="Please enter username"
        style={{ width: 240, marginRight: 16 }}
      />
      <button disabled={loading} type="button" onClick={() => run(state)}>
        {loading ? 'loading' : 'Edit'}
      </button>
    </div>
  );
};
