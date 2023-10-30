import { FaLocationDot } from 'react-icons/fa6';
import SocialLinks from './SocialLinks';

export default function MainContent() {
  return (
    <main>
      <section className="mb-6">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-br from-slate-800 to-slate-900 font-raleway font-extrabold text-3xl md:text-4xl mb-2 dark:from-slate-100 dark:to-slate-400 lg:text-4xl lg:mb-4">
          Hi everyone! I&apos;m <br className="md:hidden" /> Syahda Romansyah
        </h1>

        <p className="mb-2 dark:text-slate-500 md:text-xl lg:mb-4">
          A Software Engineer in the web development field who currently focuses
          on Front-End Web Developer roles. And also, I&apos;m interested in
          back-end development and cloud computing.
        </p>

        <p className="dark:text-slate-200 text-sm md:text-lg">
          <span>
            <FaLocationDot className="inline-block" />
          </span>{' '}
          <span className="font-semibold font-raleway">
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
