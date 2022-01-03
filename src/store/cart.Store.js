
import { makeAutoObservable } from 'mobx'
class TaskStore {
  list = [
    {
      id: 1,
      title: '学习react',
      done: true
    },
    {
      id: 2,
      title: '搞定mobx',
      done: true
    }
  ]
  constructor() {
    makeAutoObservable(this)
  }
  get isFinished() {
    return this.list.filter(item => item.done).length
  }
  get isAll() {
    return this.list.every(item => item.done)
  }
  // 单选
  singleCheck(id, checked) {
    const target = this.list.find(item => item.id === id)
    target.done = checked
  }
  // 删除
  delCart(id) {
    this.list = this.list.filter(item => item.id !== id)
  }
  // 全选
  allCheck(checked) {
    this.list.forEach(item => item.done = checked)
  }
}
export default TaskStore
