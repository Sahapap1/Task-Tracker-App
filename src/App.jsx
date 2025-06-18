import Navbar from './components/Nav.jsx'
import { Header, Filter } from './components/FilterBar.jsx'
import { TaskList } from './components/TaskList.jsx'
import { loadTasks, saveTasks } from './utils/storage';

import { useState, useEffect } from 'react'

import { Container } from 'react-bootstrap'

function App() {
  const [tasks, setTasks] = useState([]);
  const [filterCategory, setFilterCategory] = useState('All');

  const [filterView, setFilterView] = useState('Today');


  useEffect(() => {
    const storedTasks = loadTasks();
    setTasks(loadTasks());
  }, []);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const addTask = (newTask) => {
    const taskWithCompletionStatus = { ...newTask, isCompleted: newTask.isCompleted ?? false };
    setTasks(prevTasks => [...prevTasks, taskWithCompletionStatus]);
  };

  const updateTask = (updatedTask) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === updatedTask.id ? updatedTask : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };


  const toggleTaskCompletion = (taskId, isCompleted) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, isCompleted: isCompleted } : task
      )
    );
  };


  const todayStart = new Date();
  todayStart.setHours(0, 0, 0, 0);
  const todayEnd = new Date();
  todayEnd.setHours(23, 59, 59, 999);

  let filteredByCatTasks = tasks;



  if (filterCategory !== 'All') {
    displayedTasks = displayedTasks.filter(task => task.category === filterCategory);
  }

  let finalTasksToDisplay = [];

  if (filterView === 'All') {
    finalTasksToDisplay = filteredByCatTasks;
  } else if (filterView === 'Today') {
    finalTasksToDisplay = filteredByCatTasks.filter(task => {
      const taskDate = new Date(task.dateTime);
      return !isNaN(taskDate.getTime()) && taskDate.getTime() >= todayStart.getTime() && taskDate.getTime() <= todayEnd.getTime();
    });
  } else if (filterView === 'Upcoming') {
    finalTasksToDisplay = filteredByCatTasks.filter(task => {
      const taskDate = new Date(task.dateTime);
      return !isNaN(taskDate.getTime()) && taskDate.getTime() > todayEnd.getTime();
    });
  }

  return (
    <>
      <Navbar onAddTask={addTask} />
      <Container className='pt-4 px-5' fluid style={{ backgroundColor: "#EDF2F4", height: "100vh" }}>
        <Header />
        <Filter onSelectCategory={setFilterCategory} onSelectView={setFilterView} currentView={filterView}  />
        {finalTasksToDisplay.length > 0 ? (
          <TaskList
            filter={filterView}
            tasks={finalTasksToDisplay}
            onDeleteTask={deleteTask}
            onUpdateTask={updateTask}
            onCompleteTask={toggleTaskCompletion}
          />
        ) : (
          <p className="text-muted text-center mt-3">
            {filterView === 'All' ? 'No tasks found.' :
             filterView === 'Today' ? 'No tasks today.' :
             'No tasks are upcoming.'}
          </p>
        )}
      </Container>


    </>
  )
}

export default App
