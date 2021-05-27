/*
 * @Author: web_XL
 * @Date: 2021-05-05 20:48:07
 * @LastEditors: web_XL
 * @LastEditTime: 2021-05-05 21:12:04
 * @Description:
 */
import styled from 'styled-components'

export const StyledCompoent = styled.div`
  font-size:26px;
  color:red;
  .txt{
    font-size: size 28px;
    &.active{
      color:blue;
      background-color:${props => props.theme.backgroudColor}
    }
  }

  .txt2::after{
    content:"¥"
  }
`