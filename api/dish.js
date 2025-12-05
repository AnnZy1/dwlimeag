import request from './index'

/**
 * 菜品管理API
 */

/**
 * 菜品列表查询
 */
export function getDishList(params) {
  return request({
    url: '/admin/dish/list',
    method: 'get',
    params
  })
}

/**
 * 新增菜品
 */
export function saveDish(data) {
  return request({
    url: '/admin/dish/save',
    method: 'post',
    data
  })
}

/**
 * 修改菜品
 */
export function updateDish(data) {
  return request({
    url: '/admin/dish/update',
    method: 'put',
    data
  })
}

/**
 * 删除菜品
 */
export function deleteDish(id) {
  return request({
    url: `/admin/dish/delete/${id}`,
    method: 'delete'
  })
}

/**
 * 批量操作
 */
export function batchDish(data) {
  return request({
    url: '/admin/dish/batch',
    method: 'post',
    data
  })
}

/**
 * 导入菜品
 */
export function importDish(data) {
  return request({
    url: '/admin/dish/import',
    method: 'post',
    data,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}

/**
 * 导出菜品
 */
export function exportDish(params) {
  return request({
    url: '/admin/dish/export',
    method: 'get',
    params,
    responseType: 'blob'
  })
}

