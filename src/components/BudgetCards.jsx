import React from 'react';

const BudgetCard = ({ title, spent, total, colorClass, icon: Icon }) => {
  const percentage = Math.min((spent / total) * 100, 100);
  const isHighAlert = percentage > 90;

  return (
    <div className="group bg-white p-5 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out">
      {/* Top Section: Icon & Amounts */}
      <div className="flex items-start justify-between mb-5">
        <div className="flex items-center gap-3">
          <div className={`p-2.5 rounded-xl bg-zinc-50 group-hover:scale-110 transition-transform duration-300`}>
            {Icon && <Icon size={22} className="text-zinc-700" />}
          </div>
          <div>
            <h4 className="text-sm font-bold text-zinc-900 leading-tight">{title}</h4>
            <p className="text-[11px] text-zinc-400 font-medium">Monthly Plan</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm font-bold text-zinc-900">${spent.toLocaleString()}</p>
          <p className="text-[11px] text-zinc-400">of ${total.toLocaleString()}</p>
        </div>
      </div>

      {/* Progress Bar with Glow Effect */}
      <div className="relative">
        <div className="w-full h-2.5 bg-zinc-100 rounded-full overflow-hidden">
          <div 
            className={`h-full rounded-full ${colorClass} transition-all duration-1000 ease-in-out relative`}
            style={{ width: `${percentage}%` }}
          >
            {/* Glossy overlay on the progress bar */}
            <div className="absolute inset-0 bg-white/20 w-full h-full skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </div>
        </div>
      </div>

      {/* Footer: Stats & Warning */}
      <div className="mt-4 flex justify-between items-center">
        <div className="flex items-center gap-1.5">
          <div className={`size-1.5 rounded-full ${isHighAlert ? 'bg-red-500 animate-pulse' : 'bg-emerald-500'}`}></div>
          <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-tighter">
            {percentage.toFixed(0)}% Utilized
          </span>
        </div>
        
        {isHighAlert ? (
          <span className="text-[10px] px-2 py-0.5 bg-red-50 text-red-600 font-black rounded-md animate-bounce">
            CRITICAL
          </span>
        ) : (
          <span className="text-[10px] px-2 py-0.5 bg-emerald-50 text-emerald-600 font-bold rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
            SAFE
          </span>
        )}
      </div>
    </div>
  );
};

export default BudgetCard;