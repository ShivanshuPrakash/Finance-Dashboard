import React, { useState, useEffect } from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, 
  ResponsiveContainer, PieChart, Pie, Cell, Legend 
} from 'recharts';

const lineData = [
  { name: 'Mon', amount: 400 }, { name: 'Tue', amount: 300 },
  { name: 'Wed', amount: 900 }, { name: 'Thu', amount: 200 },
  { name: 'Fri', amount: 700 }, { name: 'Sat', amount: 1100 },
  { name: 'Sun', amount: 500 }
];

const pieData = [
  { name: 'Food', value: 450, color: '#f59e0b' },
  { name: 'Entertainment', value: 280, color: '#ec4899' },
  { name: 'Subscription', value: 120, color: '#3b82f6' },
  { name: 'Others', value: 150, color: '#10b981' }
];

const SpendingChart = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkTheme = () => setIsDarkMode(document.documentElement.classList.contains('dark'));
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  return (
    
    <div className="grid grid-cols-1 2xl:grid-cols-3 gap-6 w-full">
      
      {/* AREA CHART - Spending Analytics */}
      <div className="2xl:col-span-2 bg-white dark:bg-zinc-900 p-5 rounded-3xl border border-zinc-100 dark:border-zinc-800 shadow-sm flex flex-col min-w-0">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Spending Analytics</h3>
          <select className="bg-zinc-50 dark:bg-zinc-800 text-[10px] font-bold p-2 px-3 rounded-xl border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300">
            <option>Last 7 Days</option>
          </select>
        </div>

       
        <div className="w-full aspect-[2/1] md:aspect-[3/1] lg:aspect-[4/1] 2xl:aspect-auto 2xl:h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={lineData}>
              <defs>
                <linearGradient id="colorAmt" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={isDarkMode ? "#27272a" : "#f4f4f5"} />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: isDarkMode ? '#71717a' : '#a1a1aa' }} dy={10} />
              <YAxis hide />
              <Tooltip 
                contentStyle={{ backgroundColor: isDarkMode ? '#18181b' : '#ffffff', border: 'none', borderRadius: '12px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                itemStyle={{ color: '#3b82f6', fontSize: '12px', fontWeight: 'bold' }}
              />
              <Area type="monotone" dataKey="amount" stroke="#3b82f6" strokeWidth={3} fill="url(#colorAmt)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* PIE CHART  */}
      <div className="bg-white dark:bg-zinc-900 p-5 rounded-3xl border border-zinc-100 dark:border-zinc-800 shadow-sm flex flex-col min-w-0 min-h-[400px]">
        <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-1">Category</h3>
        <p className="text-[10px] text-zinc-500 dark:text-zinc-400 mb-4 uppercase font-bold tracking-widest">Expense Distribution</p>
        
        <div className="flex-1 relative w-full flex flex-col justify-center">
          <div className="h-[220px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={pieData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={8} dataKey="value" stroke="none">
                  {pieData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                </Pie>
                <Tooltip />
                <Legend 
                  verticalAlign="bottom" 
                  align="center"
                  iconType="circle"
                  layout="horizontal"
                  wrapperStyle={{ paddingTop: '20px', fontSize: '10px' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
            <p className="text-[10px] text-zinc-400 font-bold uppercase">Total</p>
            <p className="text-xl font-black text-zinc-900 dark:text-white">$1,000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpendingChart;