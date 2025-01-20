import type { ReactNode } from 'react';

type SocialLinkAnchorPrimaryProps = {
  icon: ReactNode;
  text: string;
  href: string | undefined;
  openNewTab?: boolean;
};

export default function SocialAnchorPrimary({
  icon,
  text,
  href,
  openNewTab,
}: Readonly<SocialLinkAnchorPrimaryProps>) {
  return (
    <span className="relative inline-block lg:w-36">
      <a
        className="peer relative z-20 inline-block w-full p-2 text-center focus:outline-none md:px-4 md:py-3"
        href={href}
        {...(openNewTab
          ? {
              rel: 'noopener noreferrer',
              target: '_blank',
            }
          : {})}
      >
        <div className="relative flex items-center justify-center gap-x-1">
          {icon}{' '}
          <span className="font-poppins hidden text-sm font-semibold lg:inline-block xl:text-base">
            {text}
          </span>
        </div>
      </a>

      <div
        className="absolute left-0 top-0 z-0 hidden h-full w-full rounded bg-slate-400/40 transition duration-300 peer-hover:translate-x-1 peer-hover:translate-y-1 peer-hover:bg-slate-400/25 peer-focus:translate-x-1 peer-focus:translate-y-1 peer-active:translate-x-2 peer-active:translate-y-2 dark:bg-slate-900 dark:text-slate-300 dark:peer-hover:bg-slate-900 dark:peer-hover:bg-slate-900/40 dark:peer-focus:bg-slate-900 dark:peer-focus:bg-slate-900/40 dark:peer-active:bg-slate-900 lg:block"
        role="none"
      />

      <div
        className="absolute -bottom-2 -right-2 z-10 hidden h-full max-h-[20px] w-full max-w-[20px] rounded-lg border-slate-400 bg-slate-100/5 backdrop-blur transition-custom duration-300 peer-hover:max-h-full peer-hover:max-w-[calc(100%+4px)] peer-hover:-translate-x-3 peer-hover:-translate-y-3 peer-hover:rounded peer-hover:border peer-focus:max-h-full peer-focus:max-w-[calc(100%+4px)] peer-focus:-translate-x-3 peer-focus:-translate-y-3 peer-focus:rounded peer-focus:border-0 peer-focus:ring peer-focus:ring-slate-800 peer-active:-translate-x-4 peer-active:-translate-y-4 dark:border-slate-900 dark:peer-focus:ring-blue-600 lg:block"
        role="none"
      />
    </span>
  );
}
