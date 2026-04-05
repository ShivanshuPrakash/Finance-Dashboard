import { useState } from "react";
import Dashboard from "./components/Dashboard";
import LoginScreen from "./components/LoginScreen";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState("Admin"); // Default role "Admin"
  const [isDarkMode, setIsDarkMode] = useState(false); 

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  // Function to switch themes
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  if (!isLoggedIn) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  return (
   
    <div className={isDarkMode ? "dark" : ""}>
     <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
        <Dashboard 
          onLogout={handleLogout} 
          userRole={userRole} 
          setUserRole={setUserRole} 
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />
      </div>
    </div>
  );
};

export default App;