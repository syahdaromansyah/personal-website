import { FaLocationDot } from 'react-icons/fa6';
import SocialLinks from './SocialLinks';

export default function MainContent() {
  return (
    <main>
      <section className="mb-6">
        <h1 className="mb-2 bg-gradient-to-br from-slate-800 to-slate-900 bg-clip-text font-raleway text-3xl font-extrabold text-transparent dark:from-slate-100 dark:to-slate-400 md:text-4xl lg:mb-4 lg:text-4xl">
          Hi everyone! I&apos;m <br className="md:hidden" /> Syahda Romansyah
        </h1>

        <p className="mb-2 dark:text-slate-500 md:text-xl lg:mb-4">
          A Software Engineer in the web development field who currently focuses
          on Front-End Web Developer roles. And also, I&apos;m interested in
          back-end development and cloud computing.
        </p>

        <p className="text-sm dark:text-slate-200 md:text-base">
          <span>
            <FaLocationDot className="inline-block" />
          </span>{' '}
          <span className="font-raleway font-semibold">
            Based on Bandung, Indonesia
          </span>
        </p>
      </section>

      <section className="mb-4">
        <SocialLinks />
      </section>
    </main>
  );
}
