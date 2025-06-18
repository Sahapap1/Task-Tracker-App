const taskName = '';

export const loadTasks = () => {
  try {
    const data = localStorage.getItem(taskName);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Failed to load tasks from localStorage', error);
    return [];
  }
};

export const saveTasks = (tasks) => {
  try {
    localStorage.setItem(taskName, JSON.stringify(tasks));
  } catch (error) {
    console.error('Failed to save tasks to localStorage', error);
  }
};