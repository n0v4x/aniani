import { FunctionComponent } from "react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import useRequest from "lib/hooks/useRequest";

import Layout from "components/Layout";

interface EpisdoeProps {
  episode: any;
}

const Episode: FunctionComponent<EpisdoeProps> = ({ episode }) => {
  const route = useRouter();
  // const { data, error } = useRequest(`episode/${route.query.id}`);

  // console.log(data);

  // console.log(route);
  return <Layout title="Episode">Episode</Layout>;
};

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   return {
//     props: {
//       episode: {},
//     },
//   };
// };

export default Episode;
