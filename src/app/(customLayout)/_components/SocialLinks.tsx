import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import SocialAnchorPrimary from './SocialAnchorPrimary';

export default function SocialLinks() {
  return (
    <div className="flex items-center justify-between lg:justify-start lg:gap-x-6">
      <ul className="flex gap-x-3 lg:gap-x-6">
        <li>
          <SocialAnchorPrimary
            href="mailto:syahdarom@gmail.com"
            icon={<MdOutlineAlternateEmail className="inline-block text-2xl" />}
            text="Email"
          />
        </li>

        <li>
          <SocialAnchorPrimary
            href="https://github.com/syahdaromansyah"
            icon={<FaGithub className="inline-block text-2xl" />}
            text="Github"
            openNewTab
          />
        </li>

        <li>
          <SocialAnchorPrimary
            href="https://www.linkedin.com/in/syahdarom"
            icon={<FaLinkedin className="inline-block text-2xl" />}
            text="Linkedin"
            openNewTab
          />
        </li>
      </ul>
    </div>
  );
}
