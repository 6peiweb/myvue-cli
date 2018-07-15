/*
 * 初始化全局依赖的一些工具类
 */

import axios from '_axios@0.18.0@axios'

window['ILib'] = {
  http: axios.create({
    timeout: 10 * 1000,
    headers: { 'X-Requested-With': 'XMLHttpRequest' }
  })
}
