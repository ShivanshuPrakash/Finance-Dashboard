const CalendarDay = ({ day, date, isActive }) => {
  return (
    <div
      className={`w-9 h-12 flex flex-col items-center justify-center rounded-lg cursor-pointer ${
        isActive ? "bg-zinc-900 text-white" : "hover:bg-zinc-100 text-zinc-600"
      }`}
    >
      <span className="text-xs font-medium">{day}</span>
      <span className="text-sm font-semibold">{date}</span>
    </div>
  );
};

export default CalendarDay;