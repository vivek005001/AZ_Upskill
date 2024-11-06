import Image from 'next/image';
import logo from '@/public/assets/az_logo.svg';
import name_logo from '@/public/assets/az_name_logo.svg';

const LogoSection = () => {
  return (
    <div className="flex items-center group cursor-pointer relative">
      {/* Original logo - hidden by default, appears on hover */}
      <div className="absolute transition-opacity duration-300 ease-in-out group-hover:opacity-100 opacity-0">
        <Image
          src={logo}
          height={30}
          width={30}
          alt="Original Logo"
          priority
        />
      </div>
      
      {/* Name logo - aligned with the original logo */}
      <div className="transition-transform duration-500 ease-in-out group-hover:translate-x-10">
        <Image
          src={name_logo}
          height={120}
          width={120}
          alt="Name Logo"
          priority
        />
      </div>
    </div>
  );
};

export default LogoSection;
