/*
 * @Author: web_XL
 * @Date: 2021-04-20 22:48:34
 * @LastEditors: web_XL
 * @LastEditTime: 2021-04-20 22:48:50
 * @Description:
 */
// react vdom diff 规则
// 1.只进行同级比 不进行跨级比较
// 2.当发现同一节点 变为不同元素  div->span  则直接抛弃该节点下的树 生成新的节点信息 挂载到原来的树上
// 3.当同一节点 元素没有变化 仅改变属性(className 等) 则仅更新属性
// 4.key 的作用在下 相同内容里改变内容顺序 能够提高性能
// - key 需要是唯一的 用index来作key 没有任何提升  应为key发生了改变 