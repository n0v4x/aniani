import { FunctionComponent } from "react";
import Layout from "components/Layout";

interface IndexProps {}

const Index: FunctionComponent<IndexProps> = () => {
  // const { data, error } = useSWR("/api/releases", fetcher);

  return <Layout title="Search">Search</Layout>;
};

export default Index;
