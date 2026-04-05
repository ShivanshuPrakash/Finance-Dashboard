import React from 'react';

const ListItemCard = ({ title, subtitle, value, valueColor, src }) => {
  return (
    <div className="flex items-center justify-between cursor-pointer bg-white p-4 hover:shadow-2xl hover:shadow-zinc-200/80 transition-all duration-100 ease-in rounded-xl">
      
      <div className="flex items-center gap-4">
        {/* Profile/Image Section */}
        <div className="size-10 bg-zinc-200 rounded-full flex items-center justify-center overflow-hidden shrink-0">
          {src ? (
            <img src={src} alt="profile" className="size-full object-cover" />
          ) : (
            <span className="text-xs text-zinc-500 font-bold uppercase">DP</span>
          )}
        </div>

        {/* Text Content */}
        <div>
          <p className="text-sm font-medium text-zinc-900 ">
            {title}
          </p>
          <p className="text-xs text-zinc-500">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Value/Price Section */}
      <div>
        <span className={`text-sm font-semibold ${valueColor ? valueColor : "text-zinc-900"}`}>
          {value}
        </span>
      </div>

    </div>
  );
};

export default ListItemCard;