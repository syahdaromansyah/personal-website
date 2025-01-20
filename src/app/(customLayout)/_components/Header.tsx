import profileImg from '@/app/_assets/images/profile.webp';
import Image from 'next/image';

export default function Header() {
  return (
    <header>
      <Image
        className="w-20 rounded-full shadow shadow-gray-400 dark:shadow-none"
        src={profileImg}
        alt="Syahda Romansyah"
        priority
      />
    </header>
  );
}
