import { useEffect, useState } from 'react';

const DarkModeToggle = () => {
  // On first load, check localStorage for the user's preference
  const [darkMode, setDarkMode] = useState(() => {
    const storedPreference = localStorage.getItem('darkMode');
    return storedPreference === 'true'; // Convert stored value back to boolean
  });

  // Whenever darkMode changes, store the preference in localStorage
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);
  return (
    <div className="">
      <button
        className="p-2 m-4 bg-gray-200 dark:bg-gray-800 dark:text-white"
        onClick={() => setDarkMode(!darkMode)}>
        Toggle Dark Mode
      </button>
      <h1 className="text-black dark:text-white">
        Hello, Tailwind with Dark Mode!
      </h1>
    </div>
  );
};

export default DarkModeToggle;
