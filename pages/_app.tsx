import { AppProps } from "next/app";
import { FunctionComponent } from "react";
import Head from "next/head";
import Page from "components/Page";
import Tabbar from "components/Tabbar";
import "scss/index.scss";
import TabbarItem from "components/TabbarItem";
import { Home, Search, Calendar, Star } from "react-feather";

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return (
    <Page>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;900&family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
      <Tabbar>
        <TabbarItem label="Home" href="/" icon={Home} />
        <TabbarItem label="Search" href="/search" icon={Search} />
        <TabbarItem label="Schedule" href="/schedule" icon={Calendar} />
        <TabbarItem label="Favorite" href="/favorite" icon={Star} />
      </Tabbar>
    </Page>
  );
};

export default App;
