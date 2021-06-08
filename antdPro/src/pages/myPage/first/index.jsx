/*
 * @Author: web_XL
 * @Date: 2021-06-03 15:21:22
 * @LastEditors: web_XL
 * @LastEditTime: 2021-06-03 15:39:53
 * @Description:
 */
import React, { PureComponent } from 'react'
import { PageContainer } from '@ant-design/pro-layout';
import { connect } from 'umi';



class Index extends PureComponent {
  componentDidMount () {
    console.log("here1---", this.props);
    // const { dispatch } = this.props;
    // dispatch({
    //   type: 'profileAndbasic/fetchBasic',
    // });
  }
  render () {
    return (
      <PageContainer>
        IndexIndexIndexIndex
      </PageContainer>
    )
  }
}


export default connect((res) => {
  console.log("here2---", res);
  const { myPageFirst, loading } = res
  console.log();
  return {
    myPageFirst,
    loading: loading.effects['myPageFirst/fetchBasic'],
  }
})(Index);