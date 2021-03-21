import { FunctionComponent } from "react";
import Layout from "components/Layout";
import Section from "components/Section";
import EpisodeCards from "components/EpisodeCards";

import { Episode } from "lib/interfaces";
import { GetServerSideProps } from "next";

import useRequest from "../lib/hooks/useRequest";

interface Releases {
  data: Episode[];
  page: string | number;
  next: string;
}

interface IndexProps {
  releases: Releases;
}

const Index: FunctionComponent<IndexProps> = ({ releases }) => {
  const { data: releasesData, error: releasesError } = useRequest("/releases");

  // console.log(data, error);

  return (
    <Layout title="Home">
      <Section title="Releases">{/* <EpisodeCards episodes={releasesData} /> */}</Section>
      {/* <Section title="Popular">
        <EpisodeCards episodes={releases.data} />
      </Section> */}
    </Layout>
  );
};

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   return {
//     props: {
//       releases: {
//         page: 1,
//         data: [
//           {
//             id: "4n07",
//             name: "houkago teibou nisshi",
//             img:
//               "https://static.akacdn.ru/files/images/2020/04/1579ea4509e34ca742eff104392bb1d4.jpg",
//             type: "sub",
//             episode: "4",
//           },
//           {
//             id: "qwp5",
//             name: "umayon",
//             img:
//               "https://static.akacdn.ru/files/images/2020/07/96e11af3bd426d675f607b051f8e001e.jpg",
//             type: "sub",
//             episode: "4",
//           },
//           {
//             id: "oz24",
//             name: "the furious yama",
//             img:
//               "https://static.akacdn.ru/files/images/2020/07/f858bb45316cdba674ac3f61a19a6423.jpg",
//             type: "sub",
//             episode: "1",
//           },
//           {
//             id: "65r7",
//             name: "wuxian shaonu 48",
//             img: "https://static.akacdn.ru/files/images/e/e7/e77b7d45ec3c66af808a5d0a0305925b.jpg",
//             type: "sub",
//             episode: "4",
//           },
//           {
//             id: "54x9",
//             name: "muhyo & roji's bureau of supernatural investigation 2nd season",
//             img:
//               "https://static.akacdn.ru/files/images/2020/03/d0966e71e8d3a5d876be8372bc916fb2.jpg",
//             type: "sub",
//             episode: "4",
//           },
//           {
//             id: "v2k6",
//             name: "black clover",
//             img:
//               "https://static.akacdn.ru/files/images/2018/05/4c127405d9fa8f78a9d86052721cbefe.jpg",
//             type: "sub",
//             episode: "136",
//           },
//         ],
//       },
//     },
//   };
// };

export default Index;
