/*
 * @Author: web_XL
 * @Date: 2021-03-31 21:38:09
 * @LastEditors: web_XL
 * @LastEditTime: 2021-06-22 15:21:37
 * @Description: 
 */
import React, { createContext } from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom'

// import 'antd/dist/antd.css';
import 'antd/dist/antd.less';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale/zh_CN';
// import moment from 'moment';
import 'moment/locale/zh-cn';





import './style.css'
// import App from './01_组件定义方式/App';
// import App from './02_生命周期/App';
// import App from './03_组件通信/01父转子-函数组件';
// import App from './03_组件通信/02父转子-类组件';
// import App from './03_组件通信/03父转子-属性验证';
// import App from './03_组件通信/04子传父-函数调用';
// import App from './04_react实现slot/App';
// import App from './05_跨组件通信/01_context';
// import App from './05_跨组件通信/03_多个context函数组件';
// import App from './06_SetState/01_既是同步也是异步';
// import App from './06_SetState/02_setSate的合并';
// import App from './07_React性能优化/02_shouldComponentUpdate';
// import App from './07_React性能优化/04_memo';
// import App from './08_state不可变性/01_state为什么不可变';
// import App from './08_state不可变性/02_全局事件传递';
// import App from './09_受控和非空组件/01_refs的使用';
// import App from './10_高阶组件/01_高阶组件的定义方式';
// import App from './10_高阶组件/02_高阶组件-增强props';
// import App from './10_高阶组件/03_高阶组件-增强props-默认';
// import App from './10_高阶组件/04_高阶组件-增强props-改进';
// import App from './10_高阶组件/05_高阶组件-生命周期劫持';
// import App from './10_高阶组件/06_高阶组件-生命周期劫持-增强';
// import App from './11_组件内容补充/02_portals的使用';

// import App from './11_组件内容补充/03_fregment';
// import App from './12_css样式-styled-components/app';
// import App from './13_动态添加class';
// import App from './14_antd/01_基本用法';
// import App from './14_antd/02_组合使用';
// import App from './15_axios/App';
// import App from './16_react-transition-group/App';
// import App from './16_react-transition-group/App';
import App from './017_easy_redux/App';
// import App from './018_react-router/App';
// import App from './018_react-router/App-router-config-统一配置';
// import App from './019_hooks体验/01_counter-class'
// import App from './019_hooks体验/02_counter-hooks'
// import App from './019_hooks体验/03_useState复杂修改'
// import App from './019_hooks体验/04_useEffect'
// import App from './019_hooks体验/05_useContext'
// import App from './019_hooks体验/06_ussReducer'
// import App from './019_hooks体验/07_ussCallBack不能进行的性能优化'
// import App from './019_hooks体验/08_ussCallBack进行的性能优化'
// import App from './019_hooks体验/09_useMemo复杂计算的应用'
// import App from './019_hooks体验/10_useMemo传子组件应用类型'
// import App from './019_hooks体验/11_useRef的使用'
// import App from './019_hooks体验/12_useRef应用其他数据'
// import App from './019_hooks体验/13_forwordRef回顾'
// import App from './019_hooks体验/14_useImperativeHandle'
// import App from './019_hooks体验/15_useEffect修改count'
// import App from './019_hooks体验/16_useLayoutEffect'
// import App from './019_hooks体验/17_自定义hook'
// import App from './019_hooks体验/18_自定义hook-共享context'
// import App from './019_hooks体验/19_自定义hook-获取页面滚动'







export const UserContext = createContext()
export const TokenContext = createContext()




// import App from './00_myHocks/01_useState';
// import App from './00_myHocks/02_useEffect';
// import App from './00_myHocks/03_ useContext';
// import App from './00_myHocks/04_useMouse';
// import App from './00_myHocks/05_useRequest';
// import App from './00_myHocks/06_useReducer';
// import App from './00_myHocks/07_useEffect';
// import App from './00_myHocks/08';






ReactDOM.render(
  <BrowserRouter>
    <UserContext.Provider value={{ name: "xl", age: 23 }}>
      <TokenContext.Provider value="dasdaj-adasdas-2">
        <App subName="xl" />
      </TokenContext.Provider>
    </UserContext.Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <App subName="xl" />,
//   document.getElementById('root')
// );



