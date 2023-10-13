import type { ReactNode } from 'react';

interface SocialLinkSecondaryProps {
  href: string;
  icon: ReactNode;
  text: string;
}

export default function SocialLinkSecondary({
  href,
  icon,
  text,
}: SocialLinkSecondaryProps) {
  return (
    <a
      className="inline-block w-full text-center py-2 border-2 border-slate-900 rounded-sm dark:border-slate-300 transition focus:outline-none focus:ring focus:ring-offset-2 focus:ring-slate-900 dark:focus:ring-blue-600 dark:focus:ring-offset-slate-950 focus:ring-offset-slate-300"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex justify-center items-center gap-x-1">
        {icon}{' '}
        <span className="inline-block xl:text-base font-semibold font-poppins text-sm">
          {text}
        </span>
      </div>
    </a>
  );
}
