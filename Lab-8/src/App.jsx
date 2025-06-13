import './App.css'
import { useState } from 'react'
const App =() => {
  const [tasks, setTasks] = useState([])
  const [taskName, setTaskName] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [filter, setFilter] = useState('all')

  const handleAddTask = (e) => {
    e.preventDefault()
    if (!taskName || !dueDate) return

    const newTask = { id: Date.now(), taskName, dueDate, completed: false }
    setTasks(prev => [...prev, newTask])
    setTaskName('')
    setDueDate('')
  }

  const toggleCompletion = (id) => {
    setTasks(prev =>
      prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t)
    )
  }

  const filteredTasks = tasks.filter(t => {
    if (filter === 'completed') return t.completed
    if (filter === 'incomplete') return !t.completed
    return true
  })

  return (
    <div className="reminder-container">
      <h1 className="title">Reminder App</h1>

      <form className="task-form" onSubmit={handleAddTask}>
        <input
          className="task-input"
          type="text"
          value={taskName}
          onChange={e => setTaskName(e.target.value)}
          placeholder="Task Name"
          required
        />
        <input
          className="date-input"
          type="date"
          value={dueDate}
          onChange={e => setDueDate(e.target.value)}
          required
        />
        <button className="add-btn" type="submit">Add</button>
      </form>

      <div className="filter-group">
        {['all','completed','incomplete'].map(f => (
          <button
            key={f}
            className={`filter-btn ${filter===f?'active':''}`}
            onClick={() => setFilter(f)}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      <ul className="task-list">
        {filteredTasks.map(task => (
          <li key={task.id} className="task-item">
            <span className={`task-name ${task.completed ? 'completed' : ''}`}>
              {task.taskName} &mdash; {task.dueDate}
            </span>
            <button
              className="toggle-btn"
              onClick={() => toggleCompletion(task.id)}
            >
              {task.completed ? 'Undo' : 'Done'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App