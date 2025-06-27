import { useState } from "react";
import "./App.css";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import { Footer } from "./components/ui/footer";
import Posts from './components/Posts';
import TaskManager from "./components/TaskManager";

import { useTheme } from "@/context/ThemeContext";

const DarkModeToggle = () => {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="absolute top-4 right-4 px-3 py-1 rounded bg-gray-800 text-white z-50"
    >
      {darkMode ? "Light" : "Dark"} Mode
    </button>
  );
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 relative">
      <DarkModeToggle />
       <nav className="bg-white dark:bg-gray-900 px-6 py-3 shadow">
      <NavigationMenu>
        <NavigationMenuList className="flex gap-6 relative">

          {/* Item One */}
          <NavigationMenuItem className="relative">
            <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
            <NavigationMenuContent className="absolute top-full left-0 mt-2 min-w-[200px] bg-white dark:bg-gray-800 shadow rounded">
              <NavigationMenuLink href="/item-one-a" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                Home
              </NavigationMenuLink>
              <NavigationMenuLink href="/item-one-b" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                About us
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Item Two */}
          <NavigationMenuItem className="relative">
            <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
            <NavigationMenuContent className="absolute top-full left-0 mt-2 min-w-[200px] bg-white dark:bg-gray-800 shadow rounded">
              <NavigationMenuLink href="/docs" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                Documentation
              </NavigationMenuLink>
              <NavigationMenuLink href="/tutorials" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                Tutorials
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Item Three */}
          <NavigationMenuItem className="relative">
            <NavigationMenuTrigger>Account</NavigationMenuTrigger>
            <NavigationMenuContent className="absolute top-full left-0 mt-2 min-w-[200px] bg-white dark:bg-gray-800 shadow rounded">
              <NavigationMenuLink href="/settings" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                Settings
              </NavigationMenuLink>
              <NavigationMenuLink href="/logout" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                Logout
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>

        </NavigationMenuList>
      </NavigationMenu>
    </nav>

      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">PLP Task Manager</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {/* Counter (Demo/Test Section) */}
        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6 mb-8">
          <div className="flex flex-col items-center justify-center">
            <p className="text-lg mb-4">
              Edit{" "}
              <code className="font-mono bg-gray-200 dark:bg-gray-700 p-1 rounded">
                src/App.jsx
              </code>{" "}
              and save to test HMR
            </p>
            <div className="flex items-center gap-4 my-4">
              <button
                onClick={() => setCount((count) => count - 1)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
              >
                -
              </button>
              <span className="text-xl font-bold">{count}</span>
              <button
                onClick={() => setCount((count) => count + 1)}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* ✅ Task Manager */}
        <TaskManager />

        {/* Placeholder for API Data */}
        <div className="mt-8 bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">API Data</h2>
          <p className="text-gray-500 dark:text-gray-400">
            <Posts />
          </p>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
