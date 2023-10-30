import type { ReactNode } from 'react';

const FooterLink = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => (
  <a
    className="font-semibold hover:text-slate-800 focus:text-slate-800 dark:focus:text-slate-200 dark:hover:text-slate-200 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-200 focus:ring-slate-900 dark:focus:ring-offset-slate-950 dark:focus:ring-blue-600 dark:text-slate-400 underline"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer>
      <div className="text-sm md:text-base text-slate-600 dark:text-slate-500">
        <p>
          Build with <FooterLink href="https://nextjs.org">Next.js</FooterLink>,{' '}
          <FooterLink href="https://tailwindcss.com">Tailwind CSS</FooterLink>,
          and hosted on{' '}
          <FooterLink href="https://vercel.com">Vercel</FooterLink>.
        </p>

        <p>&copy; Copyright 2023-present Syahda Romansyah.</p>
        <p>All rights reserved.</p>
      </div>
    </footer>
  );
}
