import { FunctionComponent } from "react";
import { LayoutChildren } from "./Layout";

interface MainProps {
  children: LayoutChildren;
}

const Main: FunctionComponent<MainProps> = ({ children }) => {
  return <main className="main">{children}</main>;
};

export default Main;
