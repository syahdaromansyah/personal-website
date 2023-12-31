import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { IoMdAttach } from 'react-icons/io';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import SocialLinkAnchorPrimary from './SocialLinkAnchorPrimary';
import SocialLinkFancy from './SocialLinkFancy';

export default function SocialLinks() {
  return (
    <div className="flex items-center justify-between lg:justify-start lg:gap-x-6">
      <ul className="flex gap-x-3 lg:gap-x-6">
        <li>
          <SocialLinkAnchorPrimary
            href="mailto:syahdarom@gmail.com"
            icon={<MdOutlineAlternateEmail className="inline-block text-2xl" />}
            text="Email"
          />
        </li>

        <li>
          <SocialLinkAnchorPrimary
            href="https://github.com/syahdaromansyah"
            icon={<FaGithub className="inline-block text-2xl" />}
            text="Github"
          />
        </li>

        <li>
          <SocialLinkAnchorPrimary
            href="https://www.linkedin.com/in/syahdarom"
            icon={<FaLinkedin className="inline-block text-2xl" />}
            text="Linkedin"
          />
        </li>
      </ul>

      <SocialLinkFancy
        href="/resume"
        icon={<IoMdAttach className="inline-block text-xl" />}
        text="Resume"
      />
    </div>
  );
}
