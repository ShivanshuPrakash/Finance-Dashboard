
const NavItem = ({ 
  icon: Icon, 
  label, 
  tabName, 
  activeTab, 
  onTabClick, 
  notifications 
}) => {
  
  const isActive = activeTab === tabName;

  const baseClasses = "flex items-center space-x-3 p-3 rounded-lg transition-colors group cursor-pointer";
  const activeClasses = "bg-zinc-900 text-white"
  const inactiveClasses = "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900";
  
  const finalTabName = tabName === "Help & Support" ? "Help & Support" : label;

  return (
    <div 
      onClick={() => onTabClick(finalTabName)}
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
    >
      {/* Icon rendering */}
      <Icon size={20} className={isActive ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-700'} />
      
      {/* Label */}
      <span className="flex-1 font-medium">
        {label}
      </span>

      {/* Notifications badge  */}
      {notifications > 0 && (
        <span className={`text-xs px-2 py-0.5 rounded-full ${isActive ? 'bg-orange-400 text-zinc-900' : 'bg-orange-500 text-white'}`}>
          {notifications}
        </span>
      )}
    </div>
  );
};

export default NavItem;