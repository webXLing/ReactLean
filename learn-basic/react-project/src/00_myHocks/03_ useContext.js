/*
 * @Author: web_XL
 * @Date: 2021-05-27 17:51:55
 * @LastEditors: web_XL
 * @LastEditTime: 2021-05-29 10:12:15
 * @Description:
 */
import React, { PureComponent } from 'react'

const { Provider, Consumer } = React.createContext(null);
const { Provider: TProvider, Consumer: TConsumer } = React.createContext(null);

function Bar () {
  return (
    <Consumer>

      {
        color => (
          <TConsumer>
            {tcsm => (
              <div>
                <div>{color}</div>
                <div>{tcsm}</div>
              </div>

            )}
          </TConsumer>

        )
      }


    </Consumer>
  );
}
function Foo () {
  return <Bar />;
}
export default function App () {
  return (
    <Provider value={"grey"}>
      <TProvider value={"xl"}>
        <Foo />
      </TProvider>
    </Provider>
  );
}


// 传递给 useContext 的是 context 而不是 consumer，返回值即是想要透传的数据了。用法很简单，使用 useContext 可以解决 Consumer 多状态嵌套的问题。
// function HeaderBar () {
//   return (
//     <CurrentUser.Consumer>
//       {user =>
//         <Notifications.Consumer>
//           {notifications =>
//             <header>
//               Welcome back, {user.name}!
//               You have {notifications.length} notifications.
//             </header>
//           }
//       }
//     </CurrentUser.Consumer>
//   );
// }

{/* 而使用 useContext 则变得十分简洁，可读性更强且不会增加组件树深度。 */ }
// function HeaderBar () {
//   const user = useContext(CurrentUser);
//   const notifications = useContext(Notifications);
//   return (
//     <header>
//       Welcome back, {user.name}!
//       You have {notifications.length} notifications.
//     </header>
//   );
// }



