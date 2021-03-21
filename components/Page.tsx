import { FunctionComponent } from "react";

interface PageProps {
  children: JSX.Element | JSX.Element[];
}

const Page: FunctionComponent<PageProps> = ({ children }) => {
  return <div className="page">{children}</div>;
};

export default Page;
