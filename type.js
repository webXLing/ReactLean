/*
 * @Author: web_XL
 * @Date: 2021-06-10 09:36:14
 * @LastEditors: web_XL
 * @LastEditTime: 2021-06-10 09:40:39
 * @Description:
 */
Object.prototype.toString({}) // '[object Object]'
Object.prototype.toString.call({}) // '[object Object]'
Object.prototype.toString.call('a') // '[object String]'
Object.prototype.toString.call(1) // '[object Number]'
Object.prototype.toString.call(true) // '[object Boolean]'
Object.prototype.toString.call(null) // '[object Null]'
Object.prototype.toString.call(undefined) // '[object Undefined]'
Object.prototype.toString.call(Symbol('a')) // '[object Symbol]'
Object.prototype.toString.call(11n) // '[object BigInt]'
Object.prototype.toString.call(/a/) // '[object RegExp]'
Object.prototype.toString.call(new Date()) // '[object Date]'
Object.prototype.toString.call([0, 1, 2]) // '[object Array]'
Object.prototype.toString.call(function () { }) // '[object Function]'
Object.prototype.toString.call(new Error()) // '[object Error]'
Object.prototype.toString.call(new Set()) // '[object Set]'
Object.prototype.toString.call(new Map()) // '[object Map]'

Object.prototype.toString.call('1').slice(8, -1).toLowerCase()
// 'string'


const getType = function (obj) {
  let type = typeof obj
  if (type !== 'object') {
    return type
  }
  return Object.prototype.toString.call(obj).replace(/^\[object (\S+)\]$/, '$1').toLowerCase()
}

getType({}) // object
getType('a') // string
getType(1) // number
getType(true) // boolean
getType(null) // null
getType(undefined) // undefined
getType(Symbol('a')) // symbol
getType(11n) // bigint
getType(/a/) // regexp
getType(new Date()) // date
getType([0, 1, 2]) // array
getType(function () { }) // function
getType(new Error()) // error
getType(new Map()) // map
getType(new Set()) // set
