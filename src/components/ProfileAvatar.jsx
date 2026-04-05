import React from 'react';

const ProfileAvatar = ({ name, title, src }) => {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Avatar Image */}
      <div className="relative mb-3">
        <img 
          src={src} 
          alt={name} 
          className="w-20 h-20 rounded-full border-2 border-white dark:border-zinc-800 object-cover shadow-lg" 
        />
        <div className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 border-2 border-white dark:border-zinc-900 rounded-full"></div>
      </div>
     {/* Dark mode styling */}
      <h2 className="text-lg font-bold text-zinc-900 dark:text-white transition-colors">
        {name}
      </h2>

     
      <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
        {title}
      </p>

      {/* Available Badge */}
      <div className="mt-3 px-3 py-1 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-full shadow-sm flex items-center gap-2 cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-all">
        <span className="text-[10px] font-bold text-zinc-600 dark:text-zinc-300 uppercase tracking-wider">Available</span>
        <svg size={10} className="text-blue-500" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
      </div>
    </div>
  );
};

export default ProfileAvatar;