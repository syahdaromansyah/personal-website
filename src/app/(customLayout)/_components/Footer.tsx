import type { ReactNode } from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="text-sm text-slate-600 dark:text-slate-500 md:text-base">
        <p>
          Build with <FooterLink href="https://nextjs.org">Next.js</FooterLink>{' '}
          and{' '}
          <FooterLink href="https://tailwindcss.com">Tailwind CSS</FooterLink>.
          Hosted on <FooterLink href="https://vercel.com">Vercel</FooterLink>.
        </p>

        <p>&copy; Copyright 2023-present Syahda Romansyah.</p>
        <p>All rights reserved.</p>
      </div>
    </footer>
  );
}

const FooterLink = ({
  href,
  children,
}: Readonly<{
  href: string;
  children: ReactNode;
}>) => (
  <a
    className="font-semibold underline transition duration-300 hover:text-slate-800 focus:text-slate-800 focus:outline-none focus:ring focus:ring-slate-900 focus:ring-offset-2 focus:ring-offset-slate-200 dark:text-slate-400 dark:hover:text-slate-200 dark:focus:text-slate-200 dark:focus:ring-blue-600 dark:focus:ring-offset-[rgba(24,2,8,1)]"
    href={href}
    rel="noopener noreferrer"
    target="_blank"
  >
    {children}
  </a>
);
