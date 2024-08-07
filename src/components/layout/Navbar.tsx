"use client";

import {
  faChartSimple,
  faBookBookmark,
  faBullseye,
  faComment,
  faUser,
  faWandSparkles,
  faHandFist,
  faPencil,
  faAnglesLeft,
  faAnglesRight,
} from "@fortawesome/free-solid-svg-icons";
import MainNavLink from "./reusable/MainNavLink";
import ExpandableNavLink from "./reusable/ExpandableNavLink";
import { SubNavLinkDefinition } from "./reusable/SubNavLink";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const logbookSublinks: SubNavLinkDefinition[] = [
  {
    faIcon: faWandSparkles,
    text: "Techniques",
    url: "/techniques",
  },
  {
    faIcon: faHandFist,
    text: "Sparring",
    url: "#",
  },
  {
    faIcon: faPencil,
    text: "Entries",
    url: "#",
  },
];

const mediaQuery = "(min-width: 1024px)";
const mediaQueryList = window.matchMedia(mediaQuery);

export default function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleChange = (event: MediaQueryListEvent) => {
      setIsExpanded(event.matches);
    };

    mediaQueryList.addEventListener("change", handleChange);

    return () => {
      mediaQueryList.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <div
      className={`flex flex-col ${
        isExpanded ? "w-52" : "w-24"
      }  h-screen py-10 bg-base-300 items-center border-r-2 border-neutral transition-all`}
      id="nav"
    >
      <button
        className={`hidden btn btn-ghost mb-2 lg:block`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <FontAwesomeIcon icon={isExpanded ? faAnglesLeft : faAnglesRight} />
      </button>
      {isExpanded && (
        <a className="font-bold text-3xl mb-6" href="/">
          jiu<span className="text-accent">-</span>
          <br />
          jit <span className="text-accent">·</span> shu
        </a>
      )}
      <nav>
        <ul className="flex flex-col gap-3">
          <MainNavLink
            faIcon={faChartSimple}
            text="Dashboard"
            url="#"
            key="dashboard-nav-item"
            navIsExpanded={isExpanded}
          />
          <ExpandableNavLink
            faIcon={faBookBookmark}
            text="Logbook"
            key="logbook-nav-item"
            sublinks={logbookSublinks}
            navIsExpanded={isExpanded}
          />
          <MainNavLink
            faIcon={faBullseye}
            text="Goals"
            url="#"
            key="goals-nav-item"
            navIsExpanded={isExpanded}
          />
          <MainNavLink
            faIcon={faComment}
            text="Discussion"
            url="#"
            key="discussion-nav-item"
            navIsExpanded={isExpanded}
          />
          <MainNavLink
            faIcon={faUser}
            text="Profile"
            url="#"
            key="user-nav-item"
            navIsExpanded={isExpanded}
          />
        </ul>
      </nav>
    </div>
  );
}
