import { IoMdAttach } from 'react-icons/io';
import SocialLinkSecondary from './SocialLinkSecondary';

export default function AttachmentLinks() {
  return (
    <ul>
      <li>
        <SocialLinkSecondary
          href="https://resume.io/r/5TQyhFJgD"
          icon={<IoMdAttach className="inline-block h-4 w-auto" />}
          text="Resume"
          target="_blank"
          rel="noopener noreferrer"
        />
      </li>
    </ul>
  );
}
