import React from 'react';

const AccountCard = ({ name, description, Icon, iconColor, actionLabel, actionColor, bgColor }) => {
  return (
    <div className="flex items-center cursor-pointer justify-between bg-white p-4 rounded-xl card-hover shadow-sm hover:shadow-md transition-all">
      
      <div className="flex items-center space-x-3">
        {/* Icon Container */}
        <div 
          className={`w-9 h-9 ${bgColor ? bgColor : "bg-zinc-200"} rounded-full flex items-center justify-center overflow-hidden shrink-0`}
        >
          {Icon ? (
            <Icon className={`${iconColor ? iconColor : "text-zinc-600"}`} size={18} />
          ) : (
            <span className="text-xs text-zinc-500 font-bold h-full flex items-center justify-center">
              DP
            </span>
          )}
        </div>

        {/* Text Content */}
        <div>
          <p className="text-sm font-medium text-zinc-900 leading-tight">
            {name}
          </p>
          <p className="text-xs text-zinc-600">
            {description}
          </p>
        </div>
      </div>

   {/*  */}
      {actionLabel && (
        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${actionColor ? actionColor : "bg-zinc-100 text-zinc-600"}`}>
          {actionLabel}
        </span>
      )}

    </div>
  );
};

export default AccountCard;