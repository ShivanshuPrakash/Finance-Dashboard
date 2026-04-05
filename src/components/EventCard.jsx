import React from 'react';

const EventCard = ({ time, title, participants, icon: Icon }) => {
  return (
    <div className="bg-white/90 p-3 rounded-lg flex items-center space-x-3 hover:bg-zinc-100 transition-colors group cursor-pointer">
      
      {/* Icon Section */}
      <div className="size-8 flex items-center justify-center bg-white rounded-full border border-zinc-200 text-zinc-600 shadow-sm">
        {Icon && <Icon size={16} />}
      </div>

      {/* Content Section */}
      <div className="flex-1">
        <p className="text-xs text-zinc-500">
          {time}
        </p>
        <p className="text-sm font-medium text-zinc-900 mb-1">
          {title}
        </p>

        {/* Participants Avatars */}
        {participants && (
          <div className="flex -space-x-2 overflow-hidden">
            {Array.from({ length: participants }).map((_, i) => (
              <div
                key={i}
                className="size-6 rounded-full bg-zinc-300 border-2 border-zinc-50 flex items-center justify-center text-xs text-zinc-600 font-medium"
              >
                A
                {/* Placeholder for user avatars */}
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
};

export default EventCard;