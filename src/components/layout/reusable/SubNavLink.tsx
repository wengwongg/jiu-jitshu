import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface SubNavLinkDefinition {
  faIcon: IconDefinition;
  text: string;
  url: string;
}

interface Props extends SubNavLinkDefinition {
  navIsExpanded: boolean;
}

export default function SubNavLink({
  faIcon,
  text,
  url,
  navIsExpanded,
}: Props) {
  return (
    <a href={url}>
      <li
        className={`hover:bg-accent hover:text-accent-content ${
          navIsExpanded ? "pl-9" : "text-center"
        } text-sm px-3 py-2 rounded-md transition`}
      >
        <FontAwesomeIcon className="min-w-4" icon={faIcon} />
        {navIsExpanded && <span className="ml-3">{text}</span>}
      </li>
    </a>
  );
}
