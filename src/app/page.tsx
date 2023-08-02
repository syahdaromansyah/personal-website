import profileImg from '@/assets/images/profile.webp';
import { interFont, poppinsFont } from '@/lib/next-fonts';
import Image from 'next/image';
import { FaLocationDot } from 'react-icons/fa6';
import AttachmentLinks from './components/AttachmentLinks';
import SocialLinks from './components/SocialLinks';

export default function Home() {
  return (
    <div className={`${interFont.variable} ${poppinsFont.variable} font-inter`}>
      <div className="xl:h-screen w-full">
        <div className="h-full w-full bg-gradient-to-bl from-gray-100 via-gray-300/90 to-gray-200 dark:bg-gradient-to-bl dark:from-gray-950/95 dark:via-gray-950 dark:to-gray-950/95">
          <div className="h-full w-full container mx-auto px-6 pt-14 pb-14 md:max-w-lg md:px-0 lg:max-w-2xl xl:pt-0 xl:pb-0">
            <div className="h-full w-full xl:flex xl:justify-center xl:items-center">
              {/* The beginning of the content page */}
              <div>
                <header className="mb-4">
                  <Image
                    className="w-36 rounded-full mx-auto shadow shadow-gray-400 dark:shadow-none"
                    src={profileImg}
                    alt="Syahda Romansyah picture profile"
                    priority
                  />
                </header>

                <div className="mb-6">
                  <main>
                    <section className="text-center mb-4 border-b-2 border-slate-400 border-dashed pb-4 dark:border-slate-500">
                      <h1 className="text-transparent bg-clip-text bg-gradient-to-br from-slate-800 to-slate-900 font-poppins font-extrabold text-2xl mb-2 dark:from-slate-100 dark:to-slate-400 lg:text-4xl lg:mb-4">
                        Hi folks! I&apos;m Syahda Romansyah
                      </h1>

                      <p className="mb-2 dark:text-slate-500 lg:text-lg lg:mb-4">
                        A Software Engineer in the web development field who
                        currently focuses on Front-End Web Developer roles. And
                        also, I&apos;m interested in back-end development and
                        cloud computing.
                      </p>

                      <p className="dark:text-slate-300">
                        <span>
                          <FaLocationDot className="inline-block h-4 w-auto" />
                        </span>{' '}
                        <span className="text-sm font-semibold font-poppins">
                          Based on Bandung, Indonesia
                        </span>
                      </p>
                    </section>

                    <section className="mb-4 border-b-2 pb-4 border-dashed border-slate-400 dark:border-slate-500">
                      <h4 className="font-bold font-poppins text-center mb-4">
                        Reach me via
                      </h4>

                      <SocialLinks />
                    </section>

                    <section>
                      <h4 className="font-bold font-poppins text-center mb-4">
                        Attachments
                      </h4>

                      <AttachmentLinks />
                    </section>
                  </main>
                </div>

                <footer>
                  <div className="text-center text-sm text-slate-600">
                    <p>
                      Amazingly build with{' '}
                      <a
                        className="transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-200 focus:ring-slate-900 dark:focus:ring-offset-slate-950 dark:focus:ring-blue-600"
                        href="https://nextjs.org"
                      >
                        Next.js
                      </a>
                      ,{' '}
                      <a
                        className="transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-200 focus:ring-slate-900 dark:focus:ring-offset-slate-950 dark:focus:ring-blue-600"
                        href="https://tailwindcss.com"
                      >
                        Tailwind CSS
                      </a>
                      , and hosted on{' '}
                      <a
                        className="transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-200 focus:ring-slate-900 dark:focus:ring-offset-slate-950 dark:focus:ring-blue-600"
                        href="https://vercel.com"
                      >
                        Vercel
                      </a>
                      .
                    </p>

                    <p>&copy; Copyright 2023-present Syahda Romansyah.</p>

                    <p>All rights reserved.</p>
                  </div>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
