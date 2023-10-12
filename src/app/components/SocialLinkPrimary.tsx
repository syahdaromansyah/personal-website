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
    <span className="inline-block w-full relative">
      <a
        className="peer inline-block w-full text-center py-2 rounded-sm focus:outline-none relative z-20"
        href={href}
      >
        <div className="flex justify-center items-center gap-x-1 relative">
          {icon}{' '}
          <span className="inline-block font-semibold font-poppins text-sm xl:text-base">
            {text}
          </span>
        </div>
      </a>

      <div
        className="h-full w-full bg-slate-400 dark:text-slate-300 rounded-sm dark:bg-slate-800 transition dark:peer-hover:bg-slate-900 top-0 left-0 z-0 absolute"
        aria-hidden="true"
        role="presentation"
      ></div>

      <div
        className="block absolute h-full w-full max-h-[20px] max-w-[20px] peer-hover:max-h-full peer-focus:max-h-full peer-hover:max-w-[calc(100%+4px)] peer-focus:max-w-[calc(100%+4px)] dark:bg-slate-100/5 rounded-lg peer-hover:rounded peer-focus:rounded backdrop-blur transition-custom duration-300 -right-2 -bottom-2 peer-hover:border border-slate-500 dark:border-slate-900 peer-hover:-translate-x-3 peer-focus:-translate-x-3 peer-hover:-translate-y-3 peer-focus:-translate-y-3 peer-focus:border-blue-600 peer-focus:border-2 peer-active:border-blue-600 peer-active:border-2 z-10"
        aria-hidden="true"
        role="presentation"
      ></div>
    </span>
  );
}
