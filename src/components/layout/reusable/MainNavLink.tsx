import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  faIcon: IconDefinition;
  text: string;
  url: string;
  key: string;
  navIsExpanded: boolean;
}

export default function MainNavLink({
  faIcon,
  text,
  url,
  key,
  navIsExpanded,
}: Props) {
  return (
    <a href={url}>
      <li
        key={key}
        className="hover:bg-accent hover:text-accent-content px-6 py-3 rounded-md transition"
      >
        <FontAwesomeIcon className="min-w-4" icon={faIcon} />
        {navIsExpanded && (
          <span className="ml-3 lg:inline animate-fadeIn">{text}</span>
        )}
      </li>
    </a>
  );
}
