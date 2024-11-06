import Image from 'next/image';
import HelpCircleIcon from '@/public/assets/icons/InformationCircleOutline.svg';
import FileTextIcon from '@/public/assets/icons/DocumentDuplicateOutline.svg';

const TopNavigation = ({ activeTab, handleTabClick, selectedButtonStyle, gradientBorderStyle }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 space-y-4 sm:space-y-0">
      <div className="bg-gradient-to-t from-[rgba(239,245,255,0)] to-[rgba(239,245,255,1)] p-2 rounded-lg w-full sm:w-auto">
        <div className="flex flex-row items-center space-x-2">
          {/* Mentor Sessions Button */}
          <NavButton 
            label="Mentor Sessions"
            isActive={activeTab === 'mentor'}
            onClick={() => handleTabClick('mentor')}
            styles={{ selectedButtonStyle, gradientBorderStyle }}
          />

          {/* Learning Material Button */}
          <NavButton 
            label="Learning Material"
            isActive={activeTab === 'learning'}
            onClick={() => handleTabClick('learning')}
            styles={{ selectedButtonStyle, gradientBorderStyle }}
          />
        </div>
      </div>

      {/* How it works button */}
      <button className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-50 rounded-lg transition-colors duration-200 w-full sm:w-auto justify-center sm:justify-start">
        <Image src={HelpCircleIcon} alt="Information Circle" className="w-5 h-5" />
        <span>How it works</span>
      </button>
    </div>
  );
};

const NavButton = ({ label, isActive, onClick, styles }) => (
  <div className="relative">
    <button 
      className="px-4 py-2 rounded-lg transition-colors duration-200 hover:bg-white/60"
      onClick={onClick}
      style={isActive ? styles.selectedButtonStyle : {}}
    >
      <div className="flex items-center space-x-2">
        <Image src={FileTextIcon} alt="File Text" className="w-5 h-5" />
        <span>{label}</span>
      </div>
    </button>
    {isActive && <div style={styles.gradientBorderStyle} />}
  </div>
);

export default TopNavigation; 