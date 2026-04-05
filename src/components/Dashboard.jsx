import React, { useState } from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import RightPanel from './RightPanel';
import { Menu, X } from 'lucide-react';

const DashboardLayout = ({ onLogout, userRole, setUserRole, isDarkMode, toggleDarkMode }) => {
  const [activeTab, setactiveTab] = useState("Dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className={`flex h-screen w-full overflow-hidden bg-zinc-50 dark:bg-zinc-950 transition-colors ${isDarkMode ? 'dark' : ''}`}>
      
      {/* 1. MOBILE ke tabs wala code */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] lg:hidden transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* 2. SIDEBAR - */}
      <aside className={`
        fixed inset-y-0 left-0 z-[110] w-64 xl:w-72 flex-shrink-0 bg-white dark:bg-zinc-900 border-r dark:border-zinc-800 
        transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:relative lg:block
      `}>
        <button 
          className="lg:hidden absolute right-4 top-4 p-2 text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full"
          onClick={() => setIsSidebarOpen(false)}
        >
          <X size={20} />
        </button>
        
        <div className="p-4 xl:p-6 h-full overflow-y-auto">
          <Sidebar activeTab={activeTab} setActiveTab={setactiveTab} onLogout={onLogout}/> 
        </div>
      </aside>

     
      <main className="flex-1 flex flex-col min-w-0 h-full overflow-hidden">
        
       
        <div className="lg:hidden flex items-center justify-between p-4 bg-white dark:bg-zinc-900 border-b dark:border-zinc-800 z-50">
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg text-zinc-600 dark:text-zinc-300"
          >
            <Menu size={24} />
          </button>
          <span className="font-bold dark:text-white text-sm">Finance Dashboard</span>
          <button onClick={toggleDarkMode} className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </div>

        {/* Scrollable*/}
        <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 md:p-6 xl:p-8 custom-scrollbar">
          <div className="max-w-[1400px] mx-auto w-full">
            {activeTab === "Dashboard" ? (
              <MainContent 
                userRole={userRole} 
                setUserRole={setUserRole} 
                isDarkMode={isDarkMode} 
                toggleDarkMode={toggleDarkMode} 
              />
            ) : (
              <div className="flex items-center justify-center h-96 text-zinc-400 italic font-medium">
                {activeTab} Section Coming Soon...
              </div>
            )}
          </div>
        </div>
      </main>

      {/* {/* 4. RIGHT PANEL  */}
      <aside className="hidden xl:flex w-72 2xl:w-80 flex-shrink-0 bg-white dark:bg-zinc-950 border-l dark:border-zinc-900 h-full flex-col overflow-y-auto transition-all">
        <div className="p-4 2xl:p-6">
          <RightPanel/>
        </div>
      </aside>
    </div>
  );
};

export default DashboardLayout;