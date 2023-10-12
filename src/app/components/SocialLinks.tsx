import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import SocialLinkPrimary from './SocialLinkPrimary';

export default function SocialLinks() {
  return (
    <ul className="grid grid-cols-3 gap-x-3 lg:gap-x-6">
      <li>
        <SocialLinkPrimary
          href="mailto:syahdarom@gmail.com"
          icon={<MdOutlineAlternateEmail className="inline-block" />}
          text="Email"
        />
      </li>

      <li>
        <SocialLinkPrimary
          href="https://github.com/syahdaromansyah"
          icon={<FaGithub className="inline-block" />}
          text="Github"
        />
      </li>

      <li>
        <SocialLinkPrimary
          href="https://www.linkedin.com/in/syahdarom"
          icon={<FaLinkedin className="inline-block" />}
          text="LinkedIn"
        />
      </li>
    </ul>
  );
}
