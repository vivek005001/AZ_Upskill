import Image from 'next/image';


import LayoutDashboardIcon from '@/public/static/assets/icons/ViewGridOutline.svg';
import GraduationCapIcon from '@/public/static/assets/icons/LightBulbOutline.svg';
import MessageCircleIcon from '@/public/static/assets/icons/UserGroupOutline.svg';
import TrendingUpIcon from '@/public/static/assets/icons/ClipboardOutline.svg';
import TrophyIcon from '@/public/static/assets/icons/ChartBarOutline.svg';
import BarChartIcon from '@/public/static/assets/icons/StarOutline.svg';


  
  const Sidebar = ({ isExpanded }) => {
    const menuItems = [
      { image: LayoutDashboardIcon, name: 'Dashboard' },
      { image: GraduationCapIcon, name: 'Learn' },
      { image: MessageCircleIcon, name: 'Forums' },
      { image: TrendingUpIcon, name: 'Upskill' },
      { image: TrophyIcon, name: 'Contest' },
      { image: BarChartIcon, name: 'Leaderboard' }
    ];
  
    return (
      <div className={`
        bg-white h-screen transition-all duration-300 ease-in-out
        ${isExpanded ? 'w-64' : 'w-16'}
        fixed left-0 top-16 px-6
      `}>
        <div className="flex flex-col space-y-2 p-3">
          {menuItems.map((item, index) => (
            <button 
              key={index} 
              className="group relative h-10 w-full"
            >
              <div className={`absolute top-0 left-0 h-10 w-10 flex items-center justify-center rounded-md 
                ${item.name === 'Upskill' ? 'bg-[#D6F4FF]' : 'group-hover:bg-[#D6F4FF]'} 
                transition-all duration-300 z-10`}
              >
                <Image 
                  src={item.image} 
                  alt={item.name} 
                  className="h-5 w-5" 
                />
              </div>
              {isExpanded && (
                <div className={`absolute top-0 left-0 h-10 w-full flex items-center pl-12 rounded-md 
                  ${item.name === 'Upskill' ? 'bg-[#D6F4FF]' : 'group-hover:bg-[#D6F4FF]'} 
                  transition-all duration-300`}
                >
                  <span className={`text-[#172B4D] whitespace-nowrap 
                    ${item.name === 'Upskill' ? 'font-bold' : 'group-hover:font-bold'}`}
                  >
                    {item.name}
                  </span>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    );
  };
  
  export default Sidebar;