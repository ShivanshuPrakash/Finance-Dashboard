import React from 'react';
import { 
  MoreHorizontal, 
  Calendar, 
  CreditCard, 
  Banknote,
  ChevronRight 
} from "lucide-react"; 
import ProfileAvatar from './ProfileAvatar';
import CalendarDay from './calendarDay';
import EventCard from "./EventCard";

const RightPanel = () => {
  return (
    
    <div className="w-64 2xl:w-80 flex-shrink-0 bg-white dark:bg-zinc-950 h-full border-l border-zinc-100 dark:border-zinc-900 py-6 transition-all duration-300 flex flex-col overflow-y-auto overflow-x-hidden custom-scrollbar">
      
      {/* 1. Profile Section */}
      <div className="px-4 mb-8">
        <div className="flex justify-end mb-4">
          <MoreHorizontal size={18} className="text-zinc-400 cursor-pointer hover:text-zinc-600 dark:hover:text-zinc-200" />
        </div>
        <ProfileAvatar 
          name="Shivanshu Prakash" 
          title="Information Technology" 
          src="/user-2.png"
        />
      </div>

      
      <div className="px-4 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-tight">My Agenda</h3>
          <button className="text-[10px] text-blue-600 dark:text-blue-400 font-bold hover:underline uppercase">
            View All
          </button>
        </div>

        {/* Calendar Grid  */}
        <div className="grid grid-cols-7 gap-1 text-center">
          <CalendarDay day="Mo" date="12" />
          <CalendarDay day="Tue" date="13" isActive={true} />
          <CalendarDay day="We" date="14" />
          <CalendarDay day="Th" date="15" />
          <CalendarDay day="Fr" date="16" />
          <CalendarDay day="Sa" date="17" />
          <CalendarDay day="Su" date="18" />
        </div>
      </div>

      {/* 3. Upcoming Events Section */}
      <div className="px-4 flex-1">
        <h3 className="text-sm font-bold text-zinc-900 dark:text-white mb-4 uppercase tracking-tight">Upcoming Events</h3>
        
        <div className="space-y-3">
          <EventCard 
            time="12:30-13:30" 
            title="Meetings with Google CEO" 
            participants={2} 
            icon={Calendar} 
          />
          
          <EventCard 
            time="14:30-15:15" 
            title="Payment Reminder" 
            icon={CreditCard} 
          />
          
          <EventCard 
            time="16:30-17:00" 
            title="Investment Call" 
            icon={Banknote} 
          />

          <EventCard 
            time="18:00-19:00" 
            title="Meeting with Shivya" 
            participants={1} 
            icon={Banknote} 
          />
        </div>

        {/* Bottom Button */}
        <button className="w-full mt-8 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 font-bold py-3 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:shadow-sm transition-all duration-200 text-[10px] uppercase tracking-widest">
          All upcoming events
        </button>
      </div>

      {/* 4. Scheduled Section  */}
      <div className="mt-8 px-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-bold dark:text-white">Scheduled</h3>
          <span className="text-zinc-400 text-xl cursor-pointer">+</span>
        </div>
        
        <div className="space-y-1">
          {[
            { label: "Monthly Rent", price: "$1,200", date: "May 01" },
            { label: "Electricity", price: "$85", date: "May 05" }
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between py-3 border-b border-zinc-50 dark:border-zinc-900 last:border-0">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <Calendar size={14} className="text-blue-500" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs font-bold truncate dark:text-zinc-200">{item.label}</p>
                  <p className="text-[10px] text-zinc-400">{item.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold dark:text-white">{item.price}</span>
                <ChevronRight size={12} className="text-zinc-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightPanel;