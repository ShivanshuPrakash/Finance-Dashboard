import React from 'react';
import { 
  DollarSign, 
  LayoutDashboard, 
  TrendingUp, 
  Wallet, 
  PieChart, 
  LogOut,
  Bell,       
  Settings,    
  HelpCircle
} from "lucide-react";
import NavItem from './Navitem';

const Sidebar = ({ activeTab, setActiveTab, onLogout }) => {

  const tabs = [
    { key: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, tabName: 'Dashboard' },
    { key: 'accounts', label: 'Accounts', icon: Wallet, tabName: 'Accounts' }, 
    { key: 'transactions', label: 'Transactions', icon: DollarSign, tabName: 'Transactions', notifications: 3 },
    { key: 'investments', label: 'Investments', icon: TrendingUp, tabName: 'Investments' },
    { key: 'notifications', label: 'Notifications', icon: Bell, tabName: 'Notifications', notifications: 5 }, 
    { key: 'settings', label: 'Settings', icon: Settings, tabName: 'Settings' }, 
    { key: 'help', label: 'Help & Support', icon: HelpCircle, tabName: 'Help & Support' }, 
  ];

  const handleClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="flex flex-col h-full bg-white dark:bg-zinc-950 transition-colors duration-300">
      
      {/* Logo Section */}
      <div className="flex items-center space-x-2 mb-8 px-2">
        <div className="bg-zinc-900 dark:bg-zinc-100 p-2 rounded-lg transition-colors">
          <DollarSign size={24} className="text-white dark:text-zinc-900" />
        </div>
        <span className="text-xl font-bold text-zinc-900 dark:text-white">Finance</span>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 space-y-2">
        {tabs.map((tab) => (
          <NavItem 
            key={tab.key} 
            activeTab={activeTab} 
            onTabClick={handleClick} 
            {...tab} 
          />
        ))}
      </nav>

      {/* Bottom Section */}
      <div className="mt-auto pt-6 border-t border-zinc-100 dark:border-zinc-800">
        
        {/* Log Out Button  */}
        <button 
          onClick={onLogout}
          className="w-full flex items-center justify-center space-x-2 p-3 rounded-xl text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/10 hover:bg-red-100 dark:hover:bg-red-900/20 transition-all cursor-pointer font-medium mb-4"
        >
          <LogOut size={20} />
          <span>Log Out</span>
        </button>
        
        {/*Upsell Card  */}
        <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 p-4 rounded-2xl text-center shadow-sm">
          <div className="bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-full inline-flex mb-3">
            <DollarSign size={24} className="text-emerald-600 dark:text-emerald-400" />
          </div>
          
          <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Unlock Premium</p>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-3">$9.99/month</p>

          <button className="w-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-sm font-bold py-2.5 rounded-xl hover:bg-zinc-800 dark:hover:bg-white transition-all cursor-pointer">
            Explore plans
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;