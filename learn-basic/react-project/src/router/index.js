import About, { About1, About2, About3 } from "../018_react-router/pages/About";
import Detail from "../018_react-router/pages/Detail";
import Detail2 from "../018_react-router/pages/Detail2";
import Detail3 from "../018_react-router/pages/Detail3";
import Home from "../018_react-router/pages/Home";
import User from "../018_react-router/pages/User";
import Login from "../018_react-router/pages/Login";


/*
 * @Author: web_XL
 * @Date: 2021-05-31 21:43:46
 * @LastEditors: web_XL
 * @LastEditTime: 2021-05-31 22:13:51
 * @Description:
 */
const router = [
  {
    path: "/",
    component: Home,
    exact: true//路径全匹配
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/about",
    component: About,
    routes: [
      {
        path: "/about",
        component: About3,
        exact: true//路径全匹配
      },
      {
        path: "/about/weather",
        component: About1
      },
      {
        path: "/about/news",
        component: About2
      },
    ]
  },

  {
    path: "/login",
    component: Login
  },
  {
    path: "/detail/:id",
    component: Detail
  },
  {
    path: "/detail2",
    component: Detail2
  },
  {
    path: "/detail3",
    component: Detail3
  },
  {
    path: "/:userid",
    component: User
  }
]

export default router