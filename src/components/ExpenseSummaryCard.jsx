import React from 'react';

const ExpenseSummaryCard = ({ label, amount, icon: Icon, colorClass, iconColor }) => {
  return (
    <div 
      className={`p-5 rounded-2xl flex items-end justify-between cursor-pointer transition-all duration-300 hover:scale-[1.02] border border-transparent dark:border-zinc-800 ${colorClass ? colorClass : "bg-amber-200"}`}
    >
      <div className="flex flex-col justify-between h-full space-y-8">
        <div>
          
          <p className="text-sm text-zinc-600 dark:text-zinc-300 mb-1 font-medium">
            {label}
          </p>
          
         
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white transition-colors">
            {amount}
          </h2>
        </div>

       
        <div className="p-2 rounded-xl bg-white/80 dark:bg-zinc-950/40 w-fit shadow-sm">
          {Icon && <Icon size={20} className={iconColor} />}
        </div>
      </div>

      {/*  glass effect */}
      <div className="p-3 rounded-xl bg-white/40 dark:bg-zinc-950/20 backdrop-blur-md flex items-center justify-center shrink-0 border border-white/20 dark:border-zinc-700/30">
        {Icon && <Icon size={24} className="text-zinc-800 dark:text-zinc-100" />}
      </div>
    </div>
  );
};

export default ExpenseSummaryCard;