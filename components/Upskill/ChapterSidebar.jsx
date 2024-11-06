import Image from 'next/image';
import ClockIcon from '@/public/assets/icons/ClockOutline.svg';

const ChapterSidebar = ({ chaptersData, expandedChapter, setExpandedChapter }) => {
  return (
    <div className="w-80 md:pr-4 mb-6 md:mb-0">
      <div className="space-y-4">
        {chaptersData.map((chapter, index) => (
          <ChapterItem 
            key={chapter.title}
            chapter={chapter}
            index={index}
            isExpanded={index === expandedChapter}
            onClick={() => setExpandedChapter(index)}
          />
        ))}
      </div>
    </div>
  );
};

const ChapterItem = ({ chapter, index, isExpanded, onClick }) => (
  <div>
    <div 
      className={`p-3 rounded-lg cursor-pointer ${
        isExpanded ? 'bg-[rgba(239,245,255,1)]' : ''
      }`}
      onClick={onClick}
    >
      <div className="flex items-center justify-between">
        <span className={isExpanded ? 'font-bold' : ''}>{chapter.title}</span>
        {isExpanded && (
          <div className="flex items-center space-x-2">
            <Image src={ClockIcon} alt="Clock" className="w-5 h-5" />
            <span className="text-sm">{chapter.totalTime}</span>
          </div>
        )}
      </div>
    </div>
    <div className="h-[1px] bg-gradient-to-r from-[rgba(143,223,255,0)] via-[rgba(143,223,255,1)] to-[rgba(143,223,255,0)] w-full mt-2" />
  </div>
);

export default ChapterSidebar; 