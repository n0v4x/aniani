import { FunctionComponent, ReactElement } from "react";
import Header from "components/Header";
import Main from "components/Main";
import Head from "next/head";

export type LayoutChildren = ReactElement | ReactElement[] | string;

interface LayoutProps {
  children: LayoutChildren;
  title: string;
}

const Layout: FunctionComponent<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header title={title} />
      <Main>{children}</Main>
    </>
  );
};

export default Layout;
