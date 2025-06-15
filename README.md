# 📋 Task Tracker App

A simple and clean React application that helps users manage tasks, categorize them, and track their progress. Ideal for daily planning, studying, and increasing productivity.

![Task Tracker Preview](./preview.png)

---

## 🚀 Features

- ✅ Add new tasks with:
  - Title
  - Category (Work / Personal / Other)
  - Due date and time
- 🗂️ Filter tasks by category
- 🕒 Sort tasks by due date
- ✏️ Edit or delete tasks
- ☑️ Mark tasks as completed
- 🔁 Data persistence with `localStorage`
- 🌓 Light / Dark mode (optional)
- 🔔 5-minute pre-alert notification (optional)

---

## 🛠️ Tech Stack

- ⚛️ React (Functional Components & Hooks)
- 🧠 React Hooks (`useState`, `useEffect`, `useRef`)
- 💾 localStorage for data saving
- 🎨 Bootstrap 5 (via npm)
- 🧪 (Optional) Jest/React Testing Library for unit tests

---

## 📦 Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/task-tracker-app.git

# 2. Navigate to the project directory
cd task-tracker-app

# 3. Install dependencies
npm install

# 4. Start the development server
npm start
```

---

## 📁 Folder Structure

```
src/
├── components/
│   ├── TaskForm.jsx        # Form to add/edit tasks
│   ├── TaskItem.jsx        # Single task card
│   ├── TaskList.jsx        # List of tasks
│   └── FilterBar.jsx       # Category filters
├── utils/
│   └── storage.js          # LocalStorage helper
├── App.jsx
├── index.js
└── styles.css
```

---

## 📌 Usage

1. 📝 Add a task with a title, category, and due time.
2. 🧹 View tasks in list format, sorted by time.
3. 🔍 Use the filter bar to see tasks in a selected category.
4. ✅ Click to mark a task as complete.
5. 🗑️ Delete or edit tasks at any time.
6. 🔁 Refresh the page — your data is still there!

---

## ✨ Optional Features to Build

- ⏰ 5-minute alerts before due time using `setInterval`
- 📊 Stats: How many tasks completed today / week
- 🌗 Light/Dark Mode toggle
- 📥 Import / Export JSON file
- 🔌 API integration using `json-server` or Firebase

---

## 📸 Screenshots

> *(Add screenshots of UI here)*  
> `./screenshots/home.png`  
> `./screenshots/add-task.png`

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 🙌 Acknowledgements

Inspired by productivity tools like Notion, Todoist, and Trello. Built for learning and fun ❤️