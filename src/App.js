import { useState } from 'react';
import './App.css';

function App() {

  const TaskBoxes = ['Unplanned', 'Today', 'Tomorrow', 'This Week', 'Next Week'];

  const initialTask = [
    { id: 1, content: 'This is Task-1', category: 'Unplanned' },
    { id: 2, content: 'This is Task-2', category: 'Unplanned' },
    { id: 3, content: 'This is Task-3', category: 'Unplanned' },
    { id: 4, content: 'This is Task-4', category: 'Unplanned' },
    { id: 5, content: 'This is Task-5', category: 'Unplanned' },
    { id: 6, content: 'This is Task-6', category: 'Unplanned' },
    { id: 7, content: 'This is Task-7', category: 'Unplanned' },
    { id: 8, content: 'This is Task-8', category: 'Unplanned' },
    { id: 9, content: 'This is Task-9', category: 'Unplanned' },
    { id: 10, content: 'This is Task-10', category: 'Unplanned' },
  ]

  const [Tasks, setTasks] = useState(initialTask);
  const [dragTask, setDragTask] = useState(null);

  const DragOver = (e) => {
    e.preventDefault();
  }

  const dragStart = (e, task) =>{
    setDragTask(task)
    }
  
  const handleDrop =(e, category)=>{
    e.preventDefault();
    if(dragTask){
      const newTask = Tasks.map((task) => 
      task.id === dragTask.id ? {...task, category} : task);
      setTasks(newTask);
      setDragTask(null);
    }

  }
  return (
    <>
      <div className="App">
        <h1>Drag And Drop</h1>
        <div className='content'>
          {TaskBoxes.map((taskBox) => (
            <div
              key={taskBox}
              className='taskBox'
              onDragOver={DragOver}
              onDrop={(e) => handleDrop(e, taskBox)}
            >
              <h1>{taskBox}</h1>
              {Tasks.filter(task => task.category === taskBox).map((task) => (
                <div key={task.id}
                  className="task"
                  draggable
                  onDragStart={(e) => dragStart(e, task)}>
                  {task.content}</div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
