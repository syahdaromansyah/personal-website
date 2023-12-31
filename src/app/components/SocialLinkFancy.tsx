import Link from 'next/link';
import type { ReactNode } from 'react';
import type { UrlObject } from 'url';

type SocialLinkFancyProps = {
  icon: ReactNode;
  text: string;
  href: string | UrlObject;
};

export default function SocialLinkFancy({
  icon,
  text,
  href,
}: Readonly<SocialLinkFancyProps>) {
  return (
    <span className="social-link-fancy inline-block lg:w-36 relative">
      <Link
        className="peer inline-block w-full text-center p-2 md:px-4 md:py-3 focus:outline-none relative z-20"
        href={href}
      >
        <div className="flex justify-center items-center gap-x-1 relative">
          <span className="inline-block">{icon}</span>{' '}
          <span className="inline-block font-semibold font-poppins text-sm xl:text-base">
            {text}
          </span>
        </div>
      </Link>

      <div
        className="h-full w-full rounded transition top-0 left-0 z-0 absolute peer-hover:translate-y-1 peer-focus:translate-y-1 duration-300 peer-hover:translate-x-1 peer-focus:translate-x-1 peer-active:translate-x-2 peer-active:translate-y-2 overflow-hidden"
        role="none"
      >
        <div
          className="bg-btn-social-link-fancy absolute bottom-0 left-0 h-[200%] w-[900%] rounded transition duration-300 dark:-translate-x-0 dark:-translate-y-0 -translate-x-[88%] translate-y-[50%]"
          role="none"
        />
      </div>

      <div
        className="social-link-fancy_box-shadow h-full w-full rounded top-0 left-0 z-0 absolute peer-hover:translate-y-1 peer-focus:translate-y-1 peer-hover:translate-x-1 peer-focus:translate-x-1 peer-active:translate-x-2 peer-active:translate-y-2 shadow-[2px_2px_16px_#fda4af,-2px_-4px_16px_#818cf8] dark:shadow-[2px_2px_16px_#4c0519,-2px_-4px_16px_#0f172a]"
        role="none"
      />

      <div
        className="h-full w-full rounded transition top-0 left-0 z-0 absolute peer-hover:translate-y-1 peer-focus:translate-y-1 duration-300 peer-hover:translate-x-1 peer-focus:translate-x-1 peer-active:translate-x-2 peer-active:translate-y-2 peer-hover:shadow-[6px_12px_24px_#fda4af,-4px_-4px_24px_4px_#818cf8] dark:peer-hover:shadow-[2px_8px_24px_#4c0519,-8px_-12px_24px_4px_#0f172a]"
        role="none"
      />

      <div
        className="hidden lg:block peer-active:-translate-x-4 peer-active:-translate-y-4 absolute h-full w-full max-h-[20px] max-w-[20px] peer-hover:max-h-full peer-focus:max-h-full peer-hover:max-w-[calc(100%+4px)] peer-focus:max-w-[calc(100%+4px)] bg-slate-100/5 rounded-lg peer-hover:rounded peer-focus:rounded backdrop-blur transition-custom duration-300 -right-2 -bottom-2 peer-hover:border border-slate-400 dark:border-slate-900 peer-hover:-translate-x-3 peer-focus:-translate-x-3 peer-hover:-translate-y-3 peer-focus:-translate-y-3 peer-focus:border-0 peer-focus:ring peer-focus:ring-slate-800 dark:peer-focus:ring-blue-600 z-10"
        role="none"
      />
    </span>
  );
}
