import React from 'react';
import { Target, TrendingUp, ChevronRight, Plus } from "lucide-react";

const SavingsGoal = () => {
  // Yeh data  ma baad mein props se bhi le sakte hu
  const goalName = "New MacBook Pro";
  const targetAmount = 2000;
  const savedAmount = 1450;
  const percentage = Math.round((savedAmount / targetAmount) * 100);

  return (
    <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-zinc-100 dark:border-zinc-800 shadow-sm group hover:shadow-md transition-all">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-emerald-50 dark:bg-emerald-500/10 rounded-xl text-emerald-600 dark:text-emerald-400">
            <Target size={20} />
          </div>
          <div>
            <h4 className="text-sm font-bold text-zinc-900 dark:text-white">Savings Goal</h4>
            <p className="text-[11px] text-zinc-500 dark:text-zinc-400 font-medium">Keep it up!</p>
          </div>
        </div>
        <button className="p-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors">
          <ChevronRight size={18} className="text-zinc-400" />
        </button>
      </div>

      {/* Goal Info */}
      <div className="mb-4">
        <div className="flex justify-between items-end mb-2">
          <span className="text-xl font-black text-zinc-900 dark:text-white tracking-tight">
            {goalName}
          </span>
          <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">
            {percentage}%
          </span>
        </div>
        
        {/* Progress Bar Container */}
        <div className="w-full h-3 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden relative">
          {/* Animated Fill */}
          <div 
            className="h-full bg-emerald-500 rounded-full shadow-[0_0_12px_rgba(16,185,129,0.4)] transition-all duration-1000 ease-out relative"
            style={{ width: `${percentage}%` }}
          >
            {/* Shimmer Effect Code */}
            <div className="absolute inset-0 bg-white/20 w-1/2 h-full skew-x-[30deg] -translate-x-full group-hover:translate-x-[250%] transition-transform duration-1000"></div>
          </div>
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="flex justify-between items-center pt-2">
        <div className="space-y-0.5">
          <p className="text-[10px] uppercase tracking-wider font-bold text-zinc-400">Saved</p>
          <p className="text-sm font-bold text-zinc-900 dark:text-white">${savedAmount.toLocaleString()}</p>
        </div>
        <div className="text-right space-y-0.5">
          <p className="text-[10px] uppercase tracking-wider font-bold text-zinc-400">Target</p>
          <p className="text-sm font-bold text-zinc-700 dark:text-zinc-300">${targetAmount.toLocaleString()}</p>
        </div>
      </div>

      {/* Quick Action Button */}
      <button className="w-full mt-6 py-2.5 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-xs font-bold rounded-xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2">
        <Plus size={14} /> Add Savings
      </button>
    </div>
  );
};

export default SavingsGoal;