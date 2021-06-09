/*
 * @Author: web_XL
 * @Date: 2021-06-09 10:18:26
 * @LastEditors: web_XL
 * @LastEditTime: 2021-06-09 10:41:16
 * @Description:
 */
// "react-router-config": "^5.1.1"
// "react-router-dom": "^5.2.0"
import Discover from '../pages/discover'
import Mine from '../pages/mine'
import XLFriends from '../pages/friends'



const routes = [
  {
    path: "/",
    component: Discover,
    exact: true//路径全匹配
  },
  {
    path: "/discover",
    component: Discover
  },
  {
    path: "/mine",
    component: Mine,
  },
  {
    path: "/friends",
    component: XLFriends,
  },
  // {
  //   path: "/about",
  //   component: About,
  //   routes: [
  //     {
  //       path: "/about",
  //       component: About3,
  //       exact: true//路径全匹配
  //     },
  //     {
  //       path: "/about/weather",
  //       component: About1
  //     },
  //     {
  //       path: "/about/news",
  //       component: About2
  //     },
  //   ]
  // },
]
export default routes