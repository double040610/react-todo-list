import { useStore } from '../store'
import { observer } from 'mobx-react-lite'
import './index.css'

function Cart() {
  const { taskStore } = useStore()
  // 单选
  const singleCheck = (id, e) => {
    taskStore.singleCheck(id, e.target.checked)
  }
  // 删除
  const delCart = (id) => {
    taskStore.delCart(id)
  }
  // 全选
  const allCheck = (e) => {
    taskStore.allCheck(e.target.checked)
  }
  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          autoFocus
          autoComplete="off"
          placeholder="What needs to be done?"

        />
      </header>
      <section className="main">
        <input
          id="toggle-all"
          className="toggle-all"
          type="checkbox"
          onChange={allCheck}
          checked={taskStore.isAll}
        />
        <label htmlFor="toggle-all"></label>
        <ul className="todo-list">
          {
            taskStore.list.map(task => (
              <li
                key={task.id}
                className={task.done ? 'completed todo' : 'todo'}
              >
                <div className="view">
                  <input
                    className="toggle"
                    type="checkbox"
                    checked={task.done}
                    onChange={(e) => singleCheck(task.id, e)} />
                  <label > {task.title} </label>
                  <button className="destroy" onClick={() => delCart(task.id)}></button>
                </div>
              </li>
            ))
          }
        </ul>
      </section>
      <footer class="footer">
        <span class="todo-count">
          任务总数: {taskStore.list.length} 已完成: {taskStore.isFinished}
        </span>
      </footer>
    </section>
  )
}

export default observer(Cart)