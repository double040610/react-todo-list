
import { makeAutoObservable } from 'mobx'
class TaskStore {
  list = [
    {
      id: 1,
      title: '學習React',
      done: false
    },
    {
      id: 2,
      title: '理解Mobx',
      done: false
    },
    {
      id: 3,
      title: '運用Hooks',
      done: false
    },
    {
      id: 4,
      title: '前端開發之路！',
      done: false
    }

  ]
  constructor() {
    makeAutoObservable(this)
  }
  get isFinished () {
  return this.list.filter(item => item.done).length
}
  get isAll () {
  return this.list.every(item => item.done)
  }
  // 单选
  singleCheck (id, checked) {
    const target = this.list.find(item => item.id === id)
    target.done = checked
  }
  // 删除
  delCart (id) {
    this.list = this.list.filter(item => item.id !== id)
  }
  // 全选
  allCheck (checked) {
    this.list.forEach(item => item.done = checked)
  }
  // 添加任务
  addTask (newTask) {
    this.list.push(newTask)
  }
}
export default TaskStore
