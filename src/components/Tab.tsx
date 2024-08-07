export interface TabProps {
  name: string;
  active: boolean;
}

export interface Props extends TabProps {
  handleClick: () => void;
}

export default function Tab({ name, active, handleClick }: Props) {
  return (
    <a
      role="tab"
      className={`tab hover:underline transition-all ${active && "tab-active"}`}
      onClick={handleClick}
    >
      {name}
    </a>
  );
}
