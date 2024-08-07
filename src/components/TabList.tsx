import Tab, { TabProps } from "./Tab";

interface Props {
  tabs: TabProps[];
  activeTabHandler: (index: number) => void;
}

export default function TabList({ tabs, activeTabHandler }: Props) {
  return (
    <div role="tablist" className="tabs tabs-boxed bg-base-300 inline-block">
      {tabs.map((tab, index) => (
        <Tab
          name={tab.name}
          active={tab.active}
          key={tab.name}
          handleClick={() => activeTabHandler(index)}
        />
      ))}
    </div>
  );
}
