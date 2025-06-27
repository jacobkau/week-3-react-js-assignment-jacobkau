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
=======
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19861106&assignment_repo_type=AssignmentRepo)

# React.js and Tailwind CSS Assignment

This assignment focuses on building a responsive React application using JSX and Tailwind CSS, implementing component architecture, state management, hooks, and API integration.

## Assignment Overview

You will:

1. Set up a React project with Vite and Tailwind CSS
2. Create reusable UI components
3. Implement state management using React hooks
4. Integrate with external APIs
5. Style your application using Tailwind CSS

## Getting Started

1. Accept the GitHub Classroom assignment invitation
2. Clone your personal repository that was created by GitHub Classroom
3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

## Files Included

- `Week3-Assignment.md`: Detailed assignment instructions
- Starter files for your React application:
  - Basic project structure
  - Pre-configured Tailwind CSS
  - Sample component templates

## Requirements

- Node.js (v18 or higher)
- npm or yarn
- Modern web browser
- Code editor (VS Code recommended)

## Project Structure

src/
├── components/       # Reusable UI components
├── pages/           # Page components
├── hooks/           # Custom React hooks
├── context/         # React context providers
├── api/             # API integration functions
├── utils/           # Utility functions
└── App.jsx          # Main application component

npm install
```
src/
├── components/       # Reusable UI components
├── pages/           # Page components
├── hooks/           # Custom React hooks
├── context/         # React context providers
├── api/             # API integration functions
├── utils/           # Utility functions
└── App.jsx          # Main application component
```

## Submission

Your work will be automatically submitted when you push to your GitHub Classroom repository. Make sure to:

1. Complete all required components and features
2. Implement proper state management with hooks
3. Integrate with at least one external API
4. Style your application with Tailwind CSS
5. Deploy your application and add the URL to your README.md

## Resources
>>>>>>> c63556ecf6f19f54f734c889275962181f55f81e

- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/guide/)


---

© 2025 Task Manager. All rights reserved.
=======
- [React Router Documentation](https://reactrouter.com/)
>>>>>>> c63556ecf6f19f54f734c889275962181f55f81e
