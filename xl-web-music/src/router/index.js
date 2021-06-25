/*
 * @Author: web_XL
 * @Date: 2021-06-09 10:18:26
 * @LastEditors: web_XL
 * @LastEditTime: 2021-06-24 09:29:40
 * @Description:
 */
// "react-router-config": "^5.1.1"
// "react-router-dom": "^5.2.0"
import React from 'react'
import { Redirect } from 'react-router-dom'
import Discover from '../pages/discover'
import Mine from '../pages/mine'
import XLFriends from '../pages/friends'
import XLRecommend from '../pages/discover/child-pages/recommend'
import XLToplist from '../pages/discover/child-pages/toplist'
import XLAlbum from '../pages/discover/child-pages/album'
import XLArtist from '../pages/discover/child-pages/artist'
import XLDjradio from '../pages/discover/child-pages/djradio'
import XLSongs from '../pages/discover/child-pages/songs'
import XLPlayerInfo from '../pages/player'










const routes = [
  // {
  //   path: "/",
  //   component: Discover,
  //   exact: true//路径全匹配
  // },

  {
    path: "/",
    exact: true,//路径全匹配
    render: () => (
      <Redirect to="/discover" />
    )
  },
  {
    path: "/discover",
    component: Discover,
    routes: [
      {
        path: '/discover',
        exact: true,
        render: () => <Redirect to="/discover/recommend" />,
      },
      {
        path: '/discover/recommend',
        component: XLRecommend
      },
      {
        path: '/discover/ranking',
        component: XLToplist,
      },
      { path: '/discover/album', component: XLAlbum },
      { path: '/discover/djradio', component: XLDjradio },
      { path: '/discover/artist', component: XLArtist },
      {
        path: '/discover/songs',
        component: XLSongs
      },
      {
        path: '/discover/song',
        component: XLPlayerInfo
      }
      // { path: '/discover/song', component: JMSongDetail },
    ]
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