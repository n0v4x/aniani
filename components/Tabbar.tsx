import { FunctionComponent } from "react";

interface TabbarProps {
  children: JSX.Element | JSX.Element[];
}

const Tabbar: FunctionComponent<TabbarProps> = ({ children }) => {
  return (
    <nav className="tabbar">
      <div className="container">
        <div className="tabbar__inner">
          <ul className="tabbar__list">{children}</ul>
        </div>
      </div>
    </nav>
  );
};

export default Tabbar;
