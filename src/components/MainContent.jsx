import React, { useState, useMemo } from 'react';
import { Search, Wallet, TrendingUp, CreditCard, Utensils, Tv, CalendarCheck, ArrowRight, Plus, LayoutGrid, Film, Info, Eye, MoreHorizontal } from "lucide-react";
import ExpenseSummaryCard from "./ExpenseSummaryCard";
import ListItemCard from './ListitemCard';
import BudgetCard from './BudgetCards';
import SpendingChart from './SpendingCharts';
import SavingsGoal from './SavingGoal';
import InteractiveCard from './InteractiveCard';
import DownloadReport from './DownloadReport';

const MainContent = ({ userRole, setUserRole, isDarkMode, toggleDarkMode }) => {
  const allTransactions = [
    { id: 1, title: "Subscriptions", subtitle: "Tools and Tech • 12 April", value: -120.00, type: "Expense", src: "user-5.png" },
    { id: 2, title: "Salary Deposit", subtitle: "Fintech Corp • 10 April", value: 4500.00, type: "Income", src: "user-6.png" },
    { id: 3, title: "Groceries Store", subtitle: "Shopping • 08 April", value: -85.20, type: "Expense", src: "user-3.png" },
    { id: 4, title: "Freelance Payment", subtitle: "Upwork • 05 April", value: 800.00, type: "Income", src: "user-4.png" },
    { id: 5, title: "Netflix Monthly", subtitle: "Entertainment • 04 April", value: -15.99, type: "Expense", src: "user-1.png" },
    { id: 6, title: "Starbucks Coffee", subtitle: "Food • 03 April", value: -6.50, type: "Expense", src: "user-2.png" },
  ];

  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTransactions = useMemo(() => {
    return allTransactions.filter(item => {
      const matchesFilter = filter === "All" ? true : item.type === filter;
      const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [filter, searchTerm]);

  return (
    <div className="space-y-8 md:space-y-12 w-full flex flex-col text-zinc-900 dark:text-zinc-100">
      
      {/* 1. Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">Dashboard</h1>
            <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider ${userRole === 'Admin' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' : 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400'}`}>
              {userRole}
            </span>
          </div>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">Welcome back, check your statistics</p>
        </div>
        
        <div className="flex items-center gap-3 self-start sm:self-center">
          <button 
            onClick={toggleDarkMode} 
            className="p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all shadow-sm"
          >
            {isDarkMode ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-600"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>}
          </button>

          <select 
            value={userRole} 
            onChange={(e) => setUserRole(e.target.value)}
            className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white rounded-xl px-3 py-2.5 text-xs font-bold outline-none cursor-pointer shadow-sm"
          >
            <option value="Admin">Admin Role</option>
            <option value="Viewer">Viewer Role</option>
          </select>
          <DownloadReport />
        </div>
      </div>

      {/* 2. Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <InsightBox icon={Info} title="Spending Insight" desc="Highest spending was in Design Tools. You've used 75% of food budget." color="blue" />
        <InsightBox icon={TrendingUp} title="Savings Milestone" desc="Your savings are 12% higher than last month. Great job!" color="emerald" />
      </div>

      {/* 3. Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-4 gap-6">
        <InteractiveCard />
        <ExpenseSummaryCard 
          label="Total Balance" 
          amount="$12,450.00" 
          icon={Wallet} 
          colorClass="bg-emerald-50 dark:bg-emerald-500/10 dark:border dark:border-emerald-500/20" 
          iconColor="text-emerald-600 dark:text-emerald-400" 
        />
        <ExpenseSummaryCard 
          label="Total Income" 
          amount="$8,200.00" 
          icon={TrendingUp} 
          colorClass="bg-blue-50 dark:bg-blue-500/10 dark:border dark:border-blue-500/20" 
          iconColor="text-blue-600 dark:text-blue-400" 
        />
        <ExpenseSummaryCard 
          label="Total Expenses" 
          amount="$3,150.00" 
          icon={CreditCard} 
          colorClass="bg-orange-50 dark:bg-orange-500/10 dark:border dark:border-orange-500/20" 
          iconColor="text-orange-600 dark:text-orange-400" 
        />
      </div>

      {/* 4. Budget Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold flex items-center gap-2 text-zinc-900 dark:text-white">
            <LayoutGrid size={18} className="text-blue-600 dark:text-blue-400" /> Spending Goals
          </h3>
          {userRole === "Admin" ? (
            <button className="flex items-center gap-2 px-4 py-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-xs font-bold rounded-xl hover:scale-105 transition-all shadow-lg active:scale-95">
              <Plus size={14} /> NEW BUDGET
            </button>
          ) : (
            <span className="text-[10px] text-zinc-400 dark:text-zinc-500 flex items-center gap-1 uppercase tracking-widest font-bold"> <Eye size={12} /> View Only</span>
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <BudgetCard title="Food" spent={450} total={600} icon={Utensils} colorClass="bg-gradient-to-r from-orange-400 to-amber-400" />
          <BudgetCard title="Fun" spent={280} total={300} icon={Film} colorClass="bg-gradient-to-r from-purple-500 to-pink-500" />
          <BudgetCard title="Bills" spent={120} total={150} icon={Tv} colorClass="bg-gradient-to-r from-blue-500 to-cyan-500" />
        </div>
      </div>

      {/* 5. Charts Section */}
      <div className="w-full bg-white dark:bg-zinc-900/40 rounded-3xl border border-zinc-100 dark:border-zinc-800 p-2 md:p-6 shadow-sm">
        <SpendingChart />
      </div>

      {/* 6. Transactions & Sidebar Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-10">
        <div className="lg:col-span-2 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Recent Activity</h3>
            <div className="flex items-center gap-2">
               <div className="relative flex-1 sm:flex-initial">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
                <input 
                  type="text" 
                  placeholder="Search..." 
                  value={searchTerm} 
                  onChange={(e)=>setSearchTerm(e.target.value)} 
                  className="w-full sm:w-40 focus:sm:w-56 pl-9 pr-3 py-2 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl text-xs outline-none transition-all focus:ring-2 ring-blue-500/20 text-zinc-900 dark:text-white" 
                />
               </div>
               <div className="flex gap-1 bg-zinc-200/50 dark:bg-zinc-800 p-1 rounded-xl">
                {["All", "Income", "Expense"].map((tab) => (
                  <button key={tab} onClick={() => setFilter(tab)} className={`px-3 py-1.5 text-[10px] font-bold rounded-lg transition-all ${filter === tab ? "bg-white dark:bg-zinc-700 text-blue-600 shadow-sm" : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-700"}`}>{tab}</button>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-3 bg-white dark:bg-zinc-900/40 p-4 rounded-3xl border border-zinc-100 dark:border-zinc-800 shadow-sm">
            {filteredTransactions.length > 0 ? filteredTransactions.map((item) => (
              <ListItemCard key={item.id} {...item} value={`${item.value > 0 ? '+' : ''}$${Math.abs(item.value).toFixed(2)}`} valueColor={item.type === "Income" ? "text-emerald-500" : "text-red-500"} />
            )) : <div className="py-12 text-center text-zinc-400 text-xs italic">No transactions found matching your search.</div>}
          </div>
        </div>

        <div className="space-y-8">
          <SavingsGoal />
          <div className="space-y-4">
             <div className="flex items-center justify-between px-1">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Scheduled</h3>
                {userRole === "Admin" && <Plus size={18} className="cursor-pointer text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors" />}
             </div>
             <div className="bg-white dark:bg-zinc-900 p-5 rounded-3xl border border-zinc-100 dark:border-zinc-800 divide-y dark:divide-zinc-800 shadow-sm">
                <ScheduledItem title="Monthly Rent" date="May 01" amount="$1,200" icon={CalendarCheck} />
                <ScheduledItem title="Electricity" date="May 05" amount="$85" icon={CalendarCheck} />
                <ScheduledItem title="Wifi bill" date="May 02" amount="$50" icon={CalendarCheck} />
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const InsightBox = ({ icon: Icon, title, desc, color }) => {
 
  const colors = {
    blue: "bg-blue-50 dark:bg-blue-900/20 border-blue-100 dark:border-blue-800/40 text-blue-600 dark:text-blue-400 text-blue-900 dark:text-blue-100 text-blue-700 dark:text-blue-300",
    emerald: "bg-emerald-50 dark:bg-emerald-900/20 border-emerald-100 dark:border-emerald-800/40 text-emerald-600 dark:text-emerald-400 text-emerald-900 dark:text-emerald-100 text-emerald-700 dark:text-emerald-300"
  };

  return (
    <div className={`p-4 rounded-2xl flex items-start gap-3 border transition-all ${color === 'blue' ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-100 dark:border-blue-800/30' : 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-100 dark:border-emerald-800/30'}`}>
      <Icon className={color === 'blue' ? 'text-blue-600 dark:text-blue-400 mt-1' : 'text-emerald-600 dark:text-emerald-400 mt-1'} size={20} />
      <div>
        <p className={`text-sm font-bold ${color === 'blue' ? 'text-blue-900 dark:text-blue-300' : 'text-emerald-900 dark:text-emerald-300'}`}>{title}</p>
        <p className={`text-xs ${color === 'blue' ? 'text-blue-700 dark:text-blue-400/80' : 'text-emerald-700 dark:text-emerald-400/80'}`}>{desc}</p>
      </div>
    </div>
  );
};

const ScheduledItem = ({ title, date, amount, icon: Icon }) => (
  <div className="flex items-center justify-between py-4 first:pt-0 last:pb-0">
    <div className="flex items-center gap-3">
      <div className="p-2 bg-zinc-50 dark:bg-zinc-800 rounded-xl shadow-sm border border-zinc-100 dark:border-zinc-700">
        <Icon size={18} className="text-blue-600 dark:text-blue-400" />
      </div>
      <div>
        <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">{title}</p>
        <p className="text-xs text-zinc-500 dark:text-zinc-400">{date}</p>
      </div>
    </div>
    <div className="flex items-center gap-3 font-bold text-sm text-zinc-900 dark:text-zinc-100">
      {amount} <ArrowRight size={14} className="text-zinc-400" />
    </div>
  </div>
);

export default MainContent;