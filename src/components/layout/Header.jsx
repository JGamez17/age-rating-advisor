import Image from 'next/image';
import Button from '@/components/ui/Button';

const Header = () => (
  <header className="sticky top-0 z-50 bg-white shadow-sm">
    <div className="container mx-auto px-4 py-3">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Image
            src="/Playguard Logo.png"
            alt="PlayGuard"
            width={32}
            height={32}
            className="object-contain"
          />
          <span className="text-gray-900 text-lg font-bold">PlayGuard</span>
        </div>
        
        {/* <Button variant="ghost" onClick={() => console.log('Menu clicked')}>
          <Image
            src="/menu-icon.svg"
            alt="Menu"
            width={24}
            height={24}
            className="object-contain"
          />
        </Button> */}
      </div>
    </div>
  </header>
);

export default Header;