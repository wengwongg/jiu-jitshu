"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SubNavLink from "./SubNavLink";
import { SubNavLinkDefinition } from "./SubNavLink";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

interface Props {
  sublinks: SubNavLinkDefinition[];
  text: string;
  faIcon: IconDefinition;
  key: string;
  navIsExpanded: boolean;
}

export default function ExpandableNavLink({
  sublinks,
  text,
  faIcon,
  key,
  navIsExpanded,
}: Props) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <li key={key}>
      <div
        className={`hover:cursor-pointer hover:bg-accent hover:text-accent-content px-6 py-3 rounded-md transition ${
          isExpanded && "mb-2"
        } select-none`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <FontAwesomeIcon className="min-w-4" icon={faIcon} />
        {navIsExpanded && <span className="ml-3 animate-fadeIn">{text}</span>}
      </div>

      {isExpanded && (
        <ul className="flex flex-col gap-2 transition animate-fadeDown">
          {sublinks.map((sublink) => (
            <SubNavLink
              key={`${text}-${sublink.text}`}
              faIcon={sublink.faIcon}
              text={sublink.text}
              url={sublink.url}
              navIsExpanded={navIsExpanded}
            />
          ))}
        </ul>
      )}
    </li>
  );
}
