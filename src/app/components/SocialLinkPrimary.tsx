import type { ReactNode } from 'react';

interface SocialLinkPrimaryProps {
  href: string;
  icon: ReactNode;
  text: string;
}

export default function SocialLinkPrimary({
  href,
  icon,
  text,
}: SocialLinkPrimaryProps) {
  return (
    <a
      className="bg-slate-800 text-slate-300 inline-block w-full text-center py-2 rounded-sm dark:bg-slate-800 transition hover:bg-slate-900 focus:outline-none focus:ring focus:ring-slate-900 focus:ring-offset-2 focus:ring-offset-slate-300 dark:focus:ring-offset-slate-950 dark:focus:ring-blue-600"
      href={href}
    >
      <div className="flex justify-center items-center gap-x-1">
        {icon}{' '}
        <span className="inline-block font-semibold font-poppins text-sm xl:text-base">
          {text}
        </span>
      </div>
    </a>
  );
}
