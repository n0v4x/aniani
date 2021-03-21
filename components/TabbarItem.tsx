import { FunctionComponent } from "react";
import Link from "components/Link";
import { Icon } from "react-feather";

interface TabbarIconProps {
  className?: string;
  // strokeWidth?: string;
  // size?: string;
}

interface TabbarItemProps {
  href: string;
  label: string;
  icon: FunctionComponent<TabbarIconProps>;
}

const TabbarItem: FunctionComponent<TabbarItemProps> = ({ href, icon: Icon, label }) => {
  return (
    <li className="tabbar__item">
      <div className="tabbar__item-inner">
        <Link activeClassName="tabbar__item-link_active" href={href}>
          <a className="tabbar__item-link">
            <span className="tabbar__item-icon-wrapper">
              <Icon className="tabbar__item-icon" />
            </span>
            <span className="tabbar__item-label">{label}</span>
          </a>
        </Link>
      </div>
    </li>
  );
};

export default TabbarItem;
