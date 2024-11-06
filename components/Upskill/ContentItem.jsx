import Image from 'next/image';
import { getContentTypeIcon } from '@/utils/contentIcons';
import ClockIcon from '@/public/assets/icons/ClockOutline.svg';

const ContentItem = ({ item, index }) => {
  return (
    <div className="relative">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 rounded-lg hover:bg-gray-50">
        <div className="flex items-center space-x-3">
          <Image 
            src={getContentTypeIcon(item.type)} 
            alt={item.type} 
            width={20}
            height={20}
            className="w-5 h-5" 
          />
          <span className="font-medium">{item.title}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Image 
            src={ClockIcon} 
            alt="Clock" 
            width={24}
            height={24}
            className="w-6 h-6" 
          />
          <span>{item.time}</span>
        </div>
      </div>
      <div className="h-[1px] bg-gradient-to-r from-[rgba(23,43,77,0)] via-[rgba(23,43,77,1)] to-[rgba(5,68,94,0)] w-full mt-2" />
    </div>
  );
};

export default ContentItem; 