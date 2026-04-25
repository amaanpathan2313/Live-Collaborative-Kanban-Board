# 🚀 Live Collaborative Kanban Board

A **real-time collaborative Kanban Board** that allows multiple users to manage tasks visually with seamless drag-and-drop functionality and instant updates.

---

🌐 Live Demo

👉 View Deployed App:
https://cosmic-gecko-d26c93.netlify.app/

## 📌 Overview

This project is a modern implementation of a Kanban board, an agile project management tool used to visualize workflow, track progress, and improve productivity. Kanban boards typically organize tasks into columns like **To Do → In Progress → Done**, helping teams understand project status at a glance.

This application enhances the traditional Kanban system by adding **live collaboration**, enabling multiple users to interact with the board simultaneously.

---

## ✨ Features

* 🧲 Drag & Drop tasks between columns
* ⚡ Real-time collaboration (multi-user updates)
* 📝 Create, edit, and delete tasks
* 📊 Organized workflow (Pending / Completed)
* 🔄 Instant UI updates without refresh
* 💾 Persistent data storage (localStorage)
* 🔍 Tag-based search & filtering (debounced)
* 🎯 Clean and responsive UI

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Redux Toolkit (State Management)
* CSS / Tailwind (UI Styling)

 

## 🧠 How It Works

* Tasks are represented as **cards**
* Columns represent **workflow stages**
* Users can:

  * Drag tasks across columns
  * Update task status instantly
  * Collaborate with others in real time
* State is managed globally using Redux for predictable updates

---

## 📂 Project Structure

```
src/
 ├── components/
 │    └── Todo/
 │         ├── Todo.jsx
 │         └── Todo.css
 ├── features/
 │    └── todoSlice.js
 ├── hooks/
 │    └── useDebounce.js
 ├── app/
 │    └── store.js
 ├── App.jsx
 └── main.jsx
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/amaanpathan2313/Live-Collaborative-Kanban-Board.git
```

### 2️⃣ Navigate to project folder

```bash
cd Live-Collaborative-Kanban-Board
```

### 3️⃣ Install dependencies

```bash
npm install
```

### 4️⃣ Start development server

```bash
npm run dev
```

---

## 🚀 Usage

* Add a new task using the form
* Drag tasks between columns
* Use search to filter tasks by tags
* Collaborate in real-time (if backend enabled)

---

## 📸 Screenshots (Add here)


---

## 🔮 Future Improvements

* 👥 User authentication
* 📅 Due dates & reminders
* 📊 Analytics dashboard
* 📌 Priority labels
* 📱 Mobile optimization
* 🌐 Deployment (Vercel + Render)

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repo
2. Create a new branch
3. Commit your changes
4. Push and create a PR

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Amaan Pathan**

* GitHub: https://github.com/amaanpathan2313

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!

---

