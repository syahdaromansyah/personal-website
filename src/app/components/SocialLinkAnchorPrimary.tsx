import type { ReactNode } from 'react';

type SocialLinkAnchorPrimaryProps = {
  icon: ReactNode;
  text: string;
  href: string | undefined;
};

export default function SocialLinkAnchorPrimary({
  icon,
  text,
  href,
}: Readonly<SocialLinkAnchorPrimaryProps>) {
  return (
    <span className="inline-block lg:w-36 relative">
      <a
        className="peer inline-block w-full text-center p-2 md:px-4 md:py-3 focus:outline-none relative z-20"
        href={href}
      >
        <div className="flex justify-center items-center gap-x-1 relative">
          {icon}{' '}
          <span className="hidden lg:inline-block font-semibold font-poppins text-sm xl:text-base">
            {text}
          </span>
        </div>
      </a>

      <div
        className="hidden lg:block h-full w-full bg-slate-400/40 dark:text-slate-300 rounded dark:bg-slate-900 transition dark:peer-hover:bg-slate-900 dark:peer-focus:bg-slate-900 dark:peer-active:bg-slate-900 top-0 left-0 z-0 absolute peer-hover:translate-y-1 peer-focus:translate-y-1 duration-300 peer-hover:translate-x-1 peer-focus:translate-x-1 peer-active:translate-x-2 peer-active:translate-y-2 dark:peer-hover:bg-slate-900/40 dark:peer-focus:bg-slate-900/40 peer-hover:bg-slate-400/25"
        role="none"
      />

      <div
        className="hidden lg:block peer-active:-translate-x-4 peer-active:-translate-y-4 absolute h-full w-full max-h-[20px] max-w-[20px] peer-hover:max-h-full peer-focus:max-h-full peer-hover:max-w-[calc(100%+4px)] peer-focus:max-w-[calc(100%+4px)] bg-slate-100/5 rounded-lg peer-hover:rounded peer-focus:rounded backdrop-blur transition-custom duration-300 -right-2 -bottom-2 peer-hover:border border-slate-400 dark:border-slate-900 peer-hover:-translate-x-3 peer-focus:-translate-x-3 peer-hover:-translate-y-3 peer-focus:-translate-y-3 peer-focus:border-0 peer-focus:ring peer-focus:ring-slate-800 dark:peer-focus:ring-blue-600 z-10 "
        role="none"
      />
    </span>
  );
}
