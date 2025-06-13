import { useState } from 'react'; 
const ToDoFunction = () => { 
const [tasks, setTasks] = useState([]); // List of tasks 
const [taskInput, setTaskInput] = useState(''); // Input field state 
// Add Task 
const addTask = () => { 
if (taskInput.trim() !== '') { 
setTasks([...tasks, { text: taskInput, completed: false }]); 
setTaskInput(''); // Clear input field 
} 
}; 
// Toggle Task Completion 
const toggleTask = (index) => { 
const updatedTasks = [...tasks]; 
updatedTasks[index].completed = !updatedTasks[index].completed; 
setTasks(updatedTasks); 
}; 
// Delete Task 
const deleteTask = (index) => { 
const updatedTasks = tasks.filter((_, i) => i !== index); 
setTasks(updatedTasks); 
}; 
return ( 
<div style={styles.container}> 
<h1>React To-Do List</h1> 
{/* Input Field */} 
<div> 
<input 
type="text" 
value={taskInput} 
onChange={(e) => setTaskInput(e.target.value)} 
placeholder="Enter a task..." 
style={styles.input} 
/>
<button onClick={addTask} style={styles.addButton}>Add Task</button> </div> 
{/* Task List */} 
<ul style={styles.list}> 
{tasks.map((task, index) => ( 
<li key={index} style={task.completed ? styles.completedTask : styles.pendingTask}> <span onClick={() => toggleTask(index)} style={{ cursor: 'pointer' }}> 
{index + 1}. {task.completed ? ' ' : ' '} {task.text} 
</span> 
<button onClick={() => deleteTask(index)} style={styles.deleteButton}>Delete </button> 
</li> 
))} 
</ul> 
</div> 
); 
}; 
// Inline Styles 
const styles = { 
container: { 
textAlign: 'center', 
fontFamily: 'Arial, sans-serif', 
marginTop: '50px', 
}, 
input: { 
padding: '10px', 
fontSize: '16px', 
width: '250px', 
}, 
addButton: { 
marginLeft: '10px', 
padding: '10px', 
fontSize: '16px', 
cursor: 'pointer', 
}, 
list: { 
listStyleType: 'none', 
padding: 0, 
marginTop: '20px', 
}, 
pendingTask: { 
padding: '10px', 
fontSize: '18px', 
borderBottom: '1px solid #ddd', 
display: 'flex', 
justifyContent: 'space-between',
alignItems: 'center', 
}, 
completedTask: { 
padding: '10px', 
fontSize: '18px', 
textDecoration: 'line-through', color: 'gray', 
borderBottom: '1px solid #ddd', display: 'flex', 
justifyContent: 'space-between', alignItems: 'center', 
}, 
deleteButton: { 
background: 'red', 
border: 'none', 
fontSize: '18px', 
cursor: 'pointer', 
}, 
}; 
export default ToDoFunction;
