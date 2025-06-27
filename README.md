# Task Manager

A responsive React.js application for managing tasks, built with Vite and styled using Tailwind CSS. This project demonstrates component-based architecture, state management with React hooks, API integration, and modern UI/UX best practices.

## 🚀 Features

- **Task Management:** Add, complete, delete, and filter tasks (All, Active, Completed)
- **Persistent Storage:** Tasks are saved in localStorage for data persistence
- **Reusable Components:** Includes Button, Card, Navbar, Footer, and more
- **API Integration:** Fetch and display data from a public API (see `posts.jsx`)
- **Theme Switcher:** Toggle between light and dark mode using Tailwind's dark mode
- **Responsive Design:** Mobile-first layout with adaptive components
- **Clean Code:** Organized structure following React and Tailwind best practices

## 📁 Project Structure

```bash
Task-Manager/
├── public/                 # Static assets
├── src/
│   ├── assets/             # Images and SVGs
│   ├── components/         # UI and feature components
│   │   ├── posts.jsx       # API data display component
│   │   ├── TaskManager.jsx # Main task manager component
│   │   └── ui/             # Reusable UI elements (button, card, etc.)
│   ├── context/            # React context providers (e.g., ThemeContext)
│   ├── hooks/              # Custom React hooks (e.g., useLocalStorage)
│   ├── lib/                # Utility functions
│   ├── App.jsx             # Main application component
│   ├── main.jsx            # Entry point
│   └── App.css             # Global styles
├── index.html              # HTML template
├── package.json            # Project metadata and scripts
├── vite.config.js          # Vite configuration
└── README.md               # Project documentation
```

## 🛠️ Getting Started

1. **Install dependencies:**

   ```sh
   npm install
   ```

2. **Start the development server:**

   ```sh
   npm run dev
   ```

3. **Open your browser:**  
   Visit [http://localhost:5173](http://localhost:5173) to view the app.

## 🧩 Key Components

- `src/components/TaskManager.jsx`: Core task management logic and UI
- `src/components/posts.jsx`: Fetches and displays API data
- `src/components/ui/button.jsx`: Reusable button component
- `src/context/ThemeContext.jsx`: Theme (light/dark) context provider
- `src/hooks/useLocalStorage.js`: Custom hook for localStorage state

## 🌐 Deployment

You can deploy this app to Vercel, Netlify, or GitHub Pages.  
Build for production with:

```sh
npm run build
```

## 📸 Screenshots

![Screenshot 1](./screenshots/1.png)
![Screenshot 2](./screenshots/2.png)
![Screenshot 2](./screenshots/3.png)

## 📚 Resources

- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/guide/)

---

© 2025 Task Manager. All rights reserved.
